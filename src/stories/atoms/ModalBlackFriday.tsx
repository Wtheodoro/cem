import React from 'react';

import { Button } from './Button';

export type ModalProperties = {
  readonly show: (value: boolean) => void;
};

export const ModalBlackFriday: React.FC<ModalProperties> = ({ show }) => {
  const closeModal = (): void => {
    show(false);
  };

  return (
    <div className="fixed z-40 flex flex-col justify-center items-center bg-gray-500 w-screen h-full bg-opacity-75">
      <div className="hidden lg:block w-11/12 h-5/6 md:bg-contain lg:bg-cover bg-no-repeat">
        <div className="absolute flex flex-row-reverse pr-6 pt-4 z-50 text-white w-11/12">
          <a className="cursor-pointer" onClick={closeModal}>
            X
          </a>
        </div>
        <img src="/bannerpopup-web.png" className="w-full" />
        <div className="flex  items-center justify-center w-100vw h-16 bg-white px-6 ">
          <Button id="buy-header" size="lg">
            <a
              className="text-2xl"
              href="https://produtos.clicaemultiplica.com/t/Ofertas/clica-na-friday">
              Compre agora
            </a>
          </Button>
        </div>
        <img src="/laranja-web.png" className="w-full h-10" />
      </div>
      <div className="hidden md:block lg:hidden w-7/12 h-4/12">
        <div className="absolute flex flex-row-reverse pr-2 pt-0 z-50 text-white w-7/12">
          <a className="cursor-pointer" onClick={closeModal}>
            X
          </a>
        </div>
        <img src="/bannerpopup-mobile.png" className="w-screen h-7/12" />
        <div className="flex  items-center justify-center w-100vw h-14 bg-white px-6 ">
          <Button id="buy-header" size="base">
            <a
              className="text-2xl"
              href="https://produtos.clicaemultiplica.com/t/Ofertas/clica-na-friday">
              Compre agora
            </a>
          </Button>
        </div>
        <img src="/laranja-web.png" className="w-screen h-7/12" />
      </div>
      <div className="md:hidden w-10/12 h-4/12">
        <div className="absolute flex flex-row-reverse pr-2 pt-0 z-50 text-white w-10/12">
          <a className="cursor-pointer" onClick={closeModal}>
            X
          </a>
        </div>
        <img src="/bannerpopup-mobile.png" className="w-screen h-4/12" />
        <div className="flex  items-center justify-center w-100vw h-14 bg-white px-6 ">
          <Button id="buy-header">
            <a href="https://produtos.clicaemultiplica.com/t/Ofertas/clica-na-friday">
              Compre agora
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
