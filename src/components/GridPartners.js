import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GridPartnersContainer = styled.div`
  max-width: 100%;
  width: calc(100% - 322px);
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 768px) {
    margin-top: 40px;
    width: 100%;
    padding: 0;
  }
  
  .Partners {
    
    @media (max-width: 768px) {
      display: block;
      margin: 0 auto;
      .slick-slide li {
        display: block;
        
      }
      .slick-slide img {
        display: block;
        margin: 0 auto;
      }
    }
  }
`;

const GridPartnersTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 49px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 17px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const GridPartnersList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

const GridPartnersListItem = styled.li`
  display: flex;
  justify-content: center;
  margin: 0 15px 80px 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
`;

const GridPartnersImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const GridPartners = () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      className: "Partners", 
    };

    return (
      <GridPartnersContainer>
        <GridPartnersTitle>Marcas Parceiras</GridPartnersTitle>
        <Slider {...settings}>
          <GridPartnersListItem>
            <GridPartnersImage
              src={require("../assets/image/marcas-01.png")}
              alt="Marca 01"
            />
          </GridPartnersListItem>
          <GridPartnersListItem>
            <GridPartnersImage
              src={require("../assets/image/marcas-02.png")}
              alt="Marca 02"
            />
          </GridPartnersListItem>
          <GridPartnersListItem>
            <GridPartnersImage
              src={require("../assets/image/marcas-03.png")}
              alt="Marca 03"
            />
          </GridPartnersListItem>
          <GridPartnersListItem>
            <GridPartnersImage
              src={require("../assets/image/marcas-04.png")}
              alt="Marca 04"
            />
          </GridPartnersListItem>
          <GridPartnersListItem>
            <GridPartnersImage
              src={require("../assets/image/marcas-05.png")}
              alt="Marca 05"
            />
          </GridPartnersListItem>
        </Slider>
      </GridPartnersContainer>
    );
  } else {
    return (
      <GridPartnersContainer>
        <GridPartnersTitle>Marcas Parceiras</GridPartnersTitle>
        <GridPartnersList>
          <GridPartnersListItem>
            <GridPartnersImage
              src={require("../assets/image/marcas-01.png")}
              alt="Marca 01"
            />
          </GridPartnersListItem>
          <GridPartnersListItem>
            <GridPartnersImage
              src={require("../assets/image/marcas-02.png")}
              alt="Marca 02"
            />
          </GridPartnersListItem>
          <GridPartnersListItem>
            <GridPartnersImage
              src={require("../assets/image/marcas-03.png")}
              alt="Marca 03"
            />
          </GridPartnersListItem>
          <GridPartnersListItem>
            <GridPartnersImage
              src={require("../assets/image/marcas-04.png")}
              alt="Marca 04"
            />
          </GridPartnersListItem>
          <GridPartnersListItem>
            <GridPartnersImage
              src={require("../assets/image/marcas-05.png")}
              alt="Marca 05"
            />
          </GridPartnersListItem>
        </GridPartnersList>
      </GridPartnersContainer>
    );
  }
};

export default GridPartners;
