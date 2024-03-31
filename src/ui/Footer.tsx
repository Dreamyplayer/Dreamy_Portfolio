const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyName = 'Dreamy';
  const footerText = `© ${currentYear} ${companyName} LLC.`;

  return (
    <footer className='fixed bottom-0 flex h-8 w-full items-center justify-center border-t border-gray-300 bg-gray-100 px-4 text-xs text-[#647488] dark:border-neutral-700 dark:bg-neutral-800/30 md:lg:flex-col lg:items-start lg:text-base'>
      <span className='cursor-pointer'>{footerText}</span>
      <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40 md:-top-0 lg:-top-0'></span>
    </footer>
  );
};

export default Footer;
