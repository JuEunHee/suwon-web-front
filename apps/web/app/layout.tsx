import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
const inter = Inter({ subsets: ['latin'] });
import type { ReactNode } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/assets/globals.scss';

export const metadata: Metadata = {
  title: '수원시 통합관리 플랫폼',
  description:
    '수원시 통합관리 플랫폼은 수원시의 다양한 정보를 통합하여 제공하는 플랫폼입니다. ' +
    '시민들이 쉽게 접근하고 이용할 수 있도록 설계되었습니다.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Providers>{children}</Providers>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
