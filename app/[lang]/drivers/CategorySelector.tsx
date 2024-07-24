'use client'

import DirtOvalIcon from '@/app/components/icons/DirtOvalIcon'
import DirtRoadIcon from '@/app/components/icons/DirtRoadIcon'
import FormulaCarIcon from '@/app/components/icons/FormulaCarIcon'
import OvalIcon from '@/app/components/icons/Oval'
import SportsCarIcon from '@/app/components/icons/SportsCarIcon'
import { RadioCards, Text } from '@radix-ui/themes'

export default function CategorySelector({
  lang,
  category,
  filter,
}: {
  lang: string
  category: string
  filter: string
}) {
  return (
    <RadioCards.Root
      defaultValue={getCategory(category)}
      columns={{ initial: '1', sm: '5' }}
      onValueChange={(value) => {
        window.location.href = `/${lang}/drivers?category=${value}${filter ? `&filter=${encodeURIComponent(filter)}` : ''}`
      }}
    >
      <RadioCards.Item value="sports_cars">
        <div className="flex items-center justify-center gap-2.5">
          <SportsCarIcon className="w-5 fill-slate-12 dark:fill-slatedark-12" />
          <Text size="2" weight="medium">
            {lang === 'en' ? 'Sports Cars' : 'Deportivos'}
          </Text>
        </div>
      </RadioCards.Item>
      <RadioCards.Item value="formula_cars">
        <div className="flex items-center justify-center gap-2.5">
          <FormulaCarIcon className="w-5 fill-slate-12 dark:fill-slatedark-12" />
          <Text size="2" weight="medium">
            {lang === 'en' ? 'Formula Cars' : 'Monoplazas'}
          </Text>
        </div>
      </RadioCards.Item>
      <RadioCards.Item value="oval">
        <div className="flex items-center justify-center gap-2.5">
          <OvalIcon className="w-5 fill-slate-12 dark:fill-slatedark-12" />
          <Text size="2" weight="medium">
            {lang === 'en' ? 'Oval' : 'Óvalos'}
          </Text>
        </div>
      </RadioCards.Item>
      <RadioCards.Item value="dirt_oval">
        <div className="flex items-center justify-center gap-2.5">
          <DirtOvalIcon className="w-5 fill-slate-12 dark:fill-slatedark-12" />
          <Text size="2" weight="medium">
            {lang === 'en' ? 'Dirt Oval' : 'Óvalos de Tierra'}
          </Text>
        </div>
      </RadioCards.Item>
      <RadioCards.Item value="dirt_road">
        <div className="flex items-center justify-center gap-2.5">
          <DirtRoadIcon className="w-5 fill-slate-12 dark:fill-slatedark-12" />
          <Text size="2" weight="medium">
            {lang === 'en' ? 'Dirt Road' : 'Circuitos de Tierra'}
          </Text>
        </div>
      </RadioCards.Item>
    </RadioCards.Root>
  )
}

// Get the category from the URL param
function getCategory(category: string) {
  switch (category) {
    case 'sports_cars':
      return 'sports_cars'
    case 'formula_cars':
      return 'formula_cars'
    case 'oval':
      return 'oval'
    case 'dirt_oval':
      return 'dirt_oval'
    case 'dirt_road':
      return 'dirt_road'
    default:
      return 'sports_cars'
  }
}
