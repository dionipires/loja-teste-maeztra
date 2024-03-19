import React from 'react';
import styled from 'styled-components';

const CopywritingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  display: block;
  margin-left: 20px;
`;

const Text = styled.p`
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 8px;
`;

const Image = styled.img`
  width: auto;
  height: auto;
  cursor: pointer;
`;

const Copywriting = () => {
  return (
    <CopywritingContainer>
      <Column>
        <Text>Powered by</Text>
        <Image src="/assets/icons/vtex.svg" alt="VTEX" />
      </Column>
      <Column>
        <Text>Developed by</Text>
        <Image src="/assets/icons/maeztra.svg" alt="Maeztra" />
      </Column>
    </CopywritingContainer>
  );
};

export default Copywriting;
