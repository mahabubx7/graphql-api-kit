import data from '../data.json'

export function getPosts() {
  return data.posts
}

export function getPost(ID: string) {
  const post = data.posts.findIndex((post) => post.id === ID)
  return data.posts[post]
}
