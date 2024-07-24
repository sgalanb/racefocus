import CategorySelector from '@/app/[lang]/drivers/CategorySelector'
import DriversFilters from '@/app/[lang]/drivers/DriversFilters'
import DriversTable from '@/app/[lang]/drivers/DriversTable'
import { createClient } from '@/utils/supabase/server'
import { Heading, Text } from '@radix-ui/themes'

export async function generateMetadata({
  params: { lang },
  searchParams: { category, filter },
}: {
  params: { lang: string }
  searchParams: {
    category: string
    filter: string
  }
}) {
  return {
    title:
      lang === 'en'
        ? 'Drivers Leaderboard | RaceFocus - iRacing Companion App'
        : 'Ranking de Pilotos | RaceFocus - Todo sobre iRacing',
  }
}

export default async function Drivers({
  params: { lang },
  searchParams: { category, filter },
}: {
  params: { lang: string }
  searchParams: {
    category: string
    filter: string
  }
}) {
  const db = createClient()

  const { data: lastUpdate } = await db
    .from('last_updates')
    .select('updated_at')
    .eq('data_type', getDataType(category))
    .single()

  const lastUpdateFormatted = new Date(
    lastUpdate?.updated_at ?? ''
  ).toLocaleString()

  return (
    <main className="justify-bg-center my-10 flex w-full flex-col items-center gap-10 px-4">
      {/* Header */}
      <div className="flex w-full max-w-7xl flex-col items-start justify-center">
        <Heading as="h1" size="8" weight="bold">
          {lang === 'en'
            ? `Drivers Leaderboard - ${getCategoryName(category, lang)}`
            : `Ranking de Pilotos - ${getCategoryName(category, lang)}`}
        </Heading>
        <Text size="4" className="text-slate-9">
          {lang === 'en'
            ? `Based on iRating. Last update: ${lastUpdateFormatted}`
            : `Según iRating. Última actualización: ${lastUpdateFormatted}`}
        </Text>
      </div>

      <CategorySelector lang={lang} category={category} filter={filter} />

      <div className="flex w-full flex-col items-center justify-start gap-2.5">
        <DriversFilters lang={lang} category={category} filter={filter} />
        <DriversTable lang={lang} category={category} filter={filter} />
      </div>
    </main>
  )
}

function getDataType(category: string) {
  switch (category) {
    case 'sports_cars':
      return 'driver-stats-sports_car'
    case 'formula_cars':
      return 'driver-stats-formula_car'
    case 'oval':
      return 'driver-stats-oval'
    case 'dirt_oval':
      return 'driver-stats-dirt_oval'
    case 'dirt_road':
      return 'driver-stats-dirt_road'
    default:
      return 'driver-stats-sports_car'
  }
}

function getCategoryName(category: string, lang: string) {
  switch (category) {
    case 'sports_cars':
      return lang === 'en' ? 'Sports Cars' : 'Deportivos'
    case 'formula_cars':
      return lang === 'en' ? 'Formula Cars' : 'Monoplazas'
    case 'oval':
      return lang === 'en' ? 'Oval' : 'Óvalos'
    case 'dirt_oval':
      return lang === 'en' ? 'Dirt Oval' : 'Óvalos de Tierra'
    case 'dirt_road':
      return lang === 'en' ? 'Dirt Road' : 'Circuitos de Tierra'
    default:
      return lang === 'en' ? 'Sports Cars' : 'Deportivos'
  }
}
