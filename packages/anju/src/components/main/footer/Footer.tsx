import { LayoutWrapper } from 'components/base/Wrapper';
import React from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px;
  height: 140px;
`;

const Footer = () => {
  return (
    <BackgroundWrapper>
      <LayoutWrapper>
        <FooterWrapper>&copy; 2021, golbang.dev</FooterWrapper>
      </LayoutWrapper>
    </BackgroundWrapper>
  );
};

export default Footer;
