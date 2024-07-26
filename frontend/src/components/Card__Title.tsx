import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h6`
  font-weight: 700;
  font-size: 1.2rem;
`;

interface CardProps {
  children: ReactNode;
}

const Card__Title: React.FC<CardProps> = ({children}) => {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  );
};

export default Card__Title;
