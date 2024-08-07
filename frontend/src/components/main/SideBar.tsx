import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import CardTitle from '../Card/CardTitle';
import Card from '../Card/Card';

const SideBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: black;
  width: 100%;
  min-height: 100vh;
  flex: 3.5 1 35%;
  border-left: 1px solid rgb(62, 65, 68);
  color: #FFF;
  gap: 20px;
  padding: 0 0 0 24px;
`;

const SearchBar = styled.input`
  width: calc( 100% - 4rem );
  position: sticky;
  top: 0;
  margin: 0.4rem;
  border:2px solid rgba(255, 255, 255, 0);
  border-radius: 64px;
  padding: 0.8rem 1rem 0.8rem 2.4rem;
  background: #292b2e;
  color: #FFF;
  &:focus {
    border:2px solid #1DA1F2;
  }
`;

const SearchContainer = styled.section`
  background: black;
`;


const Premium = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const PremiumTitle = styled.h6`
  font-weight: 700;
  font-size: 1.5rem;
`;

const Trend = styled.div`
  position: relative;
  padding: 0.6rem 1rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #181818;
    transition: 0.2s;
  }
`;

const TrendContext = styled.p`
  font-size: 0.9rem;
  color: rgb(113, 118, 123);
`;

const TrendContent = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  padding: 4px 0;
`;

const TrendPosts = styled.p`
  font-size: 0.9rem;
  color: rgb(113, 118, 123);
`;

const TrendWith = styled.a`
  color: #1DA1F2;
  &:hover {
    text-decoration: underline;
  }
`;

const More = styled.p`
  font-size: 1rem;
  position: absolute;
  border-radius: 99px;
  top: 20%;
  right: 10%;
    &:hover {
  }
`;

const UserToFollow = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #181818;
    transition: 0.2s;
  }
`;

const ButtonFollow = styled.p`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  border-radius: 99px;
  background-color: #FFF;
  color: black;
  transition: background-color 0.3s;
  width: fit-content;
`;

const FollowName = styled.p`
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;

const FollowAt = styled.p`
  color: rgb(113, 118, 123);
`;

const SideBar: React.FC = () => {
  return (
    <SideBarContainer>
      <SearchContainer style={{position:"sticky", top:"0", zIndex:"10"}}>
        <svg style={{top:"28%", left:"14px", zIndex:"1", position:"absolute", height:"1.6rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#4b4f53" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        <SearchBar placeholder='Search'/>
      </SearchContainer>
      <Card>
        <Premium>
          <PremiumTitle>Subscribe to Premium</PremiumTitle>
          <p style={{padding:"0.6rem 0"}}>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
          <Button onClick={() => {console.log("Subscribe clicked")}}>Subscribe</Button>
        </Premium>
      </Card>
      <Card>
        <CardTitle>What's happening</CardTitle>
        <Trend>
          <TrendContext>Trending</TrendContext>
          <TrendContent>React</TrendContent>
          <TrendPosts>41.5K posts</TrendPosts>
          <More>
            <svg style={{height:"1rem"}} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="rgb(113, 118, 123)" fill-rule="evenodd" d="M3 8a2 2 0 100 4 2 2 0 000-4zm5 2a2 2 0 114 0 2 2 0 01-4 0zm7 0a2 2 0 114 0 2 2 0 01-4 0z"></path> </g></svg>
          </More>
        </Trend>
        <Trend>
          <TrendContext>Trending with <TrendWith href="#">LuaComTil</TrendWith></TrendContext>
          <TrendContent>RestAPI</TrendContent>
          <TrendPosts>7.2K posts</TrendPosts>
          <More>
            <svg style={{height:"1rem"}} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="rgb(113, 118, 123)" fill-rule="evenodd" d="M3 8a2 2 0 100 4 2 2 0 000-4zm5 2a2 2 0 114 0 2 2 0 01-4 0zm7 0a2 2 0 114 0 2 2 0 01-4 0z"></path> </g></svg>
          </More>
        </Trend>
        <Trend>
          <TrendContext>Trending in Bostil</TrendContext>
          <TrendContent>Java</TrendContent>
          <TrendPosts>3.1K posts</TrendPosts>
          <More>
            <svg style={{height:"1rem"}} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="rgb(113, 118, 123)" fill-rule="evenodd" d="M3 8a2 2 0 100 4 2 2 0 000-4zm5 2a2 2 0 114 0 2 2 0 01-4 0zm7 0a2 2 0 114 0 2 2 0 01-4 0z"></path> </g></svg>
          </More>
        </Trend>
        <Trend>
          <TrendContext>Trending in Bostil</TrendContext>
          <TrendContent>Spring</TrendContent>
          <TrendPosts>2.3K posts</TrendPosts>
          <More>
            <svg style={{height:"1rem"}} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="rgb(113, 118, 123)" fill-rule="evenodd" d="M3 8a2 2 0 100 4 2 2 0 000-4zm5 2a2 2 0 114 0 2 2 0 01-4 0zm7 0a2 2 0 114 0 2 2 0 01-4 0z"></path> </g></svg>
          </More>
        </Trend>
        <Trend>
          <TrendContext>Trending</TrendContext>
          <TrendContent>JWT</TrendContent>
          <TrendPosts>1.7K posts</TrendPosts>
          <More>
            <svg style={{height:"1rem"}} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="rgb(113, 118, 123)" fill-rule="evenodd" d="M3 8a2 2 0 100 4 2 2 0 000-4zm5 2a2 2 0 114 0 2 2 0 01-4 0zm7 0a2 2 0 114 0 2 2 0 01-4 0z"></path> </g></svg>
          </More>
        </Trend>
        <div style={{color:"#1DA1F2", padding:"0.8rem 1rem"}}>Show More</div>
      </Card>
      <Card>
        <CardTitle>Who to follow</CardTitle>
          <UserToFollow>
            <div style={{display:"flex", alignItems:"center"}}>
            <img style={{marginRight:"0.5rem", float:"left", maxWidth:"48px", borderRadius:"99px"}} src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"/>
              <div style={{display:"flex", flexDirection:"column"}}>
                <FollowName>Fulano</FollowName>
                <FollowAt>@fulano</FollowAt>
              </div>
            </div>
            <ButtonFollow>Follow</ButtonFollow>
          </UserToFollow>
          <UserToFollow>
            <div style={{display:"flex", alignItems:"center"}}>
            <img style={{marginRight:"0.5rem", float:"left", maxWidth:"48px", borderRadius:"99px"}} src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"/>
              <div style={{display:"flex", flexDirection:"column"}}>
                <FollowName>Ciclano</FollowName>
                <FollowAt>@Ciclano</FollowAt>
              </div>
            </div>
            <ButtonFollow>Follow</ButtonFollow>
          </UserToFollow>
          <UserToFollow>
            <div style={{display:"flex", alignItems:"center"}}>
            <img style={{marginRight:"0.5rem", float:"left", maxWidth:"48px", borderRadius:"99px"}} src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"/>
              <div style={{display:"flex", flexDirection:"column"}}>
                <FollowName>Beltrano</FollowName>
                <FollowAt>@Beltrano</FollowAt>
              </div>
            </div>
            <ButtonFollow>Follow</ButtonFollow>
          </UserToFollow>
          <UserToFollow>
            <div style={{display:"flex", alignItems:"center"}}>
            <img style={{marginRight:"0.5rem", float:"left", maxWidth:"48px", borderRadius:"99px"}} src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"/>
              <div style={{display:"flex", flexDirection:"column"}}>
                <FollowName>Zutano</FollowName>
                <FollowAt>@Zutano</FollowAt>
              </div>
            </div>
            <ButtonFollow>Follow</ButtonFollow>
          </UserToFollow>
          <UserToFollow>
            <div style={{display:"flex", alignItems:"center"}}>
            <img style={{marginRight:"0.5rem", float:"left", maxWidth:"48px", borderRadius:"99px"}} src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"/>
              <div style={{display:"flex", flexDirection:"column"}}>
                <FollowName>Perengano</FollowName>
                <FollowAt>@Perengano</FollowAt>
              </div>
            </div>
            <ButtonFollow>Follow</ButtonFollow>
          </UserToFollow>
          <div style={{color:"#1DA1F2", padding:"0.8rem 1rem"}}>Show More</div>
      </Card>
    </SideBarContainer>
  );
};

export default SideBar;
