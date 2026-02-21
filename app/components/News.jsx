import React from 'react'
import Image from 'next/image'
import { researchList, assets } from '@/assets/assets'

const News = () => {
    return (
        <div id='news' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center text-5xl font-Ovo mb-10'>News</h2>

            <ul className='space-y-6'>
                {researchList.slice(0, 4).map(({ image, title, description, date }, index) => (
                    <li key={index} className='flex items-start gap-10'>
                        {/* 图标 */}
                        <div className='w-24 h-24 flex-shrink-0'>
                            <Image
                                src={image}
                                alt={title}
                                className='w-full h-full object-contain rounded-3xl'
                            />
                        </div>

                        {/* 文字部分 */}
                        <div className='flex-1'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                                {title}
                            </h3>
                            <p className='text-[17px] leading-snug text-gray-800 font-Ovo flex items-start gap-2 ml-0'>
                                <span>{description}</span>
                            </p>
                        </div>


                        {/* 日期 */}
                        <div className='text-sm hidden md:block text-gray-500 whitespace-nowrap self-start pt-1'>
                            {date}
                        </div>
                    </li>
                ))}
            </ul>


            {/* View All 按钮 */}
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-8'>
                <a href="#research" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>
                    View All <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </a>
            </div>
        </div>
    )
}

export default News
