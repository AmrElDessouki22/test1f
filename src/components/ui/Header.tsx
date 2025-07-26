'use client'

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Note App</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/profile" className="ml-4">Profile</Link>
        </nav>
      </div>
    </header>
  );
}