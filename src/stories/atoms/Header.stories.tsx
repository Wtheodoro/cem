/* eslint-disable functional/immutable-data */
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { Header } from './Header';

export default {
  title: 'Atoms/Header',
  component: Header,
} as Meta;

const Template: Story = (properties) => <Header {...properties} />;

export const Default = Template.bind({});
Default.args = {};
