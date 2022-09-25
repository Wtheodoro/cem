import React, { FunctionComponent } from 'react';

import { Background } from './Background';

export const Hero: FunctionComponent = () => (
  <div className="h-screen">
    <Background url="/hero.png">
      <div className="h-full flex items-center justify-center">
        <div className="flex-1 text-6xl md:text-7xl font-bold text-white pl-4 lg:pl-32 my-auto">
          Multiplique mundos melhores com o Clica & Multiplica
        </div>
        <div className="flex-1" />
      </div>
    </Background>
  </div>
);
