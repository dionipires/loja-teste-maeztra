import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  max-width: 100%;
  width: calc(100% - 322px);
  max-height: 480px;
  margin: 0 auto 80px;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1440px) {
    width: calc(100% - 40px);
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const TextColumn = styled.div`
  width: 30%;
  padding-right: 64px;
  @media (max-width: 768px) {
    width: 85%;
    padding: 8px 0;
    margin: 0 auto;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;
  min-height: 480px;
  background: url('https://dionipires.github.io/loja-teste-maeztra/assets/image/bannerContent.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    width: 100%;
    margin: 8px 0;
    height: 100%;
    min-height: 184px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 16px;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 768px) {
    padding-bottom: 24px;
  }
`;

const FeaturedSection = () => {
  return (
    <SectionContainer>
      <TextColumn>
        <Title>Lorem ipsum</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </Text>
      </TextColumn>
      <ImageColumn></ImageColumn>
    </SectionContainer>
  );
};

export default FeaturedSection;
