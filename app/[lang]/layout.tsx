import Footer from '@/app/[lang]/Footer'
import Header from '@/app/[lang]/Header'
import { Providers } from '@/app/providers'
import { Analytics } from '@vercel/analytics/react'
import { Roboto } from 'next/font/google'

import { Theme } from '@radix-ui/themes'
import '../globals.css'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string }
}) {
  return {
    title:
      lang === 'en'
        ? 'RaceFocus - iRacing Companion App'
        : 'RaceFocus - Todo sobre iRacing',
    description:
      lang === 'en'
        ? 'Tools and info to manage your iRacing career. We want to handle everything outside the sim so you can focus on what really matters, racing.'
        : 'Herramientas e información para gestionar tu progreso en iRacing.',
  }
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
                <Header lang={lang} />
                {children}
              </div>
              <Footer lang={lang} />
            </div>
          </Providers>
        </Theme>
        <Analytics />
      </body>
    </html>
  )
}
