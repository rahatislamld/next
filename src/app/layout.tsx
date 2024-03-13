'use client';
import NavBar from '@/components/NavBar/NavBar';
import { Providers } from '@/providers';
import { Lato } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        <Providers>
          <NavBar />
          <main className='bg-[#ecede8]'>{children}</main>
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
