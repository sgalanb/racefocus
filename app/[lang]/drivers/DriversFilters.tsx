'use client'

import { COUNTRIES } from '@/utils/constants'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Select, TextField } from '@radix-ui/themes'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

export default function DriversFilters({
  lang,
  category,
}: {
  lang: string
  category: string
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  return (
    <div className="flex w-full max-w-7xl items-center justify-between">
      <TextField.Root
        type="search"
        defaultValue={searchParams.get('search') ?? ''}
        onChange={(e) => {
          router.push(
            `/${lang}/drivers/${category ?? 'sports_cars'}${
              searchParams.get('filter')
                ? `?filter=${encodeURIComponent(searchParams.get('filter')!)}${
                    e.target.value !== ''
                      ? `&search=${encodeURIComponent(e.target.value)}`
                      : ``
                  }`
                : e.target.value !== ''
                  ? `?search=${encodeURIComponent(e.target.value)}`
                  : ``
            }`
          )
        }}
        placeholder={lang === 'en' ? 'Search drivers...' : 'Buscar pilotos...'}
        size="2"
        className="w-1/3"
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <div className="flex items-center justify-center gap-3">
        <Select.Root
          size="2"
          defaultValue={
            searchParams.get('filter')
              ? decodeURIComponent(searchParams.get('filter')!)
              : 'all'
          }
          onValueChange={(value) => {
            router.push(
              `/${lang}/drivers/${category ?? 'sports_cars'}?filter=${encodeURIComponent(value)}${
                searchParams.get('search')
                  ? `&search=${encodeURIComponent(searchParams.get('search')!)}`
                  : ''
              }`
            )
          }}
        >
          <Select.Trigger className="w-52" />
          <Select.Content>
            <Select.Item value="all">
              {lang === 'en' ? 'All countries' : 'Todos los países'}
            </Select.Item>

            <Select.Group>
              {COUNTRIES.sort((a, b) =>
                lang === 'en'
                  ? a.country_name_en.localeCompare(b.country_name_en)
                  : a.country_name_es.localeCompare(b.country_name_es)
              ).map((country) => (
                <Select.Item
                  key={country.country_code}
                  value={country.country_code}
                >
                  <div className="flex gap-2.5">
                    <Image
                      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                        country.country_code
                      }.svg`}
                      height={14}
                      width={14}
                      alt="county flag"
                    />
                    {`${lang === 'en' ? country.country_name_en : country.country_name_es}`}
                  </div>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  )
}
