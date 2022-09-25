import React, { FunctionComponent } from 'react';

import { Button } from '..';

export const Partners: FunctionComponent = () => {
  return (
    <div>
      <div className="text-center font-bold text-4xl mt-5 text-red-600">ONGs PARCEIRAS</div>
      <div className="text-center  font-sans mt-8 max-w-4xl mx-auto">
        As ongs selecionadas para esta iniciativa realizam projetos durante o ano inteiro e
        enfrentaram em 2020 e 2021 a queda de doações e ausência de parcerias, mas nem por isso
        deixaram de amenizar os problemas vividos por crianças e famílias em situação de
        vulnerabilidade. Vem conhecer um pouco mais do trabalho das instituições:
      </div>
      <div className="md:max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row mt-8 md:mt-20 md:mt-20 inline-flex items-center">
          <img src="../campaignPic.png" className="w-5/6 md:w-2/4" />
          <div className="ml-6 md:ml-5 mb-0 md:mb-0">
            <div className="uppercase text-red-600 font-bold text-sm md:text-lg mt-5">
              Projeto criança feliz
            </div>
            <div className="font-sans mr-5 mt-3 mb-2 md:mb-6 text-xs md:text-base">
              Instituto de Assistência, Amparo e Emancipação de Pessoas com Deficiência. Desde 2021,
              a ONG promove o suporte às pessoas com deficiência física ou intelectual, a partir do
              atendimento que conta com terapias essenciais para o desenvolvimento físico e motor,
              além disso, oferece as refeições e cuidados necessários durante toda a permanência no
              instituto, incluindo cuidados com higiene e suporte medicamentoso.
            </div>
            <Button
              size="base"
              id="ver-site"
              color="gray"
              className="uppercase py-0.5 md:px-14 md:py-1 font-bold">
              <a href="https://instagram.com/projetocriancafelizjaguare?utm_medium=copy_link">
                Ver site
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="md:max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse mt-8 md:mt-0 md:mt-0 inline-flex items-center">
          <img src="../campaignPic-1.png" className="w-5/6 md:w-2/4" />
          <div className="ml-6 md:ml-5 mb-6 md:mb-8">
            <div className="uppercase text-red-600 font-bold text-sm md:text-lg mt-0">
              Instituto Juntos
            </div>
            <div className="font-sans mr-5 mt-3 mb-2 md:mb-6 text-xs md:text-base">
              Empoderar, através do esporte e da arte, jovens talentos O instituto foi fundado em
              2017, mas o Projeto Juntos que deu início a esta linda jornada - começou ainda em
              2005. Desde então, centenas de crianças são assistidas têm suas habilidades
              desenvolvidas através do teatro e do esporte. Um trabalho essencial para evitar que
              crianças e adolescentes carentes, cresçam em situação de vulnerabilidade.
            </div>
            <Button
              size="base"
              id="ver-site"
              color="gray"
              className="uppercase py-0.5 md:px-14 md:py-1 font-bold">
              <a href="https://www.instagram.com/p/CWBopmJPAa0/?utm_medium=copy_link">Ver site</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
