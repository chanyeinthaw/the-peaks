import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const getHTTPClient = () => {
  const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    params: {
      'api-key': import.meta.env.VITE_GUARDIAN_API_KEY
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
