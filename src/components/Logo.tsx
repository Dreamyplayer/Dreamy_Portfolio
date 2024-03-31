import DarkModeSwitch from '@/ui/DarkMode';

const Logo = () => {
  return (
    <div className='flex items-center justify-around lg:justify-between'>
      <h2 className='z-10 text-2xl font-semibold opacity-80 md:lg:text-4xl md:lg:ml-10'>Dreamy.</h2>
      <DarkModeSwitch />
    </div>
  );
};

export default Logo;
