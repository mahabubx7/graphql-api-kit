import assert from 'node:assert'
import { describe, test } from 'node:test'
import { getPosts, getPost } from '@/graphql/query'

describe('Unit Test: Post queries!', () => {
  test('should return posts', () => {
    const posts = getPosts()
    assert.ok(posts)
    assert.strictEqual(posts.length, 2)
  })

  test('should return one post', () => {
    const post = getPost('1')
    assert.ok(post)
    assert.strictEqual(post.id, '1')
    assert.strictEqual(post.title, 'Hello world!')
    assert.strictEqual(post.content, 'Hello world!')
    assert.strictEqual(post.published, true)
  })

  test('should return undefined for non-existent post', () => {
    const post = getPost('3')
    assert.strictEqual(post, undefined)
  })
})
