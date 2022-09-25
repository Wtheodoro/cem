import React, { FunctionComponent, ReactNode } from 'react';

import { Button } from '..';

type DonationCardProperties = {
  readonly title: string;
  readonly icon?: ReactNode;
  readonly price?: string;
  readonly items?: readonly string[];
};

const DonationCard: FunctionComponent<DonationCardProperties> = ({ title, icon, items, price }) => (
  <div className="mb-2 w-56  md:ml-5 md:w-80 md:h-auto lg:w-96 lg:h-auto bg-white rounded-xl shadow-2xl flex flex-col items-center relative">
    <p className="md:mt-5 md:mb-5 lg:mt-10 lg:mb-10 font-black md:text-xl lg:text-2xl text-red-600">
      {title.toUpperCase()}
    </p>
    <div className="mt-3">{icon}</div>

    <div className="gap-2 mt-2 flex flex-col items-center justify-center  w-44 h-full text-center">
      {items?.map((item: string, index: number) => (
        <p key={index}>{item}</p>
      ))}
    </div>

    <div className="font-bold">{price}</div>

    <Button id="donation" color="red" className="my-2 md:my-5">
      <a href="https://wa.me/5511995611849/?text=Olá.%20Quero%20participar%20da%20Campanha%20de%20Natal%20do%20Clica.%20Pode%20me%20ajudar%20'?'">
        Doar
      </a>
    </Button>
  </div>
);

export default DonationCard;
