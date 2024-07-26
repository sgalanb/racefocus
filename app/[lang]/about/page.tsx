import { Heading, Text } from '@radix-ui/themes'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string }
}) {
  return {
    title: lang === 'en' ? 'About | RaceFocus' : 'Acerca de | RaceFocus',
  } as Metadata
}

export default function About({
  params: { lang },
  searchParams: { filter },
}: {
  params: { lang: string }
  searchParams: {
    filter: string
  }
}) {
  return (
    <main className="justify-bg-center my-10 flex w-full flex-col items-center gap-10 px-4">
      {/* Header */}
      <div className="flex w-full max-w-7xl flex-col items-start justify-center gap-2.5">
        <Heading as="h1" size="8" weight="bold">
          {lang === 'en' ? `About` : `Acerca de`}
        </Heading>
      </div>
      {/* Content */}
      <div className="flex w-full max-w-7xl flex-col items-start justify-center gap-2.5">
        <Text size="4" className="max-w-prose text-balance">
          {lang === 'en'
            ? `RaceFocus is a work in progress companion web app for iRacing. The long term vision is to handle everything outside the sim so you can focus on what really matters, racing.`
            : ` RaceFocus es una web app en desarrollo, complementaria a iRacing. La visión a largo plazo es manejar toda la información importante fuera del simulador para que puedas enfocarte en lo que realmente importa, correr.`}
        </Text>
        {lang === 'en' ? (
          <Text size="4" className="max-w-prose text-balance">
            You can{' '}
            <Link
              href="https://x.com/sgalanb"
              className="text-indigo-9 underline-offset-2 hover:text-indigo-10 hover:underline dark:text-indigodark-9 hover:dark:text-indigodark-10"
              target="_blank"
            >
              follow me
            </Link>{' '}
            to stay updated on the progress of the app.
          </Text>
        ) : (
          <Text size="4" className="max-w-prose text-balance">
            Podés{' '}
            <Link
              href="https://x.com/sgalanb"
              className="text-indigo-9 underline-offset-2 hover:text-indigo-10 hover:underline dark:text-indigodark-9 hover:dark:text-indigodark-10"
              target="_blank"
            >
              seguirme
            </Link>{' '}
            para enterarte de los avances de la app.
          </Text>
        )}
        <div className="mt-10 flex items-center justify-start gap-2.5">
          <Image
            src="/signature.png"
            alt="RaceFocus"
            width={72}
            height={72}
            className="dark:invert"
          />
          <Text size="2" weight="medium">
            <Link
              href="https://www.linkedin.com/in/sgalanb/"
              className="underline-offset-2 hover:underline"
              target="_blank"
            >
              Santiago Galán Barlo
            </Link>
          </Text>
        </div>
      </div>
    </main>
  )
}
