const copyright = {
  year: new Date().getFullYear(),
  company: 'Dreamy',
};

const FooterData = {
  text: `© ${copyright.year} ${copyright.company} Inc.`,
};

const Footer = () => {
  return (
    <footer className='fixed bottom-0 my-2 flex w-full flex-col text-[#647488] items-center justify-between gap-y-2 border-t border-gray-300 bg-gray-100 px-4 text-xs dark:border-neutral-700 dark:bg-neutral-800/30 lg:flex-row lg:text-base'>
      <div className='mt-2'>{FooterData.text}</div>
    </footer>
  );
};

export default Footer;
