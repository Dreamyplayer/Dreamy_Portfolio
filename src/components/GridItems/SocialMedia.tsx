import { SVGIcons } from '@/components/svgs';
import Link from 'next/link';

type SocialPlatform = {
  type: 'github' | 'youtube' | 'instagram' | 'twitter';
  link: string;
};

const socialPlatforms: SocialPlatform[] = [
  {
    type: 'github',
    link: 'https://github.com/Dreamyplayer',
  },
  {
    type: 'youtube',
    link: 'https://www.youtube.com/@dreamy.player?sub_confirmation=1',
  },
  {
    type: 'twitter',
    link: 'https://twitter.com/Dreamy_429',
  },
  {
    type: 'instagram',
    link: 'https://www.instagram.com/dreamy.player/',
  },
];

export const SocialIcons = () => {
  return (
    <div className='flex space-x-4'>
      {socialPlatforms.map(platform => (
        <Link
          key={platform.type}
          href={platform.link}
          rel='noopener noreferrer'
          target='_blank'
          className={`flex items-center justify-center rounded-full`}
        >
          <SVGIcons
            type={platform.type}
            className={`${platform.type === 'youtube' ? 'scale-125' : ''} hover:scale-150`}
          />
        </Link>
      ))}
    </div>
  );
};
