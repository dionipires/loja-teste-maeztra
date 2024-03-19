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

const SocialIcons = () => {
  return (
    <IconsContainer>
      <Icon src={`${process.env.PUBLIC_URL}/assets/icons/facebook.svg`} alt="Facebook" />
      <Icon src={`${process.env.PUBLIC_URL}/assets/icons/linkedin.svg`} alt="LinkedIn" />
      <Icon src={`${process.env.PUBLIC_URL}/assets/icons/instagram.svg`} alt="Instagram" />
      <Icon src={`${process.env.PUBLIC_URL}/assets/icons/youtube.svg`} alt="YouTube" />
    </IconsContainer>
  );
};

export default SocialIcons;
