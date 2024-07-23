import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f4f4f4;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
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

// Component
interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  return (
    <HeaderContainer>
      <Title>SocialZ</Title>
      <ButtonContainer>
        <Button onClick={onLoginClick}>Login</Button>
        <Button>Register</Button>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
