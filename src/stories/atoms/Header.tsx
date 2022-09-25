/* eslint-disable sonarjs/no-duplicate-string */
import React, { FunctionComponent } from 'react';

import { FacebookIcon } from '../icons/FacebookIcon';
import { InstagramIcon } from '../icons/InstagramIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';
import { TiktokIcon } from '../icons/TiktokIcon';
import { Button } from './';

export type HeaderProperties = {
  readonly display?: string;
};

const getDisplay = (display: string): string => {
  switch (display) {
    case 'none':
      return 'hidden';
    case 'block':
      return '';
    default:
      return '';
  }
};

export const Header: FunctionComponent<HeaderProperties> = ({ display = '' }) => {
  const setDisplay = getDisplay(display);

  return (
    <>
      <div className="w-full lg:px-32  mx-auto px-2 sm:px-6">
        <div className="relative flex flex-row-reverse content-between items-center justify-center h-16 sm:flex-row">
          <div className=" flex-1 flex  items-stretch justify-center pl-2 sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center w-auto pr-0 sm:pr-0">
              <a href="/">
                <img
                  className="pr-1 block h-5 sm:h-8 w-auto"
                  src="/logo.png"
                  alt="clicaemultiplica"
                />
              </a>
            </div>
          </div>
          <div className=" inset-y-0  flex items-center pl-2  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className=" sm:block sm:ml-6">
              <div className={`flex space-x-4 ${setDisplay}`}>
                <Button id="buy-header">
                  <a 
                    href="https://wa.me/5511995611849?text=Olá.%20Venho%20do%20site%20e%20gostaria%20de
                          %20mais%20informações.%20Conheça%20nosso%20catálogo%20disponível%20aqui%20
                          https://wa.me/c/5511995611849%20"
                  >
                    Conheça mais
                  </a>
                </Button>
              </div>
            </div>
            <a
              href="https://www.facebook.com/clicaemultiplica"
              className="hidden sm:inline-block sm:ml-6 px-2 py-2">
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/clica-e-multiplica"
              className="hidden sm:inline-block px-2 inline-block py-2">
              <LinkedinIcon />
            </a>
            <a
              href="https://www.tiktok.com/@clicaemultiplica"
              className="hidden sm:inline-block px-2 py-2">
              <TiktokIcon />
            </a>
            <a
              href="https://www.instagram.com/clicaemultiplica"
              className="hidden sm:inline-block px-2 py-2">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
