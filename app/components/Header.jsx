import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Header = () => {
  return (
    <div id='home' className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Jiaqi Ye <Image src={assets.hand_icon} alt='' className='w-8' />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Let's explore code and creativity together.
      </h1>
             {/*Let's explore code and creativity together.Exploring creativity through computational methods, CS Student at UW-Madison*/ }
      <p className='max-w-lg mx-auto font-Ovo'>
        I'm currently studying Computer Science at UW-Madison, with three years of Media Art studies at a university in Beijing, China.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>
          Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </a>
        <a href="/CV.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
          My CV <Image src={assets.download_icon} alt='' className='w-4' />
        </a>
      </div>
    </div>
  );
};

export default Header;
