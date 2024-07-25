'use client'

import DirtOvalIcon from '@/app/components/icons/DirtOvalIcon'
import DirtRoadIcon from '@/app/components/icons/DirtRoadIcon'
import FormulaCarIcon from '@/app/components/icons/FormulaCarIcon'
import OvalIcon from '@/app/components/icons/Oval'
import SportsCarIcon from '@/app/components/icons/SportsCarIcon'
import { RadioCards, Text } from '@radix-ui/themes'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function CategorySelector({
  lang,
  category,
}: {
  lang: string
  category: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <RadioCards.Root
      defaultValue={category}
      columns={{ initial: '2', sm: '5' }}
      onValueChange={(value) => {
        router.push(
          `/${lang}/drivers/${value}${
            searchParams.get('filter')
              ? `?filter=${encodeURIComponent(searchParams.get('filter')!)}${
                  searchParams.get('search')
                    ? `&search=${encodeURIComponent(searchParams.get('search')!)}`
                    : ''
                }`
              : searchParams.get('search')
                ? `?search=${encodeURIComponent(searchParams.get('search')!)}`
                : ''
          }`
        )
      }}
    >
      <RadioCards.Item value="sports-cars">
        <div className="flex items-center justify-center gap-2.5">
          <SportsCarIcon className="w-5 fill-slate-12 dark:fill-slatedark-12" />
          <Text size="2" weight="medium">
            {lang === 'en' ? 'Sports Cars' : 'Deportivos'}
          </Text>
        </div>
      </RadioCards.Item>
      <RadioCards.Item value="formula-cars">
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
      <RadioCards.Item value="dirt-oval">
        <div className="flex items-center justify-center gap-2.5">
          <DirtOvalIcon className="w-5 fill-slate-12 dark:fill-slatedark-12" />
          <Text size="2" weight="medium">
            {lang === 'en' ? 'Dirt Oval' : 'Óvalos de Tierra'}
          </Text>
        </div>
      </RadioCards.Item>
      <RadioCards.Item value="dirt-road">
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
