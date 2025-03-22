import React from 'react';
import { IconBrandTwitch, IconBrandKickFilled, IconBrandYoutubeFilled } from '@tabler/icons-react';
import type { PlatformType } from '../utils';

interface BrandPlatformsProps {
  platform: PlatformType;
}

const Platform: React.FC<BrandPlatformsProps> = ({ platform }) => {
  switch (platform) {
    case 'Twitch':
      return <IconBrandTwitch size={15} />;
    case 'Kick':
      return <IconBrandKickFilled size={15} />;
    case 'YouTube':
      return <IconBrandYoutubeFilled size={15} />;
    case 'Afreeca':
      return null;
    case 'Streamable':
      return null;
    default:
      return null;
  }
};

export default Platform;
