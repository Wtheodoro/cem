import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import DonationBanner from './DonationBanner';

export default {
  title: 'Atoms/DonationBanner',
  component: DonationBanner,
} as Meta;

const Template: Story = (properties) => <DonationBanner {...properties} />;

export const Default = Template.bind({});
