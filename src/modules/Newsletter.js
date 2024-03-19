import React from "react";
import styled from "styled-components";

const NewsletterContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 4px solid rgba(239, 239, 239, 1);
  border-top: 4px solid rgba(239, 239, 239, 1);
  flex-flow: row wrap;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const NewsletterText = styled.label`
  font-size: 24px;
  font-weight: 700;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding-right: 20px;
    text-align: left;
    margin-right: 64px;
  }
`;

const Input = styled.input`
  max-width: 300px;
  border-radius: 4px;
  border: 1px solid #353535;
  padding: 12px;
  margin-bottom: 0;
  outline: none;
  width: auto;

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    max-width: 500px;
    width: 100%;
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 131px;
  border-radius: 4px;
  border: 1px solid #faa500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  outline: none;
  background-color: #faa500;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #d19b33;
  }

  @media screen and (min-width: 768px) {
    width: auto;
    padding: 8px 43px;
    position: relative;
    right: 4px;
  }
`;

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <NewsletterText>Receba Nossa Newsletter</NewsletterText>
      <Input type="email" placeholder="Digite seu e-mail" />
      <Button>Enviar</Button>
    </NewsletterContainer>
  );
};

export default Newsletter;
