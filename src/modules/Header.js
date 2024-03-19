import React from "react";
import styled from "styled-components";
import Logo from "./Header/Logo";
import SearchInput from "./Header/SearchInput";
import Menu from "./Header/Menu";
import UserArea from "./Header/UserArea";

const HeaderWrapper = styled.header`
  max-width: 100%;
  width: 100%;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  max-width: 100%;
  width: calc(100% - 322px);
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 32px 0;
  }
`;

const MobileIcons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }

  div {
    display: flex;
    justify-content: start;

    &:last-child {
      justify-content: end;
    }
  }
`;

const DesktopIcons = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

const Icon = styled.img`
  margin-right: 10px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <MobileIcons>
          <div>
            <Icon src="assets/icons/menu-mob.svg" alt="Menu" />
            <Icon src="assets/icons/logo-mob.svg" alt="Logo" />
          </div>
          <div>
            <Icon src="assets/icons/icon-search-mob.svg" alt="Search" />
            <Icon src="assets/icons/icon-minicart.svg" alt="Minicart" />
          </div>
        </MobileIcons>
        <Logo />
        <SearchInput placeholder="O que você busca?" />
        <div className="user-area">
          <UserArea />
        </div>
        <DesktopIcons>
          <Menu />
        </DesktopIcons>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
