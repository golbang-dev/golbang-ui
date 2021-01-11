import React from 'react';
import styled from 'styled-components';
import { LayoutWrapper } from '../../base/Wrapper';
import { BsSearch } from 'react-icons/bs';

const BackgroundWrapper = styled.div`
  height: 900px;
  background-image: url('./background.jpeg');
  background-size: cover;
`;

const CarouselWrapper = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    font-family: 'Noto Serif KR';
    font-size: 50px;
  }
`;

const CarouselSearchWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;

  transition: background-color 0.3s linear;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  height: 60px;
  width: 360px;

  svg {
    width: 45px;
    padding-left: 20px;
    margin-right: 10px;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const CarouselSearchInput = styled.input`
  border: none;

  height: 40px;
  font-size: 20px;
  background: none;

  ::placeholder {
    transition: color 0.3s linear;
    color: #fff;
  }

  :focus {
    outline: none;

    ::placeholder {
      color: gray;
    }
  }
`;

export interface CarouselProps {
  phrases: string[];
}

const Carousel = (prop: CarouselProps) => {
  const { phrases } = prop;

  return (
    <BackgroundWrapper>
      <LayoutWrapper>
        <CarouselWrapper>
          {phrases.map(phrase => (
            <div>{phrase}</div>
          ))}
          <CarouselSearchWrapper>
            <BsSearch />
            <CarouselSearchInput placeholder="이름을 검색하세요" />
          </CarouselSearchWrapper>
        </CarouselWrapper>
      </LayoutWrapper>
    </BackgroundWrapper>
  );
};

export default Carousel;
