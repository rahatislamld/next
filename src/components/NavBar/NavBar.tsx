import React from 'react';

const NavBar = () => {
  return (
    <div className='flex h-[90px] w-full flex-row items-center justify-between bg-[#002F5B] px-[80px] text-white'>
      <div className='flex flex-row items-center justify-center gap-[8px]'>
        <a href='#'>
          <img src='/applogo.svg' className='h-[44px] w-[33px]' />
        </a>
        <a
          href='#'
          className='font-krona text-[18px] font-normal leading-[22px] text-[#FAFAFA]'
        >
          AmarNeer
        </a>
      </div>

      <div className='flex flex-row gap-10'>
        <a href='#' className='text-white'>
          Home
        </a>
        <a href='#' className='text-white'>
          My Accounts
        </a>
        <a href='#' className='text-white'>
          Orders
        </a>
        <a href='#' className='text-white'>
          Calculator
        </a>
        <a href='#' className='text-white'>
          Feedback
        </a>
        <a href='#' className='text-white'>
          Call Us
        </a>
        <a href='#' className='text-white'>
          Mail Us
        </a>
      </div>

      <div>
        <button className='mr-4 rounded-md border border-gray-300 bg-[#002F5B] px-4 py-2 text-white transition-all duration-100 hover:bg-orange-500'>
          Login
        </button>
        <button
          className='rounded-md border border-gray-300 bg-orange-500 px-4 py-2 text-white shadow-sm transition-all duration-300 hover:bg-orange-600'
          style={{ height: '40px' }}
        >
          Sign Up free
        </button>
      </div>
    </div>
  );
};

export default NavBar;
