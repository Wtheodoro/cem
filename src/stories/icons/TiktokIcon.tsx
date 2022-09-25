import React from 'react';

import { getColorText, IconProperties } from '../../lib/types';

export const TiktokIcon = ({
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
      viewBox="0 0 28 32"
      stroke={stroke}
      fill={fill}
      aria-label="tiktok-icon"
      onClick={onClick}>
      <path
        d="M27.6905 13.1693C27.4265 13.1932 27.1613 13.2062 26.8961 13.2072C23.9865 13.2078 21.2724 11.8295 19.6787 9.54181V22.0238C19.6787 27.1189 15.283 31.2489 9.86146 31.2489C4.43937 31.2489 0.0442505 27.1189 0.0442505 22.0238C0.0442505 16.9287 4.43937 12.7987 9.86146 12.7987C10.0664 12.7987 10.2669 12.8164 10.468 12.8278V17.3741C10.2664 17.3513 10.0686 17.3165 9.86146 17.3165C7.09434 17.3165 4.85093 19.4246 4.85093 22.0248C4.85093 24.6251 7.09434 26.7332 9.86146 26.7332C12.6291 26.7332 15.0736 24.6842 15.0736 22.083L15.1222 0.884613H19.7505C20.1869 4.78468 23.5335 7.83082 27.6955 8.11685V13.1693"
        fill={fill}
      />
    </svg>
  );
};
