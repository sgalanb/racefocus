import { COUNTRIES } from '@/utils/constants'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Home
    {
      url: 'https://race-focus.com/en',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://race-focus.com/es',
        },
      },
    },
    // Drivers
    {
      url: 'https://race-focus.com/en/drivers/sports-cars',
      lastModified: new Date(),
      changeFrequency: 'daily',
      alternates: {
        languages: {
          es: 'https://race-focus.com/es/drivers/sports-cars',
        },
      },
    },
    {
      url: 'https://race-focus.com/en/drivers/formula-cars',
      lastModified: new Date(),
      changeFrequency: 'daily',
      alternates: {
        languages: {
          es: 'https://race-focus.com/es/drivers/formula-cars',
        },
      },
    },
    {
      url: 'https://race-focus.com/en/drivers/oval',
      lastModified: new Date(),
      changeFrequency: 'daily',
      alternates: {
        languages: {
          es: 'https://race-focus.com/es/drivers/oval',
        },
      },
    },
    {
      url: 'https://race-focus.com/en/drivers/dirt-oval',
      lastModified: new Date(),
      changeFrequency: 'daily',
      alternates: {
        languages: {
          es: 'https://race-focus.com/es/drivers/dirt-oval',
        },
      },
    },
    {
      url: 'https://race-focus.com/en/drivers/dirt-road',
      lastModified: new Date(),
      changeFrequency: 'daily',
      alternates: {
        languages: {
          es: 'https://race-focus.com/es/drivers/dirt-road',
        },
      },
    },
    // Drivers with filters
    ...driversWithFilters,
  ]
}

const driversWithFilters = COUNTRIES.map((country) => ({
  url: `https://race-focus.com/en/drivers/sports-cars?filter=${country.country_code}`,
  lastModified: new Date(),
  changeFrequency: 'daily' as any,
  alternates: {
    languages: {
      es: `https://race-focus.com/es/drivers/sports-cars?filter=${country.country_code}`,
    },
  },
}))
