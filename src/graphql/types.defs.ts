import { readFileSync } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const self = fileURLToPath(import.meta.url)
const __dirname = dirname(self)
export const typeDefs = readFileSync(`${__dirname}/schema.graphql`, 'utf-8')
