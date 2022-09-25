export type Variant = 'primary' | 'secondary';

export type Color =
  | 'transparent'
  | 'current'
  | 'black'
  | 'white'
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';

export type Size = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

export const getColorText = (color: Color): string => {
  switch (color) {
    case 'black':
      return 'text-black';
    case 'white':
      return 'text-white';
    case 'gray':
      return 'text-gray-600';
    case 'red':
      return 'text-red-700';
    case 'yellow':
      return 'text-yellow-700';
    case 'green':
      return 'text-green-700';
    case 'teal':
      return 'text-teal-600';
    case 'blue':
      return 'text-blue-600';
    case 'indigo':
      return 'text-indigo-600';
    case 'purple':
      return 'text-purple-600';
    case 'pink':
      return 'text-pink-600';
    default:
      return '';
  }
};

export type IconProperties = {
  readonly color?: Color;
  readonly size?: string;
  readonly width?: string;
  readonly height?: string;
  readonly styles?: string;
  readonly stroke?: string;
  readonly fill?: string;
  readonly onClick?: any;
};
