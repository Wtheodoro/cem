import React, { FunctionComponent } from 'react';

import { Background } from '..';

export const AboutOurWork: FunctionComponent = () => {
  return (
    <div className="h-screen">
      <Background url="../bannerCampaign.png">
        <div className="text-center">
          <div className="uppercase text-white text-4xl font-bold p-20 lg:p-28 lg:mr-96">
            Conheça nosso trabalho
          </div>
          <div className="md:max-w-xs text-white font-bold text-6xl md:float-right md:mr-72 mt-32 md:mt-40 .leading-tight">
            <div className="font-extrabold text-7xl">X</div> crianças apoiadas pela ONG xpto
          </div>
        </div>
      </Background>
    </div>
  );
};
