import productsData from "../services/product.json";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = styled.div`
  max-width: 1598px;
  margin: 0 auto 64px;
  padding: 0 20px;
  @media (max-width: 768px) {
    margin-top: 40px;
    width: 100%;
    padding: 0;
  }
`;
const ColorOption = styled.div`
  display: flex;
  padding-left: 16px;
  margin: 8px 0;
  cursor: pointer;

  .color-option {
    width: 27px;
    height: 27px;
    margin-right: 8px;
    border-radius: 4px;
  }
`;
const CarouselTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 49px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 24px;
`;
const Carouselvalue = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
`;
const CarouselButton = styled.button`
  width: 90%;
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

const Carousel = () => {
  const CustomNextArrow = (props) => (
    <div {...props} className="custom-next-arrow">
      <img src="../assets/icons/arrow.svg" alt="Next" />
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div {...props}>
      <img src="../assets/icons/arrow.svg" alt="Prev" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <CarouselTitle>As Mais Pedidas</CarouselTitle>
      <Slider {...settings}>
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageProduct}
              alt={product.name}
              style={{ maxHeight: "381px" }}
            />
            <ColorOption className="color-options">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className="color-option"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </ColorOption>
            <Carouselvalue>Valor: R${product.value.toFixed(2)}</Carouselvalue>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <CarouselButton>Adicionar</CarouselButton>
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default Carousel;
