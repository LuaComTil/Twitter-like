import React, { useState } from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Login from '../components/Login';
import Register from '../components/Register';
import styled from 'styled-components';
import SideBar from '../components/SideBar';

const HomeContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  background: black;
`;

const HomeInnerContainer = styled.section`
  display: flex;
  padding: 0 10%;
`;

const HomePage: React.FC = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  const openLogin = () => setIsLoginVisible(true);
  const closeLogin = () => setIsLoginVisible(false);

  const openRegister = () => setIsRegisterVisible(true);
  const closeRegister = () => setIsRegisterVisible(false);

  return (
    <HomeContainer>
      <HomeInnerContainer>
        <Header onLoginClick={openLogin} onRegisterClick={openRegister}/>
        <Feed/>
        <SideBar/>
        <Login visible={isLoginVisible} onClose={closeLogin}/>
        <Register visible={isRegisterVisible} onClose={closeRegister}/>
      </HomeInnerContainer>
    </HomeContainer>
  );
};

export default HomePage;