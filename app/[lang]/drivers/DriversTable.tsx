'use client'

import { COUNTRIES } from '@/utils/constants'
import { createClient } from '@/utils/supabase/client'
import { Tables } from '@/utils/supabase/supabase'
import { Table, Text } from '@radix-ui/themes'
import { useEffect, useState } from 'react'

export default function DriversTable({
  lang,
  category,
  filter,
}: {
  lang: string
  category: string
  filter: string
}) {
  const categoryTable = getCategoryTable(category)

  const [drivers, setDrivers] = useState<Tables<typeof categoryTable>[] | []>(
    []
  )

  useEffect(() => {
    const db = createClient()
    async function fetchDrivers() {
      const { data: drivers, error } = await db
        .from(categoryTable)
        .select('*')
        .eq('country_code', filter)
        .order('irating', { ascending: false })
        .range(0, 9)

      if (error) {
        console.error(error)
        return
      }

      setDrivers(drivers)
      console.log(drivers)
    }

    fetchDrivers()
  }, [category, categoryTable, filter])

  return (
    <div className="flex w-full max-w-7xl flex-col items-start justify-center">
      <Table.Root variant="surface" className="w-full">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>#</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Driver</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>iRating</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Races</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Laps</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>License</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {drivers.map((driver, index) => (
            <Table.Row key={driver.driver_id}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>
                <div className="flex flex-col items-start justify-center gap-1">
                  <Text size="2">{driver.driver_name}</Text>
                  <div className="flex items-center justify-start gap-1">
                    <span>
                      {
                        COUNTRIES.find(
                          (country) =>
                            country.country_code === driver.country_code
                        )?.flag
                      }
                    </span>
                    <Text color="gray">-</Text>
                    <Text color="gray">{driver.club_name}</Text>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>{driver.irating}</Table.Cell>
              <Table.Cell>
                <div className="flex flex-col items-start justify-center gap-1">
                  <Text size="2">{`${driver.starts} Starts`}</Text>
                  <Text color="gray">{`${driver.wins} Wins (${Math.round(
                    (driver.wins / driver.starts) * 100
                  )}%)`}</Text>
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex flex-col items-start justify-center gap-1">
                  <Text size="2">{`${driver.laps} Total`}</Text>
                  <Text color="gray">{`${driver.laps_lead} Led (${Math.round(
                    (driver.laps_lead / driver.laps) * 100
                  )}%)`}</Text>
                </div>
              </Table.Cell>
              <Table.Cell>{driver.license_letter}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

// Get the category table name from the URL param
function getCategoryTable(category: string) {
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
