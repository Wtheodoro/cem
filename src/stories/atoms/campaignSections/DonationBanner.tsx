import React, { FunctionComponent } from 'react';

import { Background } from '../Background';
import { Button } from '../Button';

const DonationBanner: FunctionComponent = () => {
  return (
    <div className="h-screen">
      <Background url="/criançanaarvore.png">
        <div className="h-screen bg-gray-600 bg-opacity-50">
          <div className="absolute left-4 w-72 top-40 md:left-48 md:top-48 lg:left-70 lg:top-48 h-64 md:w-72 text-5xl font-bold text-white ">
            Vem multiplicar o bem com a gente! Campanha de Natal 2021.
          </div>

          <div className="absolute bottom-0 w-full flex flex-col items-center justify-center">
            <Button id="buy-header" size="christmas" color="christmas">
              <a href="/campanha/natal" className="">
                Clique e saiba como doar
              </a>
            </Button>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default DonationBanner;
