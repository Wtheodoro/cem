/* eslint-disable functional/immutable-data */
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Title from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
} as Meta;

const Template: Story = (properties) => <Title {...properties}>{properties.children}</Title>;

export const Default = Template.bind({});
Default.args = {
  children: 'Um breve título',
};
