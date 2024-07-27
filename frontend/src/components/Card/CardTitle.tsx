import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h6`
  font-weight: 700;
  font-size: 1.5rem;
  padding: 0.8rem 1rem;
`;

interface CardProps {
  children: ReactNode;
}

const CardTitle: React.FC<CardProps> = ({children}) => {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  );
};

export default CardTitle;
