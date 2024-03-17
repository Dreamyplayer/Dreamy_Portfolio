import DarkModeSwitch from '@/ui/DarkMode';

const Logo = () => {
  return (
    <div className='flex items-center justify-between'>
      <h2 className={`ml-10 text-4xl font-semibold`}>Dreamy.</h2>
      <DarkModeSwitch />
    </div>
  );
};

export default Logo;
