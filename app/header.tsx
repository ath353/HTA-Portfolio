'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/images/avatar_new.jpg"
          alt="Avatar"
          className="h-[130px] w-[130px] rounded-full object-cover"
        />
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Hoàng Tuấn Anh
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Tester
          </TextEffect>
        </div>
      </div>
      <nav className="flex space-x-4">
        <Link
          href="/"
          className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          Home
        </Link>

        <Link
          href="/projects"
          className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}
