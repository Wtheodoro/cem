import React, { FunctionComponent, useState } from 'react';

export const GoalComponent: FunctionComponent = () => {
  const endDate = new Date('December 16 2021 00:00:00');
  const [days, setDays] = useState<string>('0');
  const [hours, setHours] = useState<string>('0');
  const [minutes, setMinutes] = useState<string>('0');

  setInterval(() => {
    const currentTime = new Date();
    const difference = endDate.getTime() - currentTime.getTime();
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;

    setDays(days.toString());
    setHours(hours.toString());
    setMinutes(minutes.toString());
  }, 1000);

  return (
    <div className="flex  w-full h-28">
      <div className="flex flex-col justify-center items-center text-center text-lg md:text-4xl w-1/2 h-16 m-auto">
        Prorrogamos nossa campanha!{' '}
        <a className="text-3xl md:text-5xl font-bold">
          {' '}
          {days}d {hours}h {minutes}m
        </a>
      </div>
      <div className="flex flex-col justify-center items-center text-2xl md:text-4xl w-1/2 h-28 m-auto bg-green-1000 text-white">
        KITS DOADOS <a className=" ml-2 md:ml-4 text-4xl md:text-5xl font-bold"> 480 </a>
      </div>
    </div>
  );
};
