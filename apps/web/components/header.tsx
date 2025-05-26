'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800"
        >
          수원시 통합관리 플랫폼
        </Link>

        <nav className="flex items-center space-x-6">
          <Link
            href="/"
            className={`text-gray-600 hover:text-gray-900 ${pathname === '/' ? 'font-semibold' : ''}`}
          >
            홈
          </Link>

          <Link
            href="/login"
            className={`text-gray-600 hover:text-gray-900 ${pathname === '/login' ? 'font-semibold' : ''}`}
          >
            로그인
          </Link>
          <Link
            href="/register"
            className={`text-gray-600 hover:text-gray-900 ${pathname === '/register' ? 'font-semibold' : ''}`}
          >
            회원가입
          </Link>
        </nav>
      </div>
    </header>
  );
}
