export class Env {
  constructor(private readonly env: NodeJS.ProcessEnv) {}

  get<T = string>(key: string, required: boolean = false): T | undefined {
    // eslint-disable-next-line no-useless-catch
    try {
      const value = this.env[key]
      if (required && !value) {
        const e = new Error(`Environment variable (${key}) is missing!`)
        throw e
      } else return value as T
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw error.message
    }
  }
}

export const env = new Env(process.env)
