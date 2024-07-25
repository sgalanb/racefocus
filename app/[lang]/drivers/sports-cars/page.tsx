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
        ? `iRating Leaderboard - Sports Cars ${filter && COUNTRIES.map((c) => c.country_code).includes(filter) ? `- ${COUNTRIES.find((c) => c.country_code === filter)?.country_name_en} ` : ''}| RaceFocus`
        : `Ranking de iRating - Deportivos ${filter && COUNTRIES.map((c) => c.country_code).includes(filter) ? `- ${COUNTRIES.find((c) => c.country_code === filter)?.country_name_es} ` : ''}| RaceFocus`,
    description: filter
      ? lang === 'en'
        ? `See the iRating Leaderboard for Sports Cars drivers from ${COUNTRIES.find((c) => c.country_code === filter)?.country_name_en} on RaceFocus, the iRacing Companion App.`
        : `Consulta el Ranking de iRating de Deportivos para pilotos de ${COUNTRIES.find((c) => c.country_code === filter)?.country_name_es} en RaceFocus.`
      : lang === 'en'
        ? `See the iRating Leaderboard for Sports Cars drivers on RaceFocus, the iRacing Companion App.`
        : `Consulta el Ranking de iRating de Deportivos en RaceFocus.`,
  }
}

export default function SportsCarsPage({
  params: { lang },
  searchParams: { filter },
}: {
  params: { lang: string }
  searchParams: {
    filter: string
  }
}) {
  return <Drivers lang={lang} filter={filter} category="sports-cars" />
}
