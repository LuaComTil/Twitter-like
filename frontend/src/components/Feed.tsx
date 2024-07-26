import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../services/axiosConfig';
import { useAuth } from '../Context/AuthContext';
import PostTweet from './PostTweet';

const FeedContainer = styled.div`
  background: black;
  color: #FFF;
  flex: 3.5 1 60%;
`;

const TweetContainer = styled.div`
  border: 1px solid rgb(62, 65, 68);
  padding: 0.5rem 6%;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 500;
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

const Feed: React.FC = () => {
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
          <UserName>{tweet.username}</UserName>
          <TweetText>{tweet.content}</TweetText>
        </TweetContainer>
      ))}
    </FeedContainer>
  );
};

export default Feed;
