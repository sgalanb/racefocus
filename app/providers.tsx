'use client'

import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'

export function Providers({
  children,
  ...props
}: {
  children: React.ReactNode
  [key: string]: any
}) {
  return (
    <ThemeProvider {...props}>
      <Theme
        accentColor="indigo"
        grayColor="slate"
        radius="small"
        scaling="100%"
        panelBackground="translucent"
      >
        {children}{' '}
      </Theme>
    </ThemeProvider>
  )
}
