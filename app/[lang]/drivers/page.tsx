import { redirect } from 'next/navigation'

export default function DriversRedirect({
  params: { lang },
  searchParams: { filter },
}: {
  params: { lang: string }
  searchParams: {
    filter: string
  }
}) {
  redirect(`/${lang}/drivers/sports-cars${filter ? `?filter=${filter}` : ''}`)
}
