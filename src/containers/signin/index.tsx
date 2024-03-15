import { SignInForm } from '@/components';
import React from 'react';

export const SignInContainer: React.FC = () => {
  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden'>
      <div className='m-6 rounded-md'>
        <div className='mx-auto'>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};
