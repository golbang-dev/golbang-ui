import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Header from 'components/main/header/Header';

export default {
  title: 'components/main/Header',
  component: Header,
} as Meta;

const Template: Story = args => <Header {...args} />;

export const _Header = Template.bind({});
_Header.args = {};
