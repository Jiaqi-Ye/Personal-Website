import React from 'react'
import Image from 'next/image';
import { assets, infoList,toolsData } from '@/assets/assets';
import '../globals.css'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none hidden lg:block'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>

        <div className='flex-l'>
          <p className='mb-10 max-w-2xl font-Ovo'>Hi, I'm Jiaqi Ye, a CS student at UW-Madison with a background in Digital Media Art. I'm interested in computer vision, AI, and generative models. I've worked on LoRA fine-tuning and developed games, apps, and websites. Currently, I'm a full-stack developer for a music game team.</p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-blue-50 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'
                     key={index}>
                        <Image src={icon} alt={title}></Image>
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description}</p>
                    </li>
                ))}
            </ul>
            <h4 className='my-6 text-gray-700 font-Ovo'>I'm proficient with tools like VS Code, Figma, Git, Blender, and Unity.</h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool,index)=>(
                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'key={index}>
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
