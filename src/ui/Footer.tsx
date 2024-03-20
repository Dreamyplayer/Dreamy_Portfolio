const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyName = 'Dreamy';
  const footerText = `© ${currentYear} ${companyName} LLC.`;

  return (
    <footer className='fixed bottom-0 flex h-8 w-full items-center lg:items-start justify-center border-t border-gray-300 bg-gray-100 px-4 text-xs text-[#647488] dark:border-neutral-700 dark:bg-neutral-800/30 md:lg:flex-col lg:text-base'>
      <span className='cursor-pointer'>{footerText}</span>
    </footer>
  );
};

export default Footer;
