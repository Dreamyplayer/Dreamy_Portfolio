import {
  About,
  Avatar,
  Blogs,
  ComingSoon,
  ContactMe,
  Projects,
  RolePlay,
  Skills,
  SocialIcons,
  Stacks,
  UI,
} from '@/components/contentComponents';
import { BentoGrid, BentoGridItem } from '@/ui/BentoUI';

const BentoBoxes = () => {
  return (
    <BentoGrid className='mx-auto mt-20 max-w-7xl'>
      {contentItems.map((items, i) => (
        <BentoGridItem
          key={i}
          content={items.content}
          className={`${i === 0 || i === 5 || i === 10 || i === 8 ? 'md:col-span-2' : i === 7 ? 'md:row-span-1 lg:-mt-32 lg:h-96' : i === 3 ? 'h-32 border-none' : ''} `}
        />
      ))}
    </BentoGrid>
  );
};

export default BentoBoxes;

const contentItems = [
  {
    title: 'asdasd',
    content: <RolePlay />,
  },
  {
    title: 'asdasd',
    content: <UI />,
  },
  {
    title: 'asdasd',
    content: <Projects />,
  },
  {
    title: 'asdasd',
    content: <SocialIcons />,
  },
  {
    title: 'asdasd',
    content: <Avatar />,
  },
  {
    title: 'asdasd',
    content: <About />,
  },
  {
    title: 'asdasd',
    content: <Stacks />,
  },
  {
    title: 'asdasd',
    content: <Blogs />,
  },
  {
    title: 'asdasd',
    content: <Skills />,
  },
  {
    title: 'asdasd',
    content: <ComingSoon />,
  },
  {
    title: 'asdasd',
    content: <ContactMe />,
  },
];
