import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannersData from "../services/banner.json";
import styled from "styled-components";
import GlobalStyles, { fontFamilies } from "../Styles/GlobalStyles";

const BannerContainer = styled.div`
  position: relative;
`;

const SlideWrapper = styled.div`
  position: relative;
`;

const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -50%);
  text-align: left;
  padding: 0 20px;
  color: #fff;
  z-index: 1;
  font-family: ${fontFamilies.montserrat};
  max-width: 518px;

  @media (max-width: 768px) {
    transform: translate(-50%, -50%);
    text-align: left;
    padding-left: 90px;
    max-width: initial;
  }

  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 30px;
      font-weight: 700;
      line-height: 37px;
      letter-spacing: 0em;
    }
  }
  p {
    margin: 40px 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    @media (max-width: 768px) {
      width: 350px;
    }
  }
  button {
    background: #faa500;
    width: 128px;
    height: 48px;
    border-radius: 10px;
    border: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    cursor: pointer;

    &:hover {
      background: #d19b33;
    }
  }
`;

const CustomNextArrow = (props) => (
  <div {...props}>
    <img src="assets/icons/arrow.svg" alt="Next" />
  </div>
);

const CustomPrevArrow = (props) => (
  <div {...props}>
    <img src="assets/icons/arrow.svg" alt="Prev" />
  </div>
);

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: isMobile, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />, 
    className: "banner-slider", 
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "auto", textAlign: "center" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <BannerContainer>
      <Slider {...settings}>
        {bannersData.map((banner) => (
          <SlideWrapper key={banner.id}>
            <img
              src={isMobile ? banner.imageMobile : banner.image}
              alt={banner.name}
            />
            <BannerContent className="banner-content">
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
              <button>{banner.textButton}</button>
            </BannerContent>
          </SlideWrapper>
        ))}
      </Slider>
    </BannerContainer>
  );
};

export default Banner;
