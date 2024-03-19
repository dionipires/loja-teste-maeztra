import React from "react";
import styled from "styled-components";

const UsersArea = styled.div`
  padding-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SpanDefault = styled.span`
  margin: 0px 48px;
  cursor: pointer;
`;

const IconUsers = styled.img`
  margin-right: 10px;
  cursor: pointer;
`;

const MyCart = styled.span`
  color: #353535;
  padding: 14px 12px;
  border: 1px solid #faa500;
  border-radius: 8px;
  cursor: pointer;
`;

const UserArea = () => {
  return (
    <UsersArea className="user-area">
      <SpanDefault>
        <IconUsers src="assets/icons/icon-user.svg" alt="Ícone Minha Conta" />
        Minha Conta
      </SpanDefault>
      <SpanDefault>
        <IconUsers src="assets/icons/icon-heart.svg" alt="Ícone Minha Conta" />
        Minha Conta
      </SpanDefault>
      <MyCart>
        <IconUsers
          src="assets/icons/icon-shoppingbag.svg"
          alt="Ícone Meu Carrinho"
        />
        Meu Carrinho
      </MyCart>
    </UsersArea>
  );
};

export default UserArea;
