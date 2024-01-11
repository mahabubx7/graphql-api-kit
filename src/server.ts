import { app } from '@/app'
import { vars } from '@config'
import { startStandaloneServer } from '@apollo/server/standalone'

/*
|---------------------------------------------------------------------
|=> Bootstraps the server
| @Server is the ApolloServer instance from standalone mode
| @returns Promise<void>
|---------------------------------------------------------------------
*/
const bootstrap = async (): Promise<void> => {
  const { url } = await startStandaloneServer(app, {
    // context: {}, // context handler
    listen: {
      port: vars['port'],
      host: vars['host'],
    },
  })
  console.log(`🚀 Service :[ ${vars['appName']} ]: ready at ${url}`)
}

await bootstrap()
