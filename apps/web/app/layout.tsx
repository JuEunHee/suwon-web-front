import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';
const inter = Inter({ subsets: ['latin'] });
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Providers } from './providers';
import './globals.css';

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
