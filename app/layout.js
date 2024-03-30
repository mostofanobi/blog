import { Kumbh_Sans } from 'next/font/google';

import '@/assets/styles/globals.css';
import Footer from '@/components/footer/footer.comp';
import Header from '@/components/header/header.comp';
import Sidebar from '@/components/sidebar/sidebar.comp';

const kumbh = Kumbh_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog | Mostofa Nobi',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className={`${kumbh.className} bg-gray-50`}>
        <div className='min-h-screen flex flex-col justify-between'>
          <Header />
          <main className='flex-1'>
            <div className='max-w-screen-2xl mx-auto px-6'>
              <div className='flex'>
                <div className='hidden md:block'>
                  <div className='h-full'>
                    <div className='flex w-64 flex-col h-[calc(100vh-4rem)] overflow-y-auto py-6 border-r sticky top-16'>
                      <Sidebar />
                    </div>
                  </div>
                </div>
                <div className='flex-1'>{children}</div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
