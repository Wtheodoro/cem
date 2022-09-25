import React, { FunctionComponent } from 'react';

export type HowITITem = {
  readonly children: string;
  readonly text: string;
  readonly img: string;
};

const HowItITem: FunctionComponent<HowITITem> = ({ children, text = '1', img }) => {
  return (
    <div className="flex flex-col mb-10 align-center items-center justify-around w-56 h-72 lg:w-60 lg:h-80 ">
      <div className="flex align-center w-9 h-9 lg:w-10 lg:h-10 bg-white rounded-full">
        <a className="m-auto  text-red-500 font-bold text-xl lg:text-xl">{text}</a>
      </div>
      <div className="w-20 h-30 ">
        <img src={img} />
      </div>
      <a className="text-white w-full text-center w-60 h-20 text-md">{children}</a>
    </div>
  );
};

export default HowItITem;
