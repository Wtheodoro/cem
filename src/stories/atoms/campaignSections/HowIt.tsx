import React, { FunctionComponent } from 'react';

import HowItITem from './HowItITem';

const HowIt: FunctionComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center xl:justify-start w-full h-auto items-center bg-red-500">
      <div className="flex w-10/12 items-center justify-center md:justify-start xl:justify-center">
        <div className="flex justify-center md:justify-start text-white items-center text-3xl  md:text-4xl xl:text-5xl w-9/12 h-40 font-bold mt-10">
          COMO VAI FUNCIONAR
        </div>
      </div>

      <div className="mb-14 flex flex-col items-center md:justify-center md:flex-row w-10/12">
        <HowItITem img="/Present.png" text="1">
          Você escolhe qual kit deseja ajudar. Ambos serão destinados para as crianças e famílias
          apoiadas pelas nossas ONGs parceiras.
        </HowItITem>
        <img src="/Barra.png" className="md:w-10 lg:w-20 h-1 bg-white my-auto" />
        <HowItITem img="/heart 1.png" text="2">
          Juntamente com as ONGs, organizaremos compra e entrega para os presenteados.
        </HowItITem>
        <img src="/Barra.png" className="md:w-10 lg:w-20 h-1 bg-white my-auto" />
        <HowItITem img="/box 1.png" text="3">
          Faremos as entregas entre os dias 18 e 19/dez e você pode acompanhar em nossas redes
          sociais.
        </HowItITem>
      </div>
    </div>
  );
};

export default HowIt;
