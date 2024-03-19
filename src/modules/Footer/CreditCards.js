import React from "react";
import styled from "styled-components";

const IconsContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: space-evenly;
    width: 100%;
    padding-bottom: 32px;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
`;

const CreditCards = () => {
  return (
    <IconsContainer>
      <Icon src={`${process.env.PUBLIC_URL}/assets/icons/visa.svg`} alt="Visa" />
      <Icon src={`${process.env.PUBLIC_URL}/assets/icons/mastercard.svg`} alt="Mastercard" />
      <Icon src={`${process.env.PUBLIC_URL}/assets/icons/visa.svg`} alt="Visa" />
      <Icon src={`${process.env.PUBLIC_URL}/assets/icons/mastercard.svg`} alt="Mastercard" />
    </IconsContainer>
  );
};

export default CreditCards;
