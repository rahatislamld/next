'use client';
import NavBar from '@/components/NavBar/NavBar';
import { Providers } from '@/providers';
import { Lato } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPath = usePathname();
  const isAuthPage =
    currentPath === '/userauth/signin' ||
    currentPath === '/userauth/signup' ||
    currentPath === '/userauth/otp' ||
    currentPath === '/userauth/forgotpassword' ||
    currentPath === 'userauth/setpassword';

  return (
    <html lang='en'>
      <body className={lato.className}>
        <Providers>
          {!isAuthPage && <NavBar />}
          <main className='bg-[#ecede8]'>{children}</main>
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
