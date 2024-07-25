'use client'

import { Button, DropdownMenu } from '@radix-ui/themes'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle({ lang }: { lang: string }) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button size="1" variant="soft" className="text-[var(--accent-12)]">
          <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">
            {lang === 'en' ? 'Change theme' : 'Cambiar tema'}
          </span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" className="!w-fit min-w-0">
        <DropdownMenu.Item onClick={() => setTheme('light')}>
          {lang === 'en' ? 'Light' : 'Claro'}
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('dark')}>
          {lang === 'en' ? 'Dark' : 'Oscuro'}
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('system')}>
          {lang === 'en' ? 'Device' : 'Dispositivo'}
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
