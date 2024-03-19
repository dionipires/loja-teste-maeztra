import React from "react";
import styled from "styled-components";
import benefitsData from "../services/benefits.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BenefitsContainer = styled.div`
  max-width: 100%;
  width: calc(100% - 322px);
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1440px) {
    width: calc(100% - 40px);
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    width: 100%;
    padding: 0;
  }
`;

const BenefitsTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;

const BenefitsListItem = styled.li`
  display: flex !important;
  align-items: center;
  justify-content: space-evenly;
  height: auto;
  border-radius: 4px;
  background: #efefef;
  padding: 14px;
  margin: 0 8px;
  max-width: 308px;
  width: 100%;
  cursor: pointer;

  strong {
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const BenefitsListItemIcon = styled.img`
  margin: 0px 12px;
  width: auto;
  @media (max-width: 768px) {
    margin: 0 auto;
  
  }
`;

const Benefits = () => {
  const isMobile = window.innerWidth <= 768;

  const sliderSettings = {
    arrows: false, // Desativa as setas de navegação
  };

  if (isMobile) {
    return (
      <BenefitsContainer>
        <BenefitsTitle>Por que comprar na Maeztra?</BenefitsTitle>
        <Slider {...sliderSettings}>
          {benefitsData.map((benefit) => (
            <BenefitsListItem key={benefit.id}>
              <BenefitsListItemIcon src={benefit.icon} alt={benefit.title} />
              <div>
                <strong>{benefit.title}</strong>
                <p>{benefit.description}</p>
              </div>
            </BenefitsListItem>
          ))}
        </Slider>
      </BenefitsContainer>
    );
  } else {
    return (
      <BenefitsContainer>
        <BenefitsTitle>Por que comprar na Maeztra?</BenefitsTitle>
        <BenefitsList>
          {benefitsData.map((benefit) => (
            <BenefitsListItem key={benefit.id}>
              <BenefitsListItemIcon src={benefit.icon} alt={benefit.title} />
              <div>
                <strong>{benefit.title}</strong>
                <p>{benefit.description}</p>
              </div>
            </BenefitsListItem>
          ))}
        </BenefitsList>
      </BenefitsContainer>
    );
  }
};

export default Benefits;
