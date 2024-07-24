'use client'

import { CLUB_NAMES, COUNTRIES } from '@/utils/constants'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Select, TextField } from '@radix-ui/themes'

export default function DriversFilters({
  lang,
  category,
  filter,
}: {
  lang: string
  category: string
  filter: string
}) {
  return (
    <div className="flex w-full max-w-7xl items-center justify-between">
      <TextField.Root
        type="search"
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
          defaultValue={filter ? decodeURIComponent(filter) : 'all'}
          onValueChange={(value) => {
            window.location.href = `/${lang}/drivers?category=${category ?? 'sports_cars'}&filter=${encodeURIComponent(value)}`
          }}
        >
          <Select.Trigger className="w-52" />
          <Select.Content>
            <Select.Item value="all">
              {lang === 'en'
                ? 'All clubs and countries'
                : 'Todos los clubes y países'}
            </Select.Item>

            <Select.Group>
              <Select.Label>
                {lang === 'en' ? 'Countries' : 'Países'}
              </Select.Label>
              {COUNTRIES.map((country) => (
                <Select.Item
                  key={country.country_code}
                  value={country.country_code}
                >
                  {`${country.flag} ${country.country_name}`}
                </Select.Item>
              ))}
            </Select.Group>

            <Select.Group>
              <Select.Label>{lang === 'en' ? 'Clubs' : 'Clubes'}</Select.Label>
              {CLUB_NAMES.map((club) => (
                <Select.Item key={club} value={club}>
                  {club}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  )
}
