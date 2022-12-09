declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GUARDIAN_API_KEY: string
    }
  }
}

export {}
