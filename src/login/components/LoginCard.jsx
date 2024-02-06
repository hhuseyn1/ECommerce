import React from 'react';
import MailIcon from '../../assets/codicon_mail.svg';
import PassIcon from '../../assets/bx_bxs-lock-alt.svg';

export default function LoginCard() {

  return (
    <>
      <div className='flex flex-col sm:w-[399px] h-[375px] w-screen justify-around items-center'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-5xl'>Hello Again!</h1>
          <h4 className='text-2xl'>Welcome Back</h4>
        </div>
        <div className='flex flex-col mt-10 relative px-5 sm:px-0 min-[320px]:w-full'>
          <div className='relative mb-6'>
            <img src={MailIcon} className='w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 z-10' alt='Mail Icon' />
            <input type="email" placeholder='Email address' className='w-full sm:w-[388px] h-[48px] pl-10 rounded-full border border-gray-300 focus:outline-none focus:border-[#5ECE7B]' />
          </div>
          <div className='relative mb-6'>
            <img src={PassIcon} className='w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 z-10' alt='Password Icon' />
            <input type="password" placeholder='Password' className='w-full sm:w-[388px] h-[48px] pl-10 rounded-full border border-gray-300 focus:outline-none focus:border-[#5ECE7B]' />
          </div>
          <input type="submit" value="Login" className='bg-green-500 text-white w-full h-12 cursor-pointer' />
        </div>
      </div>
    </>
  );
}
