import { Box, RadioCards, Text } from '@radix-ui/themes'

export default function Drivers() {
  return (
    <main className="justify-bg-center my-10 flex w-full max-w-7xl flex-col items-center gap-10">
      <div className="flex w-full flex-col items-start justify-center">
        <Text size="8" weight="bold">
          Driver Standings
        </Text>
        <Text size="4" className="text-slate-9">
          Updated 10 minutes ago
        </Text>
      </div>

      <Box maxWidth="600px">
        <RadioCards.Root defaultValue="1" columns={{ initial: '1', sm: '3' }}>
          <RadioCards.Item value="1">
            <div className="flex items-center justify-center gap-2.5">
              <Text weight="bold">Sports Cars</Text>
            </div>
          </RadioCards.Item>
        </RadioCards.Root>
      </Box>
    </main>
  )
}
