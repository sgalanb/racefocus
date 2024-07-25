import { Text } from '@radix-ui/themes'
import Image from 'next/image'

export default function Footer({ lang }: { lang: string }) {
  return (
    <div
      className="flex w-full flex-col items-center gap-5 bg-indigo-3 p-5 dark:bg-indigodark-3"
      style={{
        boxShadow: 'inset 0 0 0 1px var(--gray-a5)',
      }}
    >
      <Image
        src="/logotype.svg"
        alt="RaceFocus"
        width={142.86}
        height={30}
        className="dark:invert"
      />
      <Text size="2" weight="regular">
        {lang === 'en'
          ? `This website isn't associated in any way with iRacing®. All assets belong to iRacing.com Motorsport Simulations LLC.`
          : 'Esta web no está asociada de ninguna manera con iRacing®. Todos los recursos pertenecen a iRacing.com Motorsport Simulations LLC.'}
      </Text>
    </div>
  )
}
