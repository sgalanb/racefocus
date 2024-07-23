import Footer from '@/app/[lang]/Footer'
import Header from '@/app/[lang]/Header'
import { Providers } from '@/app/providers'
import { Roboto } from 'next/font/google'

import { Theme } from '@radix-ui/themes'
import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>) {
  return (
    <html lang={lang} className={roboto.className}>
      <body>
        <Theme
          accentColor="indigo"
          grayColor="slate"
          radius="small"
          scaling="100%"
          panelBackground="translucent"
        >
          <Providers attribute="class" defaultTheme="system" enableSystem>
            <div className="flex w-full flex-col items-center">
              <div className="flex min-h-screen w-full flex-col items-center justify-start">
                <Header />
                {children}
              </div>
              <Footer />
            </div>
          </Providers>
        </Theme>
      </body>
    </html>
  )
}
