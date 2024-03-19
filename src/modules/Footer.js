import React from 'react';
import styled from 'styled-components';
import Links from './Footer/Links';
import SocialIcons from './Footer/SocialIcons';
import CreditCards from './Footer/CreditCards';
import Copywriting from './Footer/Copywriting';

const FooterContainer = styled.footer`
  color: #353535;
  padding: 0px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
`;

const FooterRowLinks = styled.div`
  background-color: #fff;
  color: #fff;
  margin-bottom: 0;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    max-width: initial;
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 150px;
  }
`;
const FooterRow = styled.div`
    background-color: #353535;
    color: #fff;
    margin-bottom: 0;
    padding: 24px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 20px 161px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterRowLinks>
          <Links />
        </FooterRowLinks>
        <FooterRow>
          <SocialIcons />
          <CreditCards />
          <Copywriting />
        </FooterRow>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
