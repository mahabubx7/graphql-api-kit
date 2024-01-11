declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const Schema: DocumentNode

  export = Schema
}

// test only

interface ObjectItem {
  [key: string]: string | number | boolean | ObjectItem | ObjectItem[]
}

declare module '*.json' {
  const value: Record<string, ObjectItem>
  export = value
}
