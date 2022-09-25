/* eslint-disable functional/immutable-data */
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import HowToHelp from './HowToHelp';

export default {
  title: 'Atoms/Seção Como ajudar',
  component: HowToHelp,
} as Meta;

const Template: Story = () => <HowToHelp />;

export const Default = Template.bind({});
