import React from 'react';
import styled from 'styled-components';

const TipbarHeaderContainer = styled.div`
  background-color: #000;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const TipbarHeaderText = styled.p`
  margin: 0;
`;

const TipbarHeader = () => {
  return (
    <TipbarHeaderContainer>
      <TipbarHeaderText>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</TipbarHeaderText>
    </TipbarHeaderContainer>
  );
};

export default TipbarHeader;
