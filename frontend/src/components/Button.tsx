import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  border-radius: 99px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;
  width: fit-content;

  &:hover {
    background-color: #0056b3;
  }
`;

interface ButtonProps {
  children: ReactNode;
  onClick: ()=> void;
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
