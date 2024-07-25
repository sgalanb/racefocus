'use client'

import { ThemeToggle } from '@/app/components/ThemeToggle'
import { Select, TabNav } from '@radix-ui/themes'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Header({ lang }: { lang: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const rootPathname = pathname.split('/')[2]
  const pathnameWithoutLang = pathname.split('/').slice(2).join('/')
  const searchParams = useSearchParams()

  return (
    <header
      className="flex w-full flex-col items-center gap-5 bg-indigo-3 px-4 pt-4 dark:bg-indigodark-3"
      style={{
        boxShadow: 'inset 0 -1px 0 0 var(--gray-a5)',
      }}
    >
      <div className="pointer-events-none flex w-full max-w-7xl select-none justify-start">
        <Image
          src="/logotype.svg"
          alt="RaceFocus"
          width={142.86}
          height={30}
          className="dark:invert"
        />
      </div>

      <div className="flex w-full max-w-7xl items-center justify-between">
        <TabNav.Root>
          <TabNav.Link
            href={`/${lang}/drivers`}
            active={rootPathname === 'drivers'}
          >
            {lang === 'en' ? 'Drivers' : 'Pilotos'}
          </TabNav.Link>
        </TabNav.Root>

        <div className="flex gap-2.5">
          <Select.Root
            size="1"
            defaultValue={lang}
            onValueChange={(value) => {
              router.push(
                `/${value}/${pathnameWithoutLang}${searchParams ? `?${searchParams}` : ''}`
              )
            }}
          >
            <Select.Trigger variant="soft" />
            <Select.Content>
              <Select.Item value="en">English</Select.Item>
              <Select.Item value="es">Español</Select.Item>
            </Select.Content>
          </Select.Root>
          <ThemeToggle lang={lang} />
        </div>
      </div>
    </header>
  )
}
