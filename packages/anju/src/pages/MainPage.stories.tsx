import { Meta, Story } from '@storybook/react/types-6-0';
import Header from 'components/main/header/Header';
import React from 'react';
import Carousel from 'components/main/carousel/Carousel';
import Card from 'components/main/card/Card';
import CardList from 'components/main/card/CardList';
import Footer from 'components/main/footer/Footer';

export default {
  title: 'Page/MainPage',
} as Meta;

export const Main: Story = args => (
  <>
    <Header />
    <Carousel {...carouselArgs} />
    <CardList>
      <Card {...cardArgs} />
      <Card {...cardArgs} />
      <Card {...cardArgs} />
    </CardList>
    <Footer />
  </>
);

const carouselArgs = {
  phrases: ['대충 아무 말', '다들 글을 써보세요'],
};

const cardArgs = {
  name: '김찬호',
  content: `
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis odit quod
asperiores odio, eligendi eum temporibus rerum porro voluptatibus
consectetur sint enim eveniet est? Quo consequatur dolorem natus
delectus atque.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis odit quod
asperiores odio, eligendi eum temporibus rerum porro voluptatibus
consectetur sint enim eveniet est? Quo consequatur dolorem natus
delectus atque.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis odit quod
asperiores odio, eligendi eum temporibus rerum porro voluptatibus
consectetur sint enim eveniet est? Quo consequatur dolorem natus
delectus atque.
`,
  tag: ['무야호', '김해청년'],
};
