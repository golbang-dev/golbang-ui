import { LayoutWrapper } from 'components/base/Wrapper';
import React from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  height: 900px;
  background: url('./background2.jpeg');
  background-size: cover;
`;

const CardListWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 40px;
  border-radius: 15px;

  display: flex;
  flex-wrap: no-wrap;
  overflow-x: auto;
  align-items: center;
`;

const ComponentWrapper = styled.div`
  height: 900px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 80px;
`;

const Text = styled.div`
  font-family: 'Noto Serif KR';
  font-size: 40px;
`;

interface CardListProps {
  children?: React.ReactNode;
}

const CardList = ({ children }: CardListProps) => {
  return (
    <BackgroundWrapper>
      <LayoutWrapper>
        <ComponentWrapper>
          <TextWrapper>
            <Text>다른 사람들의 기록도</Text>
            <Text>둘러볼 수 있어요</Text>
          </TextWrapper>
          <CardListWrapper>{children}</CardListWrapper>
        </ComponentWrapper>
      </LayoutWrapper>
    </BackgroundWrapper>
  );
};

export default CardList;
