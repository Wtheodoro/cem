import React from 'react';

import { getColorText, IconProperties } from '../../lib/types';

export const LinkedinIcon = ({
  width = '',
  height = 'h-5',
  color = 'gray',
  fill = '#BB3341',
  stroke = 'none',
  onClick,
  styles,
}: IconProperties): JSX.Element => {
  return (
    <svg
      className={`${height} ${width} ${getColorText(color)} ${styles}`}
      viewBox="0 0 32 31"
      stroke={stroke}
      fill={fill}
      aria-label="linkedin-icon"
      onClick={onClick}>
      <path d="M7.44316 10.7733H0.988617V30.7603H7.44316V10.7733Z" fill={fill} />
      <path
        d="M4.18485 8.15626C6.2931 8.15626 8.00189 6.50331 8.00189 4.46747C8.00189 2.43163 6.29373 0.779877 4.18485 0.779877C2.07598 0.779877 0.368439 2.43103 0.368439 4.46747C0.368439 6.50391 2.07598 8.15626 4.18485 8.15626Z"
        fill={fill}
      />
      <path
        d="M17.7611 20.2685C17.7611 17.4591 19.11 15.7845 21.6936 15.7845C24.0664 15.7845 25.2077 17.3912 25.2077 20.2685C25.2077 23.1477 25.2077 30.7603 25.2077 30.7603H31.6315C31.6315 30.7603 31.6315 23.459 31.6315 18.1053C31.6315 12.7515 28.4654 10.1627 24.0445 10.1627C19.6217 10.1627 17.7605 13.465 17.7605 13.465V10.7727H11.5687V30.7597H17.7605C17.7611 30.7603 17.7611 23.3478 17.7611 20.2685Z"
        fill={fill}
      />
    </svg>
  );
};
