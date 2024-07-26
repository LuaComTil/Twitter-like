import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Card__Title from './Card__Title';

const SearchBar = styled.input`
  border:2px solid rgba(255, 255, 255, 0);
  border-radius: 64px;
  padding: 0.8rem 1rem;
  background: rgb(62, 65, 68);
  color: #FFF;

    &:focus {
    border:2px solid #1DA1F2;
  }
`;

const SideBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: black;
  width: 100%;
  height: 100vh;
  flex: 3.5 1 35%;
  border-left: 1px solid rgb(62, 65, 68);
  color: #FFF;
  gap: 20px;
  padding: 20px 0 0 24px;
`;

const Premium = styled.section`
  border: 1px solid rgb(62, 65, 68);
  border-radius: 16px;
  padding: 0.8rem 1rem;
`;

const SideBar: React.FC = () => {
  return (
    <SideBarContainer>
      <SearchBar placeholder='Search'/>
      <Premium>
        <Card__Title>Subscribe to Premium</Card__Title>
        <p style={{padding:"0.6rem 0"}}>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <Button onClick={() => {console.log("Subscribe clicked")}}>Subscribe</Button>
      </Premium>
    </SideBarContainer>
  );
};

export default SideBar;
