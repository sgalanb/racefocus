import type { Config } from 'tailwindcss'
import tailwindcssRadixColors from 'tailwindcss-radix-colors'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {},
  plugins: [tailwindcssRadixColors],
  darkMode: 'class',
}
export default config
