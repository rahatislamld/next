'use client';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export const SuccessMessage: React.FC<object> = () => {
  const router = useRouter();
  return (
    <div className='space-y-6 bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
      <div className='space-y-5'>
        <div className='max-w-md'>
          <div className='mb-3 flex flex-col items-center space-y-4'>
            <div className='rounded-full bg-green-50 p-3'>
              <div className=' rounded-full bg-green-100 p-3'>
                <CheckBadgeIcon className='h-8 w-8 ' />
              </div>
            </div>
            <h2 className='text-2xl font-semibold'>Password Reset</h2>
            <p className='px-2 text-center text-[14px] text-gray-500'>
              {` Your password has been successfully reset. Click below to go log in page.`}
            </p>
          </div>
        </div>
        <button
          onClick={() => router.push('/userauth/signin')}
          className='my-6 w-full transform cursor-pointer rounded-md bg-[#036c3c] px-4 py-3 tracking-wide text-white transition-colors duration-200 hover:bg-green-600 focus:bg-gray-600 focus:outline-none'
        >
          Continue
        </button>
      </div>

      <p className='mt-4 text-center text-sm text-gray-700'>
        <Link
          href='/userauth/signin'
          className='flex items-center justify-center font-medium text-gray-500 hover:text-gray-700 hover:underline'
        >
          <ArrowLeftIcon className='mr-1 mt-1 h-4 w-4' /> Back to sign in
        </Link>
      </p>
    </div>
  );
};
