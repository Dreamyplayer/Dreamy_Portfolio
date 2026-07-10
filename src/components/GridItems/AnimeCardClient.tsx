'use client';

import Image from 'next/image';

type AnimeResult = {
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

interface Props {
  anime: AnimeResult[];
}

export default function AnimeCardClient({ anime }: Props) {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-2 px-3'>
      <p className='mb-1 border-b-2 border-blue-400 text-sm font-medium'>Favorite Anime</p>

      <div className='grid grid-cols-4 gap-2'>
        {anime.slice(0, 16).map(a => (
          <Image
            key={a.title}
            src={a.images.jpg.image_url}
            alt={a.title}
            title={a.title}
            width={44}
            height={64}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            unoptimized
            className='rounded-md object-cover shadow-md transition-transform hover:scale-105'
          />
        ))}
      </div>
    </div>
  );
}
