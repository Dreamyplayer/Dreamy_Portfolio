import Image from 'next/image';

import EyesFollow from '@/ui/TrackingCursor';

export const ContactModel = () => {
  return (
    <div className='grid cursor-GearBone grid-flow-col place-items-center'>
      <Image src={'/lets_talk.svg'} alt='Lets Talk' className='h-32 w-32' height={130} width={130} />
      <EyesFollow />
    </div>
  );
};
