/* eslint-disable functional/immutable-data */
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { Hero } from './';

export default {
  title: 'Atoms/Hero',
  component: Hero,
} as Meta;

const Template: Story = (properties) => <Hero {...properties} />;

export const Default = Template.bind({});
Default.args = {
  label: 'texto de test',
};
