'use client'

import { Button, DropdownMenu } from '@radix-ui/themes'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle({ ghost = false }: { ghost?: boolean }) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button size="3" variant="ghost">
          <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="start" className="!w-fit min-w-0">
        <DropdownMenu.Item onClick={() => setTheme('light')}>
          Light
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('system')}>
          System
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
