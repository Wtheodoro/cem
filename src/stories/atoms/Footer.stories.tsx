/* eslint-disable functional/immutable-data */
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { Footer } from './Footer';

export default {
  title: 'Atoms/Footer',
  component: Footer,
} as Meta;

const Template: Story = (properties) => <Footer {...properties} />;

export const Default = Template.bind({});
Default.args = {};
