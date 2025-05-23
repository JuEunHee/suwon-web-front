import type { Metadata } from 'next';

import './globals.css';

import type React from 'react';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Footer from '@/components/footer';
import Header from '@/components/header';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: '수원시 통합관리 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
