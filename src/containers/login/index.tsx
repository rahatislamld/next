import { LoginForm } from '@/components';
import React from 'react';

export const LoginContainer: React.FC = () => {
  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-200'>
      <div className='rounded-md p-6 md:max-w-xl lg:max-w-xl'>
        <div className='mx-auto mt-8 sm:w-full sm:max-w-md'>
          <div className='space-y-6 bg-gray-100 px-4 py-8 sm:rounded-lg sm:px-10'>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};
