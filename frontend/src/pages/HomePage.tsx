import React, { useState } from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Login from '../components/Login';
import Register from '../components/Register';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const HomeContainer = styled.section`
  display: flex;
  min-height: 100vh;
  width: 100vw;
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
      <Header onLoginClick={openLogin} onRegisterClick={openRegister}/>
      <Feed/>
      <Sidebar/>
      <Login visible={isLoginVisible} onClose={closeLogin}/>
      <Register visible={isRegisterVisible} onClose={closeRegister}/>
    </HomeContainer>
  );
};

export default HomePage;