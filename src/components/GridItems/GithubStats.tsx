import Image from 'next/image';

export const GithubStats = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-2 px-2'>
      <p className='mb-1 border-b-2 border-blue-400 text-sm font-medium'>GitHub Activity</p>
      <Image
        src='https://github-stats-extended.vercel.app/api?username=Dreamyplayer&show_icons=true&theme=transparent&hide_border=true&title_color=38bdf8&text_color=a3a3a3&icon_color=38bdf8'
        alt='GitHub Stats'
        width={280}
        height={100}
        unoptimized
        className='w-full max-w-70'
      />
      <Image
        src='https://github-readme-streak-stats.herokuapp.com/?user=Dreamyplayer&theme=transparent&hide_border=true&stroke=38bdf8&ring=38bdf8&fire=38bdf8&currStreakLabel=38bdf8'
        alt='GitHub Streak'
        width={280}
        height={100}
        unoptimized
        className='w-full max-w-70'
      />
      <Image
        src='https://github-stats-extended.vercel.app/api/wakatime?username=dreamyplayer&layout=compact&langs_count=6&theme=dark'
        alt='GitHub Streak'
        width={280}
        height={100}
        unoptimized
        className='w-full max-w-70'
      />
    </div>
  );
};

export default GithubStats;
