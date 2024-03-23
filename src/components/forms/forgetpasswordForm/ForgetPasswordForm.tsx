'use client';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
//import { KeyIcon } from '@heroicons/react/24/outline';
//import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { forgetPassword } from '@/apis';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const ForgotPasswordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const router = useRouter();

  const onSubmit = async (data: { email: string }) => {
    try {
      const res = await forgetPassword(data.email);
      toast.success(res.message);
      router.push(`/otp?email=${data.email}`);
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? 'Something went wrong');
      console.log('Error:', error.response?.data?.message);
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-md'>
        <div className='mb-8 flex items-center justify-center'>
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
          Forgot Password?
        </h2>
        <p className='mb-6 text-sm text-gray-600'>
          No worries, we’ll send you reset instructions
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
          <button
            type='submit'
            className='mt-4 w-full rounded-lg bg-orange-500 py-2 font-semibold text-white'
          >
            Request
          </button>
        </form>
        <div className='mt-4 flex items-center'>
          <p className='text-sm text-gray-600'>Remembered your password? </p>
          <a
            href='./signin'
            className='ml-1 text-sm font-semibold text-blue-600'
          >
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export { ForgotPasswordForm };
