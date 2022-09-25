/* eslint-disable functional/immutable-data */
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import OurKitSection from './OurKitSection';

export default {
  title: 'Atoms/Seção nossos kits',
  component: OurKitSection,
} as Meta;

const Template: Story = () => <OurKitSection />;

export const Default = Template.bind({});
