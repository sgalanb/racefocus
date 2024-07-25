import Drivers from '@/app/[lang]/drivers/Drivers'
import { COUNTRIES } from '@/utils/constants'

export async function generateMetadata({
  params: { lang },
  searchParams: { filter },
}: {
  params: { lang: string }
  searchParams: {
    filter: string
  }
}) {
  return {
    title:
      lang === 'en'
        ? `iRating Leaderboard - Formula Cars ${filter && COUNTRIES.map((c) => c.country_code).includes(filter) ? `- ${COUNTRIES.find((c) => c.country_code === filter)?.country_name_en} ` : ''}| RaceFocus`
        : `Ranking de iRating - Monoplazas ${filter && COUNTRIES.map((c) => c.country_code).includes(filter) ? `- ${COUNTRIES.find((c) => c.country_code === filter)?.country_name_es} ` : ''}| RaceFocus`,
  }
}

export default function FormulaCarsPage({
  params: { lang },
  searchParams: { filter },
}: {
  params: { lang: string }
  searchParams: {
    filter: string
  }
}) {
  return <Drivers lang={lang} filter={filter} category="formula-cars" />
}
