import { createGlobalStyle } from "styled-components";

export const fontFamilies = {
  titillium: "'Titillium', sans-serif",
  montserrat: "'Montserrat', sans-serif",
  lato: "'Lato', sans-serif",
};

const GlobalStyles = createGlobalStyle`
  /* Definição de fontes */
  @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@100;300;400;700;900&display=swap');

  /* Reset de estilos para garantir consistência entre os navegadores */
  body, h1, h2, p, ul, li {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0 auto;
    font-family: ${fontFamilies.titillium};
    padding: 0;
  }

  .banner-slider {
    display: block !important; 

      .slick-slide {
        max-width: initial !important;
      }
      .slick-prev  {
        left: 5%;
        z-index: 1;
      }
      .slick-next {
        right: 5%;
        z-index: 1;
        transform: rotate(180deg);
      }
      .slick-prev, .slick-next {
        &:before {
          content: '';
        }
      }

      @media (max-width: 768px) {

        .slick-dots {
          bottom: 25px;
          ul {
            li {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              border: 1px solid #FAA500;

              &.slick-active {
                background-color: #FAA500;
              }

              button {
                &:before {
                  content: '';
                }
              }
            }
          }
        }
        img {	
          width: 100%;
          height: auto;
        }
      }
  }

  .container {
    max-width: 1598px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .product-card {
    display: flex !important;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
      img {
        height: auto;
        max-height: initial !important;
        margin: 0 16px;
        cursor: pointer;
      }
      h3, h2, p {
        padding: 8px 16px;
        margin: 0;
        color: #353535;
      }
  }
  .slick-slider {
    position: relative;
    display: flex;
    align-items: center;
  }

  .custom-next-arrow {
    transform: rotate(180deg);
  }

  /* Estilos específicos para o banner */
  .banner {
    width: 100%;
  }

  /* Estilos responsivos */
  @media screen and (max-width: 768px) {
    .container {
      padding: 0 0px;
    }
    header {
      padding: 0x;
    }
  }
`;

export default GlobalStyles;
