/* eslint-disable functional/immutable-data */
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import HeartSVG from '../../icons/HeartIcon';
import DonationCard from './DonationCard';

export default {
  title: 'Atoms/Seção nossos kits',
  component: DonationCard,
} as Meta;

const items = ['primeito item', 'segundo item'];

const Template: Story = () => (
  <DonationCard title="Cartão de doação" icon={<HeartSVG />} items={items} />
);

export const Default = Template.bind({});
