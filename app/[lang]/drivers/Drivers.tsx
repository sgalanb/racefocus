import CategorySelector from '@/app/[lang]/drivers/CategorySelector'
import DriversFilters from '@/app/[lang]/drivers/DriversFilters'
import DriversTable from '@/app/[lang]/drivers/DriversTable'
import { CATEGORIES, COUNTRIES } from '@/utils/constants'
import { createClient } from '@/utils/supabase/server'
import { Heading, Text } from '@radix-ui/themes'

export default async function Drivers({
  lang,
  filter,
  category,
}: {
  lang: string
  filter: string
  category: string
}) {
  const db = createClient()

  const { data: lastUpdate } = await db
    .from('last_updates')
    .select('updated_at')
    .eq(
      'data_type',
      CATEGORIES.find((c) => c.category_code === category)
        ?.category_table_name ?? ''
    )
    .single()

  const lastUpdateFormatted = new Date(
    lastUpdate?.updated_at ?? ''
  ).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <main className="justify-bg-center my-10 flex w-full flex-col items-center gap-10 px-4">
      {/* Header */}
      <div className="flex w-full max-w-7xl flex-col items-start justify-center gap-2.5">
        <Heading as="h1" size="8" weight="bold">
          {lang === 'en'
            ? `iRating Leaderboard - ${CATEGORIES.find((c) => c.category_code === category)?.category_name_en} ${filter && COUNTRIES.map((c) => c.country_code).includes(filter) ? `- ${COUNTRIES.find((c) => c.country_code === filter)?.country_name_en} ` : ''}`
            : `Ranking de iRating - ${CATEGORIES.find((c) => c.category_code === category)?.category_name_es} ${filter && COUNTRIES.map((c) => c.country_code).includes(filter) ? `- ${COUNTRIES.find((c) => c.country_code === filter)?.country_name_es} ` : ''}`}
        </Heading>
        <Text size="4" className="text-slate-9">
          {lang === 'en'
            ? `Last update: ${lastUpdateFormatted} UTC`
            : `Última actualización: ${lastUpdateFormatted} UTC`}
        </Text>
      </div>

      <CategorySelector lang={lang} category={category} />

      <div className="flex w-full flex-col items-center justify-start gap-2.5">
        <DriversFilters lang={lang} category={category} />
        <DriversTable lang={lang} category={category} />
      </div>
    </main>
  )
}
