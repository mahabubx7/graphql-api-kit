import { env } from '@/core'
import { config } from 'dotenv'

config() // initiate dotenv parser

export const vars = {
  /*
  -------------------------------------------------------------
  | @Register environment variables
  | @Config variables & exports
  | Note: use `!` when it is required without undefined value
  -------------------------------------------------------------
  */
  appName: env.get('APP_NAME', true)!, // required or throws => error!
  port: env.get<number>('PORT', true)!, // required or throws => error!
  host: env.get('HOST') || '0.0.0.0',

  // ...
} as const
