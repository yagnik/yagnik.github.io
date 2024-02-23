import { getPostsWithContent } from '../lib/posts'
const { z } = require('zod')
import { describe, expect, test } from 'vitest'

const schema = z
  .object({
    kind: z.enum(['Note']),
    status: z.enum(['Thought', 'seed']),
    site: z.object({
      heading: z.boolean(),
      toc: z.boolean(),
      sidenote: z.boolean(),
    }),
    createdAt: z.number(),
    updatedAt: z.number(),
    title: z.string().nullable(),
    subTitle: z.string().nullable(),
    headings: z.any().optional(),
  })
  .strict()

describe('Markdown Schema Validation', async () => {
  (await getPostsWithContent()).forEach((post) => {
    test(`for ${post.path}`, () => {
      expect(() => {
        schema.parse(post.frontMatter)
      }).not.toThrow()
    })
  })
})
