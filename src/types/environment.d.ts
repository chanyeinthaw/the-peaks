declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GUARDIAN_API_KEY: string
      REACT_APP_API_URL: string
    }
  }
}

export {}
