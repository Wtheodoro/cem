/* eslint-disable sonarjs/no-duplicate-string */
import React, { FunctionComponent } from 'react';

import { FacebookIcon } from '../icons/FacebookIcon';
import { InstagramIcon } from '../icons/InstagramIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';
import { TiktokIcon } from '../icons/TiktokIcon';

export const Footer: FunctionComponent = () => {
  return (
    <div className="bg-red-500 px-4 md:px-24 py-16 text-white flex flex-col md:block">
      <div className="pl-4 md:pl-0 pb-8 flex flex-col items-stretch md:flex-row border-white border-b lg:justify-between">
        <img src="/logo-footer.png" className="h-40 mb-10 md:mb-0 mr-auto lg:mr-0" />
        <div className="mr-20 md:self-center">
          <div className="text-2xl font-extrabold mb-4">Contato</div>
          <div className="text-lg">Clica e Multiplica</div>
          <div className="text-lg">
            <a href="tel:+55(11)99561-1849">(11) 99561-1849</a>
          </div>
          <div className="text-lg">
            <a href="mailto:contato@clicaemultiplica.com.br">contato@clicaemultiplica.com.br</a>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-2xl font-extrabold mb-4">Siga o Clica</div>
          <div className="flex flex-row">
            <a href="https://www.facebook.com/clicaemultiplica" className="pr-4">
              <FacebookIcon height="h-10" fill="white" />
            </a>
            <a href="https://www.linkedin.com/company/clica-e-multiplica" className="px-4">
              <LinkedinIcon height="h-10" fill="white" />
            </a>
            <a href="https://www.tiktok.com/@clicaemultiplica" className="px-4">
              <TiktokIcon height="h-10" fill="white" />
            </a>
            <a href="https://www.instagram.com/clicaemultiplica" className="px-4">
              <InstagramIcon height="h-10" fill="white" />
            </a>
          </div>
        </div>
      </div>
      <div className="pl-4 md:pl-0 md:text-lg mt-8 md:text-right">
        Designed and developed by Apegro | © 2021 Clica e Multiplica. All Rights Reserved.
      </div>
    </div>
  );
};
