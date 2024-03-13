'use client';
import NavBar from '@/components/NavBar/NavBar';
import { Providers } from '@/providers';
import { Lato } from 'next/font/google';
import { usePathname } from 'next/navigation';
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
  const isAuthPage = currentPath === '/signin' || currentPath === '/signup';

  return (
    <html lang='en'>
      <body className={lato.className}>
        <Providers>
          {!isAuthPage && <NavBar />}
          <main className='bg-[#ecede8]'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
