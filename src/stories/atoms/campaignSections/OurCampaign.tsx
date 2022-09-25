import Image from 'next/image';
import React, { FunctionComponent } from 'react';

const OurCampaign: FunctionComponent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-96 bg-white">
      <div className="flex flex-col justify-center gap-2 mt-2 w-80 h-3/6 md:mt-0 md:gap-5 md:w-96 md:h-4/6 bg-white border-solid">
        <div className="text-red-1000 ml-2 md:text-xl lg:text-2xl font-bold">NOSSA CAMPANHA</div>
        <div className="gap-2 text-xs ml-2 md:text-sm">
          <p>
            Temos como meta doar 500 kits de natal para famílias carentes atrávés de duas ONGs
            parceiras.
          </p>
          <br />
          <p>
            Vamos compartilhar o bem para trazer alegria e um pouco de conforto nesse fim de ano.
          </p>
          <br />
        </div>
      </div>
      <div>
        <div className="w-80 md:w-96 md:h-4/6 ml-1 md:ml-5">
          <Image
            alt="Crianças se abraçando"
            src="/children.png"
            width={567}
            height={333}
            // priority
          />
        </div>
      </div>
    </div>
  );
};

export default OurCampaign;
