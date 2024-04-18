import NavBar from '@/components/NavBar/NavBar';
import { Providers } from '@/providers';
import { Lato } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import '../globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
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
      <body
        className={lato.className}
        style={{ maxWidth: '1440px', margin: 'auto' }}
      >
        <Theme accentColor='red'>
          <Providers>
            <NavBar />
            <main className='bg-[#ecede8] '>{children}</main>
          </Providers>
          <ToastContainer />
        </Theme>
      </body>
    </html>
  );
}
