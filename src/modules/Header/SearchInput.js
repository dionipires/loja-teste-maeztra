import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    background: #efefef;
    border-radius: 10px;
    max-width: 791px;
    width: 40%;
    margin: 24px 90px;
  
  @media (max-width: 1440px) {
    width: 26%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const InputField = styled.input`
  width: 100%;
  border: none;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  background: #efefef;
  color: #353535;
  outline: none;
  border-radius: 10px;
  padding-left: 24px;
`;

const SearchButton = styled.button`
  width: 119px;
  background: #faa500;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  color: #fff;
  margin-left: 10px;
  padding: 10px 38px;
  cursor: pointer;

  &:hover {
    background: #d19b33;
  }
`;

const SearchInput = ({ placeholder }) => {
  return (
    <InputContainer>
      <InputField type="text" placeholder={placeholder} />
      <SearchButton type="submit">Buscar</SearchButton>
    </InputContainer>
  );
};

export default SearchInput;
