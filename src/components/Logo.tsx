import DarkModeSwitch from '@/ui/DarkMode';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='mt-5 flex items-center justify-around lg:justify-between'>
      <Link href='/'>
        <h2 className='z-10 bg-linear-to-br from-[#d8dbe9] to-[#727a9a] bg-clip-text text-2xl font-semibold text-transparent opacity-80 md:lg:ml-10 md:lg:text-4xl'>
          Dreamy.
        </h2>
      </Link>
      <DarkModeSwitch />
    </div>
  );
};

export default Logo;
