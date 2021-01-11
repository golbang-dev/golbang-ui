import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Card, { CardProps } from './Card';
import CardList from './CardList';

export default {
  title: 'components/main/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const _Card = Template.bind({});
_Card.args = {
  name: '김찬호',
  content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sequi voluptas optio sunt voluptatum sit, itaque molestiae, placeat eligendi error numquam illo ipsam earum iusto aperiam. Nulla fugiat ipsum id.`,
  tag: ['김해청년', '무야호'],
};

export const List: Story = args => (
  <CardList>
    <Card {...cardArgs} />
    <Card {...cardArgs} />
    <Card {...cardArgs} />
  </CardList>
);

const cardArgs = {
  name: '김찬호',
  content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sequi voluptas optio sunt voluptatum sit, itaque molestiae, placeat eligendi error numquam illo ipsam earum iusto aperiam. Nulla fugiat ipsum id.`,
  tag: ['김해청년', '무야호'],
};
