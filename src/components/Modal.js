import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles, { fontFamilies } from "../Styles/GlobalStyles";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  max-width: 848px;
  width: 100%;
  height: 529.65px;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-width: initial;
    width: 85%;
    height: auto;
    padding: 24px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -24px;
  right: 0;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  font-family: ${fontFamilies.lato};
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
`;

const ColumnOne = styled.div`
  background: url('https://dionipires.github.io/loja-teste-maeztra/assets/image/img-modalNewsletter.png');
  background-size: cover;
  background-position: -340px 0px;
  background-repeat: no-repeat;
  width: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 0 0;
  max-width: 322px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: initial;
  }
`;

const TitleModal = styled.p`
  font-family: ${fontFamilies.titillium};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #464b54;
  margin: 12px auto;
`;
const Text = styled.p`
  margin-bottom: 10px;
  font-family: ${fontFamilies.lato};
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: center;
  color: #787d83;

  strong {
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: center;
  }
`;

const Input = styled.input`
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  width: 303px;
  padding: 12px 10px;
  margin-top: 25px;
  outline: none;
  color: #787d83;
`;

const Button = styled.button`
  font-family: ${fontFamilies.titillium};
  margin-bottom: 10px;
  border-radius: 10px;
  width: 322px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  text-transform: uppercase;
  color: #fff;
  border: 0;
  background: #faa500;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background: #d19b33;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <ModalOverlay>
      <ModalContent ref={modalRef}>
        <CloseButton onClick={onClose}>FECHAR</CloseButton>
        <ColumnOne></ColumnOne>
        <Column>
          <Icon src={`${process.env.PUBLIC_URL}/assets/icons/mail.svg`} alt="Ícone" />
          <TitleModal>Bem Vindo à MAEZTRA</TitleModal>
          <Text>
            Receba em Primeira mão
            <br />
            <strong>desconto e ofertas exclusivas</strong>
          </Text>
          <Input type="email" placeholder="Digite seu e-mail" />
          <Button>
            Enviar <Icon src={`${process.env.PUBLIC_URL}/assets/icons/send.svg`} alt="Enviar" />
          </Button>
        </Column>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
