import React, { FunctionComponent, ReactNode } from 'react';

type TitleProperties = {
  readonly children: ReactNode;
  readonly ownStyles?: string;
};

const Title: FunctionComponent<TitleProperties> = ({ children, ownStyles }) => (
  <h2 className={`font-black ${ownStyles}`}>{children}</h2>
);

export default Title;
