import { redirect } from 'next/navigation'

export default function Home({
  params: { lang },
  searchParams: { filter },
}: {
  params: { lang: string }
  searchParams: {
    filter: string
  }
}) {
  redirect(`/${lang}/drivers`)
}
