import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  border: 1px solid rgb(62, 65, 68);
  border-radius: 16px;
`;

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};

export default Card;
