import DarkModeSwitch from '@/ui/DarkMode';

const Logo = () => {
  return (
    <div className='flex items-center justify-between'>
      <h2 className={`ml-5 md:lg:ml-10 text-2xl md:lg:text-4xl font-semibold`}>Dreamy.</h2>
      <DarkModeSwitch />
    </div>
  );
};

export default Logo;
