// Reference https://tailwindui.com/components/application-ui/elements/buttons
import React, { FunctionComponent, ReactNode } from 'react';
import { Variant } from 'src/lib/types';

export type ButtonProperties = {
  readonly id: string;
  readonly children: ReactNode;
  readonly onClick?: () => void;
  readonly type?: 'button' | 'submit' | 'reset' | undefined;
  readonly disabled?: boolean;
  readonly className?: string;
  readonly color?: string;
  readonly size?: string;
  readonly variant?: Variant;
  readonly icon?: ReactNode;
};

const getVariantClassName = (variant: Variant): string => {
  switch (variant) {
    case 'primary':
      return '';
    case 'secondary':
      return ' text-white bg-red-500';
    default:
      return '';
  }
};
const getColorClassName = (color: string): string => {
  switch (color) {
    case 'white':
      return 'text-white border-white focus:ring-white';
    case 'red':
      return 'text-red-500 border-red-500 focus:ring-red-500';
    case 'christmas':
      return 'text-white border-red-500 bg-red-500 focus:ring-red-500';
    case 'gray':
      return 'text-gray-600 border-gray-400 focus:ring-gray-400';
    default:
      return '';
  }
};

const getSizeClassName = (size: string): string => {
  switch (size) {
    case 'xs':
      return 'px-2.5 py-1.5 text-xs';

    case 'sm':
      return 'px-3 py-2 text-sm leading-4';

    case 'base':
      return 'px-8 py-2 text-sm';

    case 'lg':
      return 'px-4 py-2 text-base md:w-64 md:h-14';

    case 'xl':
      return 'px-6 py-4 text-2xl w-72 md:w-96 border-4';

    case 'christmas':
      return 'w-5/6 md:w-2/6 h-3 px-6 py-4 text-md md:text-md border-4';

    default:
      return '';
  }
};

export const Button: FunctionComponent<ButtonProperties> = ({
  id,
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  color = 'red',
  variant = 'primary',
  size = 'base',
  icon,
}) => {
  const sizeClassName = getSizeClassName(size);
  const colorClassName = getColorClassName(color);
  const variantClassName = getVariantClassName(variant);
  const disabledClassName = disabled ? 'opacity-75 cursor-not-allowed' : '';

  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center border-2 border-transparent font-bold shadow-sm focus:outline-none focus:ring-2 rounded-full ${variantClassName} ${colorClassName} ${sizeClassName} ${disabledClassName} ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
