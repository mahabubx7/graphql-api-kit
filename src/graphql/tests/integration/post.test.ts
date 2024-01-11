import { app } from '@/app'
import assert from 'node:assert'
import test, { describe } from 'node:test'

describe('Integration Test: GraphQL queries!', () => {
  test('should return posts', async () => {
    const result = await app.executeOperation({
      query: `
                query {
                    posts {
                        id
                        title
                        content
                        published
                    }
                }
            `,
    })
    assert.ok(result)
    assert.strictEqual(result.body.kind, 'single')
    assert.strictEqual(
      (result.body.singleResult?.data?.posts as object[]).length,
      2,
    )
  })

  test('should return one post', async () => {
    const result = await app.executeOperation({
      query: `
                query {
                    post(id: "1") {
                        id
                        title
                        content
                        published
                    }
                }
            `,
    })
    assert.ok(result)
    assert.strictEqual(result.body.kind, 'single')
    assert.strictEqual(
      (result.body.singleResult?.data?.post as Record<string, any>).id,
      '1',
    )
    assert.strictEqual(
      (result.body.singleResult?.data?.post as Record<string, any>).title,
      'Hello world!',
    )
    assert.strictEqual(
      (result.body.singleResult?.data?.post as Record<string, any>).content,
      'Hello world!',
    )
    assert.strictEqual(
      (result.body.singleResult?.data?.post as Record<string, any>).published,
      true,
    )
  })
})
