import { InfiniteMoving, InfiniteMovingleft } from "@/components/MovingSkills";

export const Skills = () => {
  return (
    <div className='mt-2 flex flex-col items-center justify-between font-medium'>
      <div className='border-b-2 border-blue-400'>Skills</div>
      <InfiniteMoving />
      <div className='border-b-2 border-blue-400'>UI/UX</div>
      <InfiniteMovingleft />
    </div>
  );
};
