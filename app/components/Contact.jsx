import React, { useState } from 'react';
import { assets } from '@/assets/assets'
import Image from 'next/image';

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "29e458af-fffa-4b31-9747-fb6c5567daba");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 mt-20 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo mb-12">Contact</h2>

      <p className="text-center max-w-2xl mx-auto mb-8 font-Ovo">
        I'd love to hear from you! If you have any questions, comments
        <br />
        or feedback, please use the form below.
      </p>

      {/* Email / GitHub */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 text-sm mb-12">
        {/* Email */}
        <a
          href="mailto:jye224@wisc.edu"
          className="flex items-center gap-3 text-gray-500"
        >
          <Image
            src={assets.email}
            alt="email"
            width={36}
            height={36}
          />
          <span style={{ fontFamily: 'Verdana, Arial, sans-serif' }} className="font-extralight">
            jye224@wisc.edu
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Jiaqi-Ye"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-500"
        >
          <Image
            src={assets.github}
            alt="github"
            width={36}
            height={36}
          />
          <span style={{ fontFamily: 'Verdana, Arial, sans-serif' }} className="font-thin">
            Jiaqi-Ye
          </span>
        </a>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 mb-6'>
          <input type="text" placeholder="Enter your name" name='name' required
            className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
          <input type="email" placeholder="Enter your email" name='email' required
            className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
        </div>

        <textarea rows='6' placeholder='Enter your message' name='message' required
          className='w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>

        <button
          type='submit'
          className='group py-3 px-8 w-max flex items-center justify-center gap-2 border-2 border-black text-black bg-white rounded-full mx-auto text-center hover:bg-black hover:text-white duration-300 mb-6'
        >
          Submit now
          <Image
            src={assets.right_arrow_black}
            alt=""
            width={16}
            height={16}
            className="group-hover:hidden"
          />
          <Image
            src={assets.right_arrow_white}
            alt=""
            width={16}
            height={16}
            className="hidden group-hover:block"
          />
        </button>

        <p className='text-center mt-2 text-gray-600'>{result}</p>
      </form>
    </div>
  );
};

export default Contact;
