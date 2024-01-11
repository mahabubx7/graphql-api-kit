import { readFileSync } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const typeDefs = readFileSync(`${__dirname}/schema.graphql`, 'utf-8')
