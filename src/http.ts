import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const getHTTPClient = () => {
  const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    params: {
      'api-key': import.meta.env.VITE_GUARDIAN_API_KEY,
      section: 'sport|culture|lifeandstyle',
      'show-fields': 'trailText,headline,body,thumbnail'
    }
  })

  return async (config: AxiosRequestConfig) => {
    try {
      const response = await client(config)

      return {
        response,
        error: null
      }
    } catch (e) {
      return {
        error: e as AxiosError,
        response: (e as AxiosError).response ?? null
      }
    }
  }
}

export default getHTTPClient
