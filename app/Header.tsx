import { ThemeToggle } from '@/app/ThemeToggle'
import { TabNav } from '@radix-ui/themes'
import Image from 'next/image'

export default function Header() {
  return (
    <header
      className="flex w-full flex-col items-center gap-5 bg-indigo-3 pt-5 dark:bg-indigodark-3"
      style={{
        boxShadow: 'inset 0 -1px 0 0 var(--gray-a5)',
      }}
    >
      <div className="flex w-full max-w-7xl justify-start">
        <Image
          src="/logotype.svg"
          alt="RaceFocus"
          width={160}
          height={150}
          className="dark:invert"
        />
      </div>

      <div className="flex w-full max-w-7xl items-center justify-between">
        <TabNav.Root className="shadow-none">
          <TabNav.Link href="/" active>
            Home
          </TabNav.Link>
          <TabNav.Link href="/drivers">Drivers</TabNav.Link>
          <TabNav.Link href="/series">Cars</TabNav.Link>
          <TabNav.Link href="/series">Tracks</TabNav.Link>
        </TabNav.Root>
        <ThemeToggle />
      </div>
    </header>
  )
}
