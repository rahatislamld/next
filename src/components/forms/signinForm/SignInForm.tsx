'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useAuth } from '@/contexts';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await signin(data);
      toast.success('Login successful');
      router.push(''); // Redirect to home page
    } catch (error: any) {
      if (error.response?.data?.message === 'User not verified') {
        router.push(`/otp?email=${data.email}&t=new`);
      }
      toast.error(error.response?.data?.message ?? 'Something went wrong');
      console.log(error);
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='z-10 flex'>
        <div className='w-full max-w-md rounded-l-lg bg-white p-8 shadow-md'>
          <div className='justify-left mb-8 flex items-center'>
            <div className='mb-4'>
              <Image
                src='/amarneer.png'
                alt='logo image'
                height={35}
                width={130}
              />
            </div>
          </div>
          <h2 className='mb-4 text-lg font-bold text-purple-900'>
            Log in to your Account
          </h2>
          <p className='mb-6 text-sm text-gray-600'>
            Use your work email or phone number to log in to your account
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div className='flex flex-col'>
              <label
                htmlFor='email'
                className='text-sm font-semibold text-gray-900'
              >
                Email or Phone Number
              </label>
              <input
                id='email'
                type='text'
                className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none`}
                {...register('email', { required: true })}
              />
              {errors.email && (
                <p className='text-xs text-red-500'>Email is required</p>
              )}
            </div>
            <div className='relative flex flex-col'>
              <label
                htmlFor='password'
                className='text-sm font-semibold text-gray-900'
              >
                Password
              </label>
              <div className='flex items-center'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} w-full rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none`}
                  {...register('password', { required: true })}
                />

                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 flex items-center px-4'
                >
                  {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </button>
              </div>
              {errors.password && (
                <p className='text-xs text-red-500'>Password is required</p>
              )}
            </div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='remember'
                className='text-sm font-semibold text-gray-900'
              >
                <input
                  id='remember'
                  type='checkbox'
                  className='mr-2'
                  {...register('rememberMe')}
                />
                Remember me
              </label>
              <a
                href='./forgotpassword'
                className='text-sm font-semibold text-blue-600'
              >
                Forget Password?
              </a>
            </div>
            <button
              type='submit'
              className='mt-4 w-full rounded-lg bg-orange-500 py-2 font-semibold text-white'
            >
              Log In
            </button>
          </form>
          <div className='mt-4 flex items-center'>
            <p className='text-sm text-gray-600'>Do not have an account? </p>
            <a
              href='./signup'
              className='ml-1 text-sm font-semibold text-blue-600'
            >
              Sign Up
            </a>
          </div>
        </div>
        <div className='w-full max-w-md overflow-hidden rounded-r-lg bg-black shadow-md'>
          <img
            src={'/towers.png'}
            alt={''}
            className='h-full w-full opacity-90'
          />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
