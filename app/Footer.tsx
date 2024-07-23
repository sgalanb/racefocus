import { Text } from '@radix-ui/themes'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="flex w-full flex-col items-center gap-5 bg-indigo-3 p-5 dark:bg-indigodark-3">
      <Image
        src="/logotype.svg"
        alt="RaceFocus"
        width={160}
        height={150}
        className="dark:invert"
      />
      <Text size="2" weight="medium">
        This website is unofficial and is not associated in any way with
        iRacing®. All assets belong to iRacing.com Motorsport Simulations LLC.
      </Text>
    </div>
  )
}
