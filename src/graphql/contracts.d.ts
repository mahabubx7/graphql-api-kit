declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const Schema: DocumentNode
  export = Schema
}

interface ObjectItem {
  [key: string]:
    | string
    | number
    | boolean
    | ObjectItem
    | string[]
    | number[]
    | boolean[]
    | ObjectItem[]
}

declare module '*.json' {
  const JSON: Record<string, ObjectItem>
  export = JSON
}
