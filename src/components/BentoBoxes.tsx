import { About } from '@/components/GridItems/About';
import { Avatar } from '@/components/GridItems/Avatar';
import { Blogs } from '@/components/GridItems/Blogs';
import { ComingSoon } from '@/components/GridItems/ComingSoon';
import { ContactModel } from '@/components/GridItems/ContactUsModel';
import { Projects } from '@/components/GridItems/Projects';
import { RolePlay } from '@/components/GridItems/RolePlay';
import { Skills } from '@/components/GridItems/Skills';
import { SocialIcons } from '@/components/GridItems/SocialMedia';
import { Stacks } from '@/components/GridItems/Stack';
import { UI } from '@/components/GridItems/UI';
import { BentoGrid, BentoGridItem } from '@/ui/BentoUI';

const BentoBoxes = () => {
  return (
    <BentoGrid className='mx-auto mt-20 max-w-7xl'>
      {contentItems.map((items, i) => (
        <BentoGridItem
          key={i}
          content={items.content}
          className={`${i === 0 || i === 5 || i === 8 ? 'md:col-span-2' : i === 7 ? 'md:row-span-1 lg:-mt-32 lg:h-96' : i === 3 ? 'h-32 border-none' : i === 10 ? 'z-20 md:col-span-2' : ''}`}
        />
      ))}
    </BentoGrid>
  );
};

export default BentoBoxes;

const contentItems = [
  {
    content: <RolePlay />,
  },
  {
    content: <UI />,
  },
  {
    content: <Projects />,
  },
  {
    content: <SocialIcons />,
  },
  {
    content: <Avatar />,
  },
  {
    content: <About />,
  },
  {
    content: <Stacks />,
  },
  {
    content: <Blogs />,
  },
  {
    content: <Skills />,
  },
  {
    content: <ComingSoon />,
  },
  {
    content: <ContactModel />,
  },
];
