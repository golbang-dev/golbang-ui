import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Carousel, { CarouselProps } from './Carousel';

export default {
  title: 'components/main/Carousel',
  component: Carousel,
} as Meta;

const Template: Story<CarouselProps> = args => <Carousel {...args}></Carousel>;

export const _Carousel = Template.bind({});
_Carousel.args = {
  phrases: ['대충 아무 말', '다들 글을 써보세요'],
};
