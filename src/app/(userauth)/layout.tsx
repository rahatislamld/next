import { Providers } from '@/providers';
import { Lato } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import '../globals.css';

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
          <main className='bg-[#ecede8]'>{children}</main>
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
