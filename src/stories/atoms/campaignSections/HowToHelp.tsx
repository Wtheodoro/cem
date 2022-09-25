import React, { FunctionComponent } from 'react';

import { Background } from '../Background';
import { Button } from '../Button';
import { SocialLink } from '../SocialLink';
import Title from '../Title';

const HowToHelp: FunctionComponent = () => (
  <section className="flex flex-col justify-center items-center pt-10 pb-10">
    <div className=" w-11/12 md:w-7/12 md:h-3/6 lg:h-4/6">
      <Title ownStyles="ml-5 lg:ml-0 mb-2 text-2xl md:ml-0 md:text-xl lg:text-2xl xl:text-3xl text-red-500 ">
        COMO AJUDAR
      </Title>
    </div>

    <div className="h-auto w-11/12 mb-5">
      <div className="m-auto w-11/12 h-80 md:w-8/12 md:h-3/6 lg:h-4/6 xl:h-4/6">
        <Background url="/christmas-hug.png">
          <div className="bg-gray-500 w-full h-full bg-opacity-50 flex flex-col">
            <div className="w-40 md:w-60 lg:w-64 xl:w-80 h-80 ml-5 md:ml-14">
              <p className="text-white mt-5 text-sm md:text-sm md:text-xl lg:text-2xl xl:text-3xl font-black md:mt-10 lg:mt-14 xl:mt-16 ">
                O primeiro passo é desejar multiplicar o bem.
              </p>
            </div>
          </div>
        </Background>
      </div>
    </div>

    <Button id="donation" className="mb-20" color="white" variant="secondary" size="lg">
      <a href="https://wa.me/5511995611849/?text=Olá.%20Quero%20participar%20da%20Campanha%20de%20Natal%20do%20Clica.%20Pode%20me%20ajudar%20'?'">
        DOAR
      </a>
    </Button>

    <p className="font-bold text-center text-2xl text-red-500 mb-12">COMPARTILHE ESTA CAMPANHA</p>

    <p className="w-4/6 text-center md:text-left text-xs md:text-base">
      Seu apoio é essencial para conseguirmos atingir nossa meta: Doar 500 kits para crianças ou
      famílias e trazer neste natal, um momento de paz e esperança.
      <br />
      Divulgue essa ação através das suas redes. Imagine se 01 dos seus amigos vier fazer parte
      dessa iniciativa também.
      <br />
      <span className="font-bold">Bora clicar e multiplicar?</span>
    </p>

    <div className="flex flex-col h-52 items-center justify-around md:flex-row mt-10">
      <SocialLink
        id="facebook"
        social="facebook"
        href="https://www.facebook.com/sharer/sharer.php?u=http://clicaemultiplica.com/campanha/natal"
      />
      <SocialLink
        id="twitter"
        social="twitter"
        className="md:ml-10"
        href="https://twitter.com/intent/tweet?text=Quero+participar+da+Campanha+de+Natal+do+Clica.+Pode+me+ajudar&url=http://clicaemultiplica.com/campanha/natal"
      />
      <SocialLink
        id="linkedin"
        social="Linkedin"
        className="md:ml-10"
        href="https://www.linkedin.com/shareArticle?mini=true&url=http://clicaemultiplica.com/campanha/natal"
      />
    </div>
  </section>
);

export default HowToHelp;
