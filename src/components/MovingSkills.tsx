'use client';

import Image from 'next/image';

import { InfiniteMovingCards } from '@/ui/infinite-moving';

export const InfiniteMoving = () => {
  return (
    <div className='relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased'>
      <InfiniteMovingCards items={SKill_items} direction='right' speed='normal' />
    </div>
  );
};

export const InfiniteMovingleft = () => {
  return (
    <div className='relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased'>
      <div className='mt-2 flex flex-col items-center justify-center gap-y-2'>
        <Image
          src={'https://cdn.iconscout.com/icon/free/png-512/free-figma-3521426-2944870.png?f=webp&w=256'}
          width={100}
          height={100}
          className='h-8 w-8 rounded-md'
          alt={'Figma'}
        />
        <p className='rounded-md bg-white px-2 py-1 text-xs font-semibold text-black'>{'Figma'}</p>
      </div>
    </div>
  );
};

const SKill_items = [
  {
    title: 'Typescript',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-typescript-1-1175078.png?f=webp&w=256',
  },
  {
    title: 'Javascript',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256',
  },
  {
    title: 'Node Js',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-nodejs-1-226034.png?f=webp&w=256',
  },
  {
    title: 'Npm',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-npm-3-1175132.png?f=webp&w=256',
  },
  {
    title: 'Docker',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-docker-12-1175229.png?f=webp&w=256',
  },
  {
    title: 'Yarn',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-yarn-34-1174974.png?f=webp&w=256',
  },
  {
    title: 'Git',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=webp&w=256',
  },
  {
    title: 'Github',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-github-159-721954.png?f=webp&w=256',
  },
  {
    title: 'MongoDB',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-mongodb-4-1175139.png?f=webp&w=256',
  },
  {
    title: 'vscode',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-visual-studio-code-1868941-1583105.png?f=webp&w=256',
  },
  {
    title: 'Nextjs',
    src: '/nextjs-icon.svg',
  },
  {
    title: 'React',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-react-3-1175109.png?f=webp&w=256',
  },
  {
    title: 'Dart',
    src: 'dart.svg',
  },
  {
    title: 'Rust',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-rust-3627930-3029156.png?f=webp&w=256',
  },
  {
    title: 'HTML',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-html-3628838-3030115.png?f=webp&w=256',
  },
  {
    title: 'CSS',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=256',
  },
  {
    title: 'MySQL',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-mysql-3521596-2945040.png?f=webp&w=256',
  },
  {
    title: 'RestFul API',
    src: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/api-1635072-1389690.png?f=webp&w=256',
  },
  {
    title: 'Eslint',
    src: 'https://cdn.iconscout.com/icon/free/png-512/free-eslint-3521412-2944856.png?f=webp&w=256',
  },
  {
    title: 'Markdown',
    src: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/markdown-4887934-4072470.png?f=webp&w=256',
  },
  {
    title: 'Tailwindcss',
    src: '/Tailwindcss.svg',
  },
  {
    title: 'Supabase',
    src: '/supabase.png',
  },
  {
    title: 'CLI',
    src: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/terminal-4887951-4072487.png?f=webp&w=256',
  },
];
