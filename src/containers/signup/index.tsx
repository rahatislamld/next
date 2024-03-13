import { SignupForm } from '@/components';
import React from 'react';

export const SignupContainer: React.FC = () => {
  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden '>
      <div className='rounded-md p-6 md:max-w-xl lg:max-w-xl'>
        <div className='mx-auto mt-8 sm:w-full sm:max-w-md'>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};
