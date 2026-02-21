import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import '../globals.css';

const researchData = [
  {
    img: assets.kokomi,
    title: "Instant Video Models: Universal Adapters for Stabilizing Image-Based Networks",
    description: "When applied sequentially to video, frame-based networks often exhibit temporal inconsistency – for example, outputs..."
  },
  {
    img: assets.Wan,
    title: "Quanta Neural Networks: From Photons to Perception",
    description: "Quanta image sensors record individual photons, enabling capabilities like imaging in near-complete darkness and ultra-high-speed..."
  }
];

const Research = () => {
  return (
   <div id="research" className="w-full px-[12%] pt-32 pb-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo mb-10">Research</h2>

      <p className="text-center text-gray-700 mb-16 max-w-3xl mx-auto font-Ovo">
        I am an undergraduate student with research interests in Computer Vision (CV) and Machine Learning (ML). 
        My focus is on building robust AI systems that can understand multimodal data with minimal supervision.
      </p>

      <div className="flex flex-col lg:flex-row gap-20">
        {researchData.map((item, index) => (
          <div key={index} className="flex-1 border-[0.5px] border-gray-400 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition p-4 cursor-pointer hover:-translate-y-1 duration-500">
            <div className="w-full h-64 relative mb-4">
              <Image src={item.img} alt={item.title} layout="fill" objectFit="cover" className="rounded-lg"/>
            </div>
            <h3 className="font-semibold text-xl mb-2 text-gray-700">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
