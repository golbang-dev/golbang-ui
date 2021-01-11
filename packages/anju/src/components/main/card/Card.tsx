import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  flex-shrink: 0;
  width: 500px;
  height: 400px;

  border-radius: 15px;
  margin-right: 40px;
  padding: 30px;

  background-color: rgba(255, 255, 255, 0.06);
`;

const MetaWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;

  margin-right: 20px;
`;

const Name = styled.div`
  font-size: 20px;
`;

const ContentWrapper = styled.article`
  margin-top: 20px;

  overflow: hidden;
  text-overflow: ellipsis;

  height: calc(400px - 2 * 30px - 50px - 50px - 2 * 20px);
`;

const TagListWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  height: 50px;
  width: fit-content;

  border-radius: 10px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Tag = styled.div`
  &:nth-of-type(n + 2) {
    margin-left: 10px;
  }
`;

export interface CardProps {
  iconSrc?: string;
  name: string;
  content: string;
  tag?: string[];
}

const Card = (prop: CardProps) => {
  const { iconSrc = '', name, content, tag = [] } = prop;

  return (
    <CardWrapper>
      <MetaWrapper>
        <Icon src={iconSrc} />
        <Name>{name}</Name>
      </MetaWrapper>
      <ContentWrapper>{content}</ContentWrapper>
      {tag.length > 0 && (
        <TagListWrapper>
          {tag.map(item => (
            <Tag>#{item}</Tag>
          ))}
        </TagListWrapper>
      )}
    </CardWrapper>
  );
};

export default Card;
