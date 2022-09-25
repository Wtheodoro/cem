// Reference https://tailwindui.com/components/application-ui/elements/buttons
import React, { FunctionComponent } from 'react';

import { FacebookIcon } from '../icons/FacebookIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';

type SocialLinkProperties = {
  readonly id: string;
  readonly social: 'facebook' | 'twitter' | 'Linkedin';
  readonly href?: string;
  readonly onClick?: () => void;
  readonly className?: string;
};

export const SocialLink: FunctionComponent<SocialLinkProperties> = ({
  id,
  social,
  onClick,
  className = '',
  href,
}) => {
  const getSocialNetwork = (social: string): any => {
    switch (social) {
      case 'facebook':
        return { icon: <FacebookIcon fill="rgba(107, 114, 128, 1)" />, label: 'Facebook' };
      case 'twitter':
        return { icon: <img src="/twitterIcon.svg" />, label: 'Twitter' };
      case 'Linkedin':
        return { icon: <LinkedinIcon fill="rgba(107, 114, 128, 1)" />, label: 'Linkedin' };
      default:
        return { icon: '', label: '' };
    }
  };

  const witchSocial = getSocialNetwork(social);

  return (
    <a href={href}>
      <button
        id={id}
        onClick={onClick}
        type="button"
        className={`flex items-center justify-center w-40 border-2 border-transparent font-bold shadow-sm focus:outline-none focus:ring-2 rounded-full text-gray-500 border-gray-500 focus:ring-gray-500
        md:w-56 lg:w-64 h-11 relative ${className}`}>
        <span className=" mr-5">{witchSocial.icon}</span>
        {witchSocial.label}
      </button>
    </a>
  );
};
