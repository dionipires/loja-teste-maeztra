import React from 'react';
import styled from 'styled-components';
import projectInfo from '../../services/projectinfo.json';

const LogoContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <img src={projectInfo.logo} alt={projectInfo.clientName} />
    </LogoContainer>
  );
};

export default Logo;
