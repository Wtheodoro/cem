import React, { FunctionComponent } from 'react';

import AsteriskSVG from '../../icons/AsteriskIcon';
import HeartSVG from '../../icons/HeartIcon';
import Title from '../Title';
import DonationCard from './DonationCard';

const OurKitSection: FunctionComponent = () => (
  <section className="bg-christmasGreen h-auto w-full flex flex-col justify-center items-center">
    <Title ownStyles="text-2xl  md:text-4xl text-white mb-3 mt-5 md:mb-10">NOSSOS KITS</Title>

    <div className="flex flex-col text-sm md:flex-row md:justify-center">
      <DonationCard
        title="KIT CRIANÇA"
        icon={<AsteriskSVG />}
        items={['Roupa', 'Calçado', 'Kit Higiene', 'Brinquedo', 'Panetone']}
        price="R$ 200,00"
      />

      <DonationCard
        title="KIT FAMÍLIA"
        icon={<HeartSVG />}
        items={['Cesta básica']}
        price="R$ 69,90"
      />
    </div>
  </section>
);

export default OurKitSection;
