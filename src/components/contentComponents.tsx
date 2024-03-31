import Image from 'next/image';
import Link from 'next/link';

import { InfiniteMoving, InfiniteMovingleft } from '@/components/MovingSkills';
import { SVGIcons } from '@/components/svgs';

export const RolePlay = () => {
  return (
    <div className='flex flex-col items-start justify-center px-5'>
      <h1 className='text-2xl font-bold'>
        {`Hello, I'm`} <span className='text-2xl font-bold text-[#007acc]'>Dreamy!</span>
      </h1>
      <p className=''>Evolving Experiences, crafting experiences as a freelance developer/designer.</p>
    </div>
  );
};

export const UI = () => {
  return <h1 className='top-0 flex items-start justify-start font-bold'>UI/UX</h1>;
};

export const Projects = () => {
  return <div className='flex items-center justify-between font-bold'>Projects</div>;
};

export const SocialIcons = () => {
  type SocialPlatform = {
    type: 'github' | 'youtube' | 'instagram' | 'twitter';
    link: string;
  };

  const socialPlatforms: SocialPlatform[] = [
    {
      type: 'github',
      link: 'https://github.com/yourusername',
    },
    {
      type: 'youtube',
      link: 'https://www.youtube.com/yourchannel',
    },
    {
      type: 'twitter',
      link: 'https://twitter.com/yourusername',
    },
    {
      type: 'instagram',
      link: 'https://instagram.com/yourusername',
    },
  ];

  return (
    <div className='flex space-x-4'>
      {socialPlatforms.map((platform, i) => (
        <Link
          key={i}
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

export const Avatar = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        src={'/download.png'}
        className='rounded-xl object-cover  hover:origin-bottom hover:-rotate-2'
        width={900}
        height={900}
        alt=''
      />
    </div>
  );
};

export const About = () => {
  return (
    <div className='flex flex-col items-start justify-between gap-y-5 px-4'>
      <p className='font-bold'>About</p>
      <div className='font-medium'>
        <Image src={'/backend.svg'} className='' width={150} height={150} alt='Strong Backend' />
        <span className='font-bold text-yellow-300'>Full-stack Developer</span> &{' '}
        <Image
          src={'/Learning.svg'}
          className='absolute -mt-20 ml-32 h-24 w-24 md:ml-48 lg:ml-48'
          width={150}
          height={150}
          alt='Strong Backend'
        />
        <span className='font-bold text-sky-500'>UI/UX Designer</span>, building the magic that bridges backend to
        beautiful interfaces.
      </div>
    </div>
  );
};

export const Stacks = () => {
  return <div className='font-semibold'>Stacks I use</div>;
};

export const ComingSoon = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='absolute font-bold [text-shadow:_white_0_2px_15px]'>Coming Soon</p>
      <Image
        src={'/download.png'}
        className='scale-110 rounded-xl object-cover opacity-30 blur-sm'
        width={900}
        height={900}
        alt=''
      />
    </div>
  );
};

export const Blogs = () => {
  return <div className='flex items-center justify-center'>Blogs</div>;
};

export const Skills = () => {
  return (
    <div className='mt-2 flex flex-col items-center justify-between'>
      <div className='border-b-2 border-blue-400'>Skills</div>
      <InfiniteMoving />
      <div className='border-b-2 border-blue-400'>UI/UX</div>
      <InfiniteMovingleft />
    </div>
  );
};

export const ContactMe = () => {
  return <div className='flex items-center justify-center'>contact Me</div>;
};
