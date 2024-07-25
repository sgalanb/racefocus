'use client'

import DirtOvalIcon from '@/app/components/icons/DirtOvalIcon'
import DirtRoadIcon from '@/app/components/icons/DirtRoadIcon'
import FormulaCarIcon from '@/app/components/icons/FormulaCarIcon'
import OvalIcon from '@/app/components/icons/Oval'
import SportsCarIcon from '@/app/components/icons/SportsCarIcon'
import { COUNTRIES, LICENSES } from '@/utils/constants'
import { addOrdinalSuffix } from '@/utils/functions'
import { createClient } from '@/utils/supabase/client'
import { Tables } from '@/utils/supabase/supabase'
import {
  Badge,
  Button,
  Skeleton,
  Spinner,
  Table,
  Text,
  Tooltip,
} from '@radix-ui/themes'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DriversTable({
  lang,
  category,
}: {
  lang: string
  category: string
}) {
  const searchParams = useSearchParams()

  const [drivers, setDrivers] = useState<
    Tables<
      | 'driver-stats-sports_car'
      | 'driver-stats-formula_car'
      | 'driver-stats-oval'
      | 'driver-stats-dirt_oval'
      | 'driver-stats-dirt_road'
    >[]
  >([])
  const [offset, setOffset] = useState(0)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const limit = 10
  const search = searchParams.get('search')?.replace(/\s/g, '+') ?? ''
  const filter = searchParams.get('filter') ?? ''

  useEffect(() => {
    // Reset drivers and offset when category, search, or filter changes
    setDrivers([])
    setOffset(0)
    fetchDrivers(0)
    setIsInitialLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, search, filter])

  async function fetchDrivers(currentOffset: number) {
    const categoryTable = getCategoryTable(category)
    const db = createClient()
    const hasFilter =
      !filter ||
      filter === 'all' ||
      !COUNTRIES.map((c) => c.country_code).includes(filter)
        ? null
        : filter
    const rpcFunctionName = getRpcFunctionName(category)

    let query

    if (search) {
      query = db.rpc(rpcFunctionName, { prefix: search })
    } else {
      query = db.from(categoryTable).select('*')
    }

    if (hasFilter) {
      query = query.eq('country_code', filter)
    }

    const { data, error } = await query
      .order('irating', { ascending: false })
      .range(currentOffset, currentOffset + limit - 1)

    if (error) {
      console.error(error)
      setIsInitialLoading(false)
      setIsLoadingMore(false)
      return
    }

    setDrivers((prevDrivers) =>
      currentOffset === 0 ? data : [...prevDrivers, ...data]
    )
    setOffset(currentOffset + limit)
    setIsInitialLoading(false)
    setIsLoadingMore(false)
  }

  const handleLoadMore = () => {
    setIsLoadingMore(true)
    fetchDrivers(offset)
  }

  return (
    <div className="flex w-full max-w-7xl flex-col items-center justify-start gap-2.5">
      <Table.Root variant="surface" className="w-full">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>
              {lang === 'en' ? 'Position' : 'Posición'}
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              {lang === 'en' ? 'Driver' : 'Piloto'}
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              {lang === 'en' ? 'License' : 'Licencia'}
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>iRating</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden sm:table-cell">
              {lang === 'en' ? 'Races' : 'Carreras'}
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              {lang === 'en' ? 'Laps' : 'Vueltas'}
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {isInitialLoading ? (
            Array(limit)
              .fill(0)
              .map((_, index) => <SkeletonRow key={index} />)
          ) : drivers.length > 0 ? (
            drivers.map((driver) => (
              <Table.Row key={driver.driver_id}>
                {/* Pos */}
                <Table.Cell>
                  <div className="flex h-full w-full items-center justify-start">
                    <Text size="2">
                      {`
                    ${lang === 'en' && driver.pos ? addOrdinalSuffix(driver.pos) : driver?.pos?.toLocaleString() + 'º'}
                    ${
                      driver.pos === 1
                        ? ' 🥇'
                        : driver.pos === 2
                          ? ' 🥈'
                          : driver.pos === 3
                            ? ' 🥉'
                            : ''
                    }`}
                    </Text>
                  </div>
                </Table.Cell>
                {/* Driver */}
                <Table.Cell>
                  <div className="flex flex-col items-start justify-center gap-1">
                    <Text size="2" weight="medium">
                      {driver.driver_name}
                    </Text>
                    <div className="flex items-center justify-start gap-1">
                      <Tooltip
                        side="left"
                        content={
                          lang === 'en'
                            ? COUNTRIES.find(
                                (country) =>
                                  country.country_code === driver.country_code
                              )?.country_name_en
                            : COUNTRIES.find(
                                (country) =>
                                  country.country_code === driver.country_code
                              )?.country_name_es
                        }
                      >
                        <span className="cursor-default">
                          {
                            COUNTRIES.find(
                              (country) =>
                                country.country_code === driver.country_code
                            )?.flag
                          }
                        </span>
                      </Tooltip>
                      <Text size="2" color="gray">
                        -
                      </Text>
                      <Text size="2" color="gray">
                        {driver.club_name}
                      </Text>
                    </div>
                  </div>
                </Table.Cell>
                {/* License */}
                <Table.Cell>
                  <div className="flex h-full w-full items-center justify-start">
                    <Badge
                      color={
                        LICENSES.find(
                          (license) =>
                            license.license_letter === driver.license_letter
                        )?.license_color as
                          | 'gray'
                          | 'blue'
                          | 'green'
                          | 'yellow'
                          | 'orange'
                          | 'red'
                      }
                    >
                      <div className="flex gap-1.5">
                        {category === 'sports-cars' ? (
                          <SportsCarIcon className="w-3 fill-[var(--accent-a11)]" />
                        ) : category === 'formula-cars' ? (
                          <FormulaCarIcon className="w-3 fill-[var(--accent-a11)]" />
                        ) : category === 'oval' ? (
                          <OvalIcon className="w-3 fill-[var(--accent-a11)]" />
                        ) : category === 'dirt-oval' ? (
                          <DirtOvalIcon className="w-3 fill-[var(--accent-a11)]" />
                        ) : (
                          category === 'dirt-road' && (
                            <DirtRoadIcon className="w-3 fill-[var(--accent-a11)]" />
                          )
                        )}
                        {lang === 'en'
                          ? LICENSES.find(
                              (license) =>
                                license.license_letter === driver.license_letter
                            )?.license_name_en
                          : LICENSES.find(
                              (license) =>
                                license.license_letter === driver.license_letter
                            )?.license_name_es}
                      </div>
                    </Badge>
                  </div>
                </Table.Cell>
                {/* iRating */}
                <Table.Cell>
                  <div className="flex h-full w-full items-center justify-start">
                    <Text size="2" weight="medium">
                      {driver.irating}
                    </Text>
                  </div>
                </Table.Cell>
                {/* Races */}
                <Table.Cell className="hidden sm:table-cell">
                  <div className="flex flex-col items-start justify-center gap-1">
                    <Text size="2">{`${driver.starts?.toLocaleString()}`}</Text>
                    <Text
                      size="2"
                      color="gray"
                    >{`${driver.wins?.toLocaleString()} ${lang === 'en' ? 'Wins' : 'Victorias'} (${Math.round(
                      ((driver.wins ?? 0) / (driver.starts ?? 0)) * 100
                    )}%)`}</Text>
                  </div>
                </Table.Cell>
                {/* Laps */}
                <Table.Cell className="hidden md:table-cell">
                  <div className="flex flex-col items-start justify-center gap-1">
                    <Text size="2">{`${driver.laps?.toLocaleString()}`}</Text>
                    <Text
                      size="2"
                      color="gray"
                    >{`${driver.laps_lead?.toLocaleString()} ${lang === 'en' ? 'Led' : 'Lideradas'} (${Math.round(
                      ((driver.laps_lead ?? 0) / (driver.laps ?? 0)) * 100
                    )}%)`}</Text>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={6}>
                <div className="flex items-center justify-center gap-2">
                  <Text size="2" color="gray">
                    {lang === 'en'
                      ? 'No drivers found'
                      : 'No se encontraron pilotos'}
                  </Text>
                </div>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>

      {drivers.length === offset && !isInitialLoading && (
        <Button
          variant="soft"
          onClick={handleLoadMore}
          disabled={isLoadingMore}
          className="w-24"
        >
          {isLoadingMore ? (
            <div>
              <Spinner />
            </div>
          ) : lang === 'en' ? (
            'Load more'
          ) : (
            'Cargar más'
          )}
        </Button>
      )}
    </div>
  )
}

function getRpcFunctionName(category: string) {
  switch (category) {
    case 'sports-cars':
      return 'search_sports_cars_drivers_by_name_prefix'
    case 'formula-cars':
      return 'search_formula_cars_drivers_by_name_prefix'
    case 'oval':
      return 'search_oval_drivers_by_name_prefix'
    case 'dirt-oval':
      return 'search_dirt_oval_drivers_by_name_prefix'
    case 'dirt-road':
      return 'search_dirt_road_drivers_by_name_prefix'
    default:
      return 'search_sports_cars_drivers_by_name_prefix'
  }
}

function getCategoryTable(category: string) {
  switch (category) {
    case 'sports-cars':
      return 'driver-stats-sports_car'
    case 'formula-cars':
      return 'driver-stats-formula_car'
    case 'oval':
      return 'driver-stats-oval'
    case 'dirt-oval':
      return 'driver-stats-dirt_oval'
    case 'dirt-road':
      return 'driver-stats-dirt_road'
    default:
      return 'driver-stats-sports_car'
  }
}

const SkeletonRow = () => (
  <Table.Row>
    <Table.Cell>
      <div className="flex h-full items-center justify-start">
        <Skeleton height="16px" width="36px" />
      </div>
    </Table.Cell>
    <Table.Cell>
      <div className="flex flex-col gap-2">
        <Skeleton height="18px" width="128px" />
        <Skeleton height="18px" width="96px" />
      </div>
    </Table.Cell>
    <Table.Cell>
      <div className="flex h-full items-center justify-start">
        <Skeleton height="20px" width="80px" />
      </div>
    </Table.Cell>
    <Table.Cell>
      <div className="flex h-full items-center justify-start">
        <Skeleton height="16px" width="48px" />
      </div>
    </Table.Cell>
    <Table.Cell>
      <div className="flex flex-col gap-2">
        <Skeleton height="18px" width="64px" />
        <Skeleton height="18px" width="96px" />
      </div>
    </Table.Cell>
    <Table.Cell>
      <div className="flex flex-col gap-2">
        <Skeleton height="18px" width="64px" />
        <Skeleton height="18px" width="96px" />
      </div>
    </Table.Cell>
  </Table.Row>
)
