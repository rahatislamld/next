'use client';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const OTP_SIZE = 4;

interface FormData {
  [key: string]: string;
}

export const OTPForm: React.FC<{ email: string }> = ({ email }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, touchedFields },
  } = useForm<FormData>();
  const firstInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (data: FormData) => {
    try {
      console.log('OTP submitted:', data);
      console.log(email);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputLength = e.target.value.length;
    const nextIndex = (index % OTP_SIZE) + 1;
    if (inputLength === 1 && nextIndex !== 1) {
      setTimeout(() => {
        const nextInput = document.getElementById(
          `otp${nextIndex}`
        ) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }, 0);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData('text')
      .trim()
      .substring(0, OTP_SIZE);
    const otpDigits = pastedData.split('');
    otpDigits.forEach((digit, index) => {
      const currentInput = document.getElementById(
        `otp${index + 1}`
      ) as HTMLInputElement;
      if (currentInput) {
        currentInput.value = digit;
        currentInput.focus();
        currentInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });
  };

  return (
    <div className='space-y-6 bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <div className='max-w-md'>
          <div className='mb-3 flex flex-col items-center space-y-4'>
            <div className='rounded-full bg-green-50 p-3'>
              <div className='rounded-full bg-green-100 p-3'>
                <EnvelopeClosedIcon className='h-8 w-8 ' />
              </div>
            </div>
            <h2 className='text-2xl font-semibold'>Check your email</h2>
            <p className='text-[12px]'>
              We have sent a verification code to {email}
            </p>
          </div>
          <div className='flex space-x-2'>
            {[...Array(OTP_SIZE)].map((_, index: number) => (
              <input
                key={index}
                id={`otp${index + 1}`}
                type='text'
                maxLength={1}
                {...register(`otp${index + 1}`, {
                  required: true,
                })}
                className='mt-2 flex w-1/4 items-center justify-center rounded-md border bg-white px-2 py-2 text-center text-3xl font-semibold text-[#036c3c]  focus:border-2 focus:border-[#036c3c] focus:outline-none focus:ring-0'
                onChange={(e) => handleInputChange(e, index + 1)}
                ref={index === 0 ? firstInputRef : undefined}
                onPaste={handlePaste}
              />
            ))}
          </div>

          {isSubmitted && Object.keys(touchedFields).length > 0 && (
            <p className='text-red-500'>
              Please enter all {OTP_SIZE} OTP digits
            </p>
          )}
        </div>
        <input
          type='submit'
          value='Submit'
          className='my-6 w-full transform cursor-pointer rounded-md bg-[#036c3c] px-4 py-3 tracking-wide text-white transition-colors duration-200 hover:bg-green-600 focus:bg-gray-600 focus:outline-none'
        />
      </form>

      <div className='relative my-6 flex w-full items-center justify-center border border-t'>
        <div className='absolute bg-gray-100 px-5 text-black'>Or</div>
      </div>

      <p className='mt-4 text-center text-sm text-gray-700'>
        {'Create an account '}
        <Link
          href='/userauth/signup'
          className='font-medium text-blue-600 hover:underline'
        >
          Signup
        </Link>
      </p>
    </div>
  );
};
