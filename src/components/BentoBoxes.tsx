import { About } from '@/components/GridItems/About';
import { Avatar } from '@/components/GridItems/Avatar';
import { ComingSoon } from '@/components/GridItems/ComingSoon';
import { ContactModel } from '@/components/GridItems/ContactUsModel';
import { GithubStats } from '@/components/GridItems/GithubStats';
import NowBuilding from '@/components/GridItems/NowBuilding';
import ProjectsTeaser from '@/components/GridItems/ProjectsTeaser';
import { RolePlay } from '@/components/GridItems/RolePlay';
import { Skills } from '@/components/GridItems/Skills';
import { SocialIcons } from '@/components/GridItems/SocialMedia';
import UIUX from '@/components/GridItems/UIUX';
import { BentoGrid, BentoGridItem } from '@/ui/BentoUI';

const BentoBoxes = () => {
  return (
    <BentoGrid className='mx-auto mt-20 max-w-7xl'>
      {contentItems.map((items, i) => (
        <BentoGridItem
          key={i + 'content'}
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
    content: <UIUX />,
  },
  {
    content: <ProjectsTeaser />,
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
    content: <NowBuilding />,
  },
  {
    content: <GithubStats />,
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
