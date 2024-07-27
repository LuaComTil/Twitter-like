import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../services/axiosConfig';
import { useAuth } from '../../Context/AuthContext';
import PostTweet from '../PostTweet';

const FeedSelector = styled.div`
  width: inherit;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  backdrop-filter: blur(4px);
  border-bottom: 1px solid rgb(62, 65, 68);
`;

const FeedOption = styled.div`
  color: rgb(113, 118, 123);
  text-align: center;
  width: 50%;
  padding:1.2rem 0;
  &:hover {
    background: #181818;
    cursor: pointer;
  }
`;

const FeedOptionSelected = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  text-align: center;
  width: 50%;
  padding:1rem 0 0 0;
  &:hover {
    background: #181818;
    cursor: pointer;
  }
`;

const OptionSelectedBar = styled.div`
  width: 60px;
  height: 4px;
  background: #1DA1F2;
  border-radius: 4px;
`;

const FeedContainer = styled.div`
  background: black;
  color: #FFF;
  flex: 3.5 1 60%;
`;

const TweetContainer = styled.div`
  border-bottom: 1px solid rgb(62, 65, 68);
  padding: 0.5rem 6%;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  margin-right: 8px;
  &:hover {
    text-decoration: underline;
  }
`;

const At = styled.span`
  color: rgb(113, 118, 123);
  font-size: 0.9rem;
`;

const TweetText = styled.p`
  padding-top: 4px;
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
      <FeedSelector>
        <FeedOptionSelected>For You<OptionSelectedBar></OptionSelectedBar></FeedOptionSelected>
        <FeedOption>Following</FeedOption>
      </FeedSelector>
      {isAuthenticated && <PostTweet/>}
      {tweets.map((tweet) => (
        <TweetContainer key={tweet.tweetId}>
          <div>
            <UserName>{tweet.username}</UserName>
            <At>@{tweet.username}</At>
          </div>
          <TweetText>{tweet.content}</TweetText>
            <div style={{display: "flex", justifyContent:"space-between"}}>
              <div style={{display: "flex", gap:"6rem"}}>
            <svg style={{height:"1.3rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Communication / Chat"> <path id="Vector" d="M5.59961 19.9203L7.12357 18.7012L7.13478 18.6926C7.45249 18.4384 7.61281 18.3101 7.79168 18.2188C7.95216 18.1368 8.12328 18.0771 8.2998 18.0408C8.49877 18 8.70603 18 9.12207 18H17.8031C18.921 18 19.4806 18 19.908 17.7822C20.2843 17.5905 20.5905 17.2842 20.7822 16.9079C21 16.4805 21 15.9215 21 14.8036V7.19691C21 6.07899 21 5.5192 20.7822 5.0918C20.5905 4.71547 20.2837 4.40973 19.9074 4.21799C19.4796 4 18.9203 4 17.8002 4H6.2002C5.08009 4 4.51962 4 4.0918 4.21799C3.71547 4.40973 3.40973 4.71547 3.21799 5.0918C3 5.51962 3 6.08009 3 7.2002V18.6712C3 19.7369 3 20.2696 3.21846 20.5433C3.40845 20.7813 3.69644 20.9198 4.00098 20.9195C4.35115 20.9191 4.76744 20.5861 5.59961 19.9203Z" stroke="#3e4144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            <svg style={{height:"1.3rem"}} fill="#3e4144" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" enable-background="new 0 0 52 52"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M51.6,28.8l-2.1-2.1c-0.6-0.6-1.5-0.6-2.1,0l-2.7,2.7C44,30.1,43,29.6,43,28.7V14v-2c0-2.2-1.8-4-4-4h-0.6 H24.5C23.7,8,23,8.7,23,9.5v3c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5,0.7,1.5,1.5v13.2c0,0.9-1.1,1.3-1.8,0.7l-2.6-2.6 c-0.6-0.6-1.6-0.6-2.1,0L28.4,29c-0.6,0.6-0.6,1.5,0,2.1l10.5,10.5c0.6,0.6,1.5,0.6,2.1,0L51.6,31C52.1,30.4,52.1,29.4,51.6,28.8z"></path> <path d="M27.5,38h-11c-0.8,0-1.5-0.7-1.5-1.5V23.3c0-0.9,1.1-1.3,1.8-0.7l2.6,2.6c0.6,0.6,1.6,0.6,2.1,0l2.1-2.1 c0.6-0.6,0.6-1.5,0-2.1L13.2,10.4c-0.6-0.6-1.5-0.6-2.1,0L0.4,21c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0l2.7-2.7 C7.9,21.9,9,22.3,9,23.2V38v2c0,2.2,1.9,4,4.1,4h0.6h13.9c0.8,0,1.5-0.7,1.5-1.5v-3C29,38.7,28.3,38,27.5,38z"></path> </g> </g></svg>
            <svg style={{height:"1.3rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#3e4144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <svg style={{height:"1.3rem"}} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ic_fluent_poll_24_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_poll_24_filled" fill="#3e4144" fill-rule="nonzero"> <path d="M11.7518706,1.99956021 C13.2716867,1.99956021 14.5037411,3.23161462 14.5037411,4.75143076 L14.5037411,19.2499651 C14.5037411,20.7697812 13.2716867,22.0018356 11.7518706,22.0018356 C10.2320544,22.0018356 9,20.7697812 9,19.2499651 L9,4.75143076 C9,3.23161462 10.2320544,1.99956021 11.7518706,1.99956021 Z M18.7518706,6.99956021 C20.2716867,6.99956021 21.5037411,8.23161462 21.5037411,9.75143076 L21.5037411,19.2499651 C21.5037411,20.7697812 20.2716867,22.0018356 18.7518706,22.0018356 C17.2320544,22.0018356 16,20.7697812 16,19.2499651 L16,9.75143076 C16,8.23161462 17.2320544,6.99956021 18.7518706,6.99956021 Z M4.75187055,11.9995602 C6.27168669,11.9995602 7.5037411,13.2316146 7.5037411,14.7514308 L7.5037411,19.2499651 C7.5037411,20.7697812 6.27168669,22.0018356 4.75187055,22.0018356 C3.23205441,22.0018356 2,20.7697812 2,19.2499651 L2,14.7514308 C2,13.2316146 3.23205441,11.9995602 4.75187055,11.9995602 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
              </div>
              <div style={{display: "flex", gap:"8px"}}>
            <svg style={{height:"1.3rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z" stroke="#3e4144" stroke-width="2" stroke-linejoin="round"></path> </g></svg>
            <svg style={{height:"1.3rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#3e4144" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#3e4144" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
            </div>
        </TweetContainer>
      ))}
    </FeedContainer>
  );
};

export default Feed;
