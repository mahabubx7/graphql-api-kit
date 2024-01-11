import { getPosts, getPost } from './query'

import { QueryPostArgs } from './types'

export const resolvers = {
  Query: {
    post: (_: unknown, args: QueryPostArgs) => getPost(args.id),
    posts: () => getPosts(),
  },
}
