import { Box, RadioCards, Text } from '@radix-ui/themes'

export default function Drivers({
  params: { lang },
}: {
  params: { lang: string }
}) {
  return (
    <main className="justify-bg-center my-10 flex w-full max-w-7xl flex-col items-center gap-10 px-4">
      <div className="flex w-full flex-col items-start justify-center">
        <Text size="8" weight="bold">
          {lang === 'en' ? 'Driver Standings' : 'Clasificación de Pilotos'}
        </Text>
        <Text size="4" className="text-slate-9">
          Updated 10 minutes ago
        </Text>
      </div>

      <Box>
        <RadioCards.Root defaultValue="1" columns={{ initial: '1', sm: '5' }}>
          <RadioCards.Item value="1">
            <div className="flex items-center justify-center gap-2.5">
              <Text weight="bold">Sports Cars</Text>
            </div>
          </RadioCards.Item>
          <RadioCards.Item value="2">
            <div className="flex items-center justify-center gap-2.5">
              <Text weight="bold">Formula Cars</Text>
            </div>
          </RadioCards.Item>
          <RadioCards.Item value="3">
            <div className="flex items-center justify-center gap-2.5">
              <Text weight="bold">Oval</Text>
            </div>
          </RadioCards.Item>
          <RadioCards.Item value="4">
            <div className="flex items-center justify-center gap-2.5">
              <Text weight="bold">Dirt Oval</Text>
            </div>
          </RadioCards.Item>
          <RadioCards.Item value="5">
            <div className="flex items-center justify-center gap-2.5">
              <Text weight="bold">Dirt Road</Text>
            </div>
          </RadioCards.Item>
        </RadioCards.Root>
      </Box>
    </main>
  )
}
