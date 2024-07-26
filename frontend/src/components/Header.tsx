import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #181818;
`;

const Title = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFF;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick  }) => {
  return (
    <HeaderContainer>
      <Title href='http://localhost:5173'>Bostiller</Title>
      <ButtonContainer>
        <Button onClick={onLoginClick}>Login</Button>
        <Button onClick={onRegisterClick}>Register</Button>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
