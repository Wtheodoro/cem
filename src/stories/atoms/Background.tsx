import React, { FunctionComponent, ReactNode } from 'react';

export type BackgroundProperties = {
  readonly className?: string;
  readonly url?: string;
  readonly btnIsHover?: boolean;
  readonly children?: ReactNode;
};

export const Background: FunctionComponent<BackgroundProperties> = ({
  children,
  className = '',
  url = '',
}) => {
  return (
    <div
      style={{
        backgroundImage: `url('${url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
      }}
      className={className}>
      {children}
    </div>
  );
};
