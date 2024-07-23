'use client'

import { ThemeToggle } from '@/app/components/ThemeToggle'
import { TabNav } from '@radix-ui/themes'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const rootPathname = pathname.split('/')[2]
  console.log(rootPathname)
  return (
    <header
      className="flex w-full flex-col items-center gap-5 bg-indigo-3 px-4 pt-4 dark:bg-indigodark-3"
      style={{
        boxShadow: 'inset 0 -1px 0 0 var(--gray-a5)',
      }}
    >
      <div className="flex w-full max-w-7xl justify-start">
        <Image
          src="/logotype.svg"
          alt="RaceFocus"
          width={142.86}
          height={30}
          className="dark:invert"
        />
      </div>

      <div className="flex w-full max-w-7xl items-center justify-between">
        <TabNav.Root className="shadow-none">
          <TabNav.Link href="/" active={!rootPathname}>
            Home
          </TabNav.Link>
          <TabNav.Link href="/drivers" active={rootPathname === 'drivers'}>
            Drivers
          </TabNav.Link>
          <TabNav.Link href="/cars" active={rootPathname === 'cars'}>
            Cars
          </TabNav.Link>
          <TabNav.Link href="/tracks" active={rootPathname === 'tracks'}>
            Tracks
          </TabNav.Link>
        </TabNav.Root>
        <ThemeToggle />
      </div>
    </header>
  )
}
