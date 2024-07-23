import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from './services/axiosConfig';
import { useAuth } from './Context/AuthContext';
import PostTweet from './components/PostTweet';

const FeedContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TweetContainer = styled.div`
  border-bottom: 1px solid #e1e8ed;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const UserName = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const TweetText = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
`;

interface Tweet {
  tweetId: number;
  content: string;
  username: string;
}

const FeedPage: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    axios.get('http://localhost:8080/feed')
    .then(response => {
      setTweets(response.data.feedItems);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <FeedContainer>
      {isAuthenticated && <PostTweet/>}
      {tweets.map((tweet) => (
        <TweetContainer key={tweet.tweetId}>
          <UserInfo>
            <UserName>{tweet.username}</UserName>
          </UserInfo>
          <TweetText>{tweet.content}</TweetText>
        </TweetContainer>
      ))}
    </FeedContainer>
  );
};

export default FeedPage;
