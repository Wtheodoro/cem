import React from 'react';

import { getColorText, IconProperties } from '../../lib/types';

export const InstagramIcon = ({
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
      viewBox="0 0 33 31"
      stroke={stroke}
      fill={fill}
      aria-label="instagram-icon"
      onClick={onClick}>
      <path
        d="M16.0962 3.00677C20.3723 3.00677 20.879 3.02222 22.568 3.09468C24.1294 3.16128 24.9776 3.40635 25.5421 3.61253C26.2893 3.88531 26.8232 4.21084 27.3838 4.73721C27.9443 5.26359 28.291 5.76439 28.5815 6.46659C28.801 6.99669 29.0614 7.79265 29.1329 9.25937C29.2095 10.8449 29.2265 11.3207 29.2265 15.3367C29.2265 19.3527 29.2101 19.8279 29.1329 21.4135C29.0614 22.8802 28.801 23.6761 28.5815 24.2062C28.291 24.9084 27.9443 25.4092 27.3838 25.9356C26.8238 26.4615 26.2899 26.7875 25.5421 27.0603C24.9776 27.2665 24.1294 27.5116 22.568 27.5782C20.879 27.6501 20.3729 27.6655 16.0962 27.6655C11.8194 27.6655 11.3133 27.6501 9.62429 27.5782C8.06292 27.511 7.21472 27.2665 6.65076 27.0603C5.90299 26.7875 5.36967 26.4615 4.80912 25.9356C4.24857 25.4092 3.90191 24.9084 3.61142 24.2062C3.39242 23.6767 3.13144 22.8802 3.05995 21.4135C2.98279 19.8279 2.9669 19.3522 2.9669 15.3367C2.9669 11.3212 2.98336 10.8454 3.05995 9.25937C3.13144 7.79265 3.39242 6.99669 3.61142 6.46659C3.90191 5.76493 4.24913 5.26412 4.80912 4.73721C5.36967 4.21084 5.90299 3.88531 6.65076 3.61253C7.21472 3.40635 8.06292 3.16128 9.62429 3.09468C11.3133 3.02169 11.82 3.00677 16.0962 3.00677ZM16.0962 0.29657C11.7462 0.29657 11.2016 0.314151 9.49267 0.387141C7.78775 0.46013 6.6241 0.714795 5.60512 1.08614C4.55154 1.47026 3.65851 1.98439 2.76833 2.82084C1.87814 3.65675 1.33064 4.49587 0.921576 5.48469C0.525559 6.44155 0.254929 7.53479 0.177201 9.13523C0.098905 10.7394 0.0807495 11.2514 0.0807495 15.3362C0.0807495 19.4204 0.098905 19.9324 0.177201 21.5365C0.254929 23.1375 0.525559 24.2302 0.921576 25.1871C1.33064 26.1759 1.87814 27.015 2.76833 27.8509C3.65908 28.6869 4.5521 29.2015 5.60512 29.5856C6.6241 29.957 7.78775 30.2116 9.49267 30.2846C11.201 30.3576 11.7462 30.3747 16.0962 30.3747C20.4455 30.3747 20.9908 30.3576 22.6991 30.2846C24.404 30.2116 25.5676 29.957 26.5866 29.5856C27.6402 29.201 28.5332 28.6869 29.4234 27.8509C30.3136 27.015 30.8617 26.1759 31.2707 25.1871C31.6662 24.2302 31.9374 23.1375 32.0151 21.5365C32.0928 19.9324 32.111 19.4204 32.111 15.3362C32.111 11.2514 32.0928 10.7399 32.0151 9.13523C31.9374 7.53426 31.6662 6.44155 31.2707 5.48469C30.8611 4.49587 30.3136 3.65675 29.4234 2.82084C28.5332 1.98492 27.6402 1.47026 26.5866 1.08614C25.5676 0.714795 24.404 0.46013 22.6991 0.387141C20.9908 0.314151 20.4455 0.29657 16.0962 0.29657Z"
        fill={fill}
      />
      <path
        d="M16.0961 7.61365C11.5544 7.61365 7.8717 11.0713 7.8717 15.3367C7.8717 19.6021 11.5539 23.0598 16.0961 23.0598C20.6384 23.0598 24.3206 19.6021 24.3206 15.3367C24.3206 11.0708 20.6384 7.61365 16.0961 7.61365ZM16.0961 20.349C13.1476 20.349 10.7579 18.1045 10.7579 15.3362C10.7579 12.5674 13.1476 10.3228 16.0961 10.3228C19.0447 10.3228 21.4344 12.5674 21.4344 15.3362C21.4344 18.1045 19.0447 20.349 16.0961 20.349Z"
        fill={fill}
      />
      <path
        d="M26.5674 7.30785C26.5674 8.30466 25.7067 9.11288 24.6457 9.11288C23.5842 9.11288 22.7235 8.30466 22.7235 7.30785C22.7235 6.31157 23.5842 5.50336 24.6457 5.50336C25.7067 5.50336 26.5674 6.31157 26.5674 7.30785Z"
        fill={fill}
      />
    </svg>
  );
};