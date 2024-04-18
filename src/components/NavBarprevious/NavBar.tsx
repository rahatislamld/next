import React from 'react';

const NavBar = () => {
  return (
    <div className='fixed flex h-[90px] w-full flex-row items-center justify-between bg-[#002F5B] px-[80px] text-white'>
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

      <div className='flex flex-row gap-10 text-white'>
        <a href='#' className='hover:text-orange-500'>
          Home
        </a>
        <a href='#' className='hover:text-orange-500'>
          My Accounts
        </a>
        <a href='#' className='hover:text-orange-500'>
          Orders
        </a>
        <a href='#' className='hover:text-orange-500'>
          Calculator
        </a>
        <a href='#' className='hover:text-orange-500'>
          Feedback
        </a>
        <a href='#' className='hover:text-orange-500'>
          Call Us
        </a>
        <a href='#' className='hover:text-orange-500'>
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

// import Image from 'next/image';
// import { Disclosure } from '@headlessui/react';
// import { XIcon as XMarkIcon, MenuIcon as Bars3Icon } from '@heroicons/react/24/outline';
// import { ProfileBar } from './ProfileBar'; // Import ProfileBar component from the appropriate location
// import { navigation } from './navigation'; // Assuming navigation data is imported from a separate file
// import { Link } from '@radix-ui/themes';
// import { useState, useEffect } from 'react';

// const Navbar: React.FC = () => {
//   const NavBar: React.FC = () => {
//       const [activeMenu, setActiveMenu] = useState(() => {
//         if (typeof window !== 'undefined') {
//           return localStorage.getItem('activeMenu') || 'signin';
//         }
//         return 'signin';
//       });

//       useEffect(() => {
//         localStorage.setItem('activeMenu', activeMenu);
//       }, [activeMenu]);

//       const navigation = [
//         { name: 'SignUp', href: '/signup' },
//         { name: 'SignIn', href: '/signin' },
//       ];

//       const handleMenuClick = (name: string) => {
//         setActiveMenu(name);
//       };

//   return (
//     <Disclosure as='nav' className='bg-orange-500 shadow-md'>
//       {({ open }: any) => (
//         <>
//           <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
//             <div className='flex h-16 justify-between items-center'>
//               <div className='flex items-center'>
//                 {/* Logo */}
//                 <Image src='/logo.png' alt='logo' height={48} width={150} />
//               </div>
//               <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
//                 {/* Navigation links */}
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href} // Use href attribute for routing
//                     onClick={() => handleMenuClick(item.name)}
//                     className={`inline-flex items-center px-1 pt-1 text-sm font-semibold text-gray-100 hover:text-gray-200 ${
//                       activeMenu === item.name ? 'border-b-2 border-gray-100' : ''
//                     }`}
//                   >
//                     <span>{item.name}</span>
//                   </Link>
//                 ))}
//               </div>

//               {/* Mobile menu button */}
//               <div className='-mr-2 flex items-center sm:hidden'>
//                 <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
//                   <span className='absolute -inset-0.5' />
//                   <span className='sr-only'>Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className='block h-6 w-6 text-white' aria-hidden='true' />
//                   ) : (
//                     <Bars3Icon className='block h-6 w-6 text-white' aria-hidden='true' />
//                   )}
//                 </Disclosure.Button>
//               </div>

//               {/* ProfileBar */}
//               <div className='hidden items-center md:flex'>
//                 <ProfileBar />
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu panel */}
//           <Disclosure.Panel className='sm:hidden bg-orange-500'>
//             <div className='space-y-1 pb-3 pt-2'>
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => handleMenuClick(item.name)}
//                   className={`block py-2 pl-3 pr-4 text-base font-medium text-gray-100 hover:text-gray-200 ${
//                     activeMenu === item.name ? 'border-l-4 border-gray-100' : ''
//                   }`}
//                 >
//                   <span>{item.name}</span>
//                 </Link>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// };

// export default Navbar;
