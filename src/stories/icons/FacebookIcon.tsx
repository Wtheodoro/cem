import React from 'react';

import { getColorText, IconProperties } from '../../lib/types';

export const FacebookIcon = ({
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
      viewBox="0 0 16 31"
      stroke={stroke}
      fill={fill}
      aria-label="facebook-icon"
      onClick={onClick}>
      <path
        d="M4.10233 30.918H10.2562V15.5358H14.5497L15.0074 10.3853H10.2557C10.2557 10.3853 10.2557 8.46244 10.2557 7.45181C10.2557 6.23759 10.5001 5.7576 11.6767 5.7576C12.6232 5.7576 15.0074 5.7576 15.0074 5.7576V0.412354C15.0074 0.412354 11.4959 0.412354 10.746 0.412354C6.16678 0.412354 4.10184 2.42574 4.10184 6.2789C4.10184 9.63535 4.10184 10.3853 4.10184 10.3853H0.900726V15.6003H4.10184V30.918H4.10233Z"
        fill={fill}
      />
    </svg>
  );
};
