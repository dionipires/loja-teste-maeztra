import React, { useState } from "react";
import styled from "styled-components";

const LinksContainer = styled.div`
  display: none;
  background-color: #fff;
  @media (min-width: 768px) {
    display: flex;
    width: 1598px;
    max-width: 100%;
    margin: 0 auto;
    justify-content: space-evenly;
  }
`;

const MobileAccordion = styled.div`
  h3 {
    display: none;
    @media (max-width: 767px) {
      display: block;
      font-size: 16px;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 0px;
      text-align: left;
      width: auto;
      padding: 0px 30px;
      position: relative;
    }
  }
  @media (max-width: 767px) {
    display: block;
  }

  .accordion-content {
    overflow: hidden;
    transition: height 0.9s ease;
    height: ${(props) => (props.active ? "auto" : "0px")};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h3`
  color: #353535;
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  cursor: pointer;

  @media (max-width: 767px) {
    display: none;
  }
`;

const Icon = styled.img`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%)
    ${(props) => (props.rotate ? "rotate(180deg)" : "rotate(90deg)")};
  transition: transform 0.5s ease;
`;

const Link = styled.a`
  color: #353535;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;

  &:hover {
    text-decoration: none;
    transition: height 0.9s ease;
  }

  &:last-child {
    margin-bottom: 56px;
  }

  @media (max-width: 767px) {
    padding: 0px 30px;
  }
`;

const Links = () => {
  const [activeColumn, setActiveColumn] = useState(null);

  const toggleAccordion = (index) => {
    setActiveColumn(index === activeColumn ? null : index);
  };

  return (
    <>
      <LinksContainer>
        <Column>
          <ColumnTitle>Informações</ColumnTitle>
          <Link href="#">Quem Somos</Link>
          <Link href="#">Prazo de Envio</Link>
          <Link href="#">Trocas e Devoluções</Link>
          <Link href="#">Promoções e Cupons</Link>
        </Column>
        <Column>
          <ColumnTitle>Minha Conta</ColumnTitle>
          <Link href="#">Minha Conta</Link>
          <Link href="#">Meus Pedidos</Link>
          <Link href="#">Cadastre-se</Link>
        </Column>
        <Column>
          <ColumnTitle>Onde nos Encontrar</ColumnTitle>
          <Link href="#">Lojas</Link>
          <Link href="#">Endereço</Link>
        </Column>
      </LinksContainer>

      <MobileAccordion active={activeColumn !== null}>
        {["Informações", "Minha Conta", "Onde nos Encontrar"].map(
          (title, index) => (
            <div key={index}>
              <ColumnTitle onClick={() => toggleAccordion(index)}>
                {title}
                <Icon
                  src="assets/icons/plus.svg"
                  rotate={activeColumn === index}
                />
              </ColumnTitle>
              <div className="accordion-content">
                {activeColumn === index && (
                  <Column>
                    <Link href="#">Quem Somos</Link>
                    <Link href="#">Prazo de Envio</Link>
                    <Link href="#">Trocas e Devoluções</Link>
                    <Link href="#">Promoções e Cupons</Link>
                  </Column>
                )}
              </div>
            </div>
          )
        )}
      </MobileAccordion>
    </>
  );
};

export default Links;
