import { promises as fs, existsSync, lstatSync } from 'fs'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import Matter from 'gray-matter'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import wikiLinkPlugin from 'remark-wiki-link'
import { headingsExtractPlugin, titleExtractPlugin } from './plugins'
import glob from 'glob'

const PATH = 'posts'
const EXTENSION = '.md'

const getPath = async (path) => {
  let options = [join(PATH, path), join(PATH, `${path}${EXTENSION}`), join(PATH, path, `index${EXTENSION}`)]

  return options.find((option) => existsSync(option) && lstatSync(option).isFile())
}

export const getPosts = async () => {
  return (await glob(`${PATH}/**/*.md`)).map((path) => {
    let segments = path.split('/').filter((segment) => segment !== `index${EXTENSION}`)
    segments.shift()
    return {
      file: path,
      url: segments.join('/').replaceAll(EXTENSION, ''),
    }
  })
}

export const getPostsWithContent = async () => {
  let posts = await getPosts()
  return await Promise.all(posts.map(async (post) => await getPost(post.url, false)))
}

export const getPost = async (path, loadAllPosts) => {
  let pluginData = {
    title: null,
    subTitle: null,
    headings: [],
  }

  const source = await fs.readFile(await getPath(path))
  const { content, data } = Matter(source)
  const parsedContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        [titleExtractPlugin, pluginData],
        [
          wikiLinkPlugin,
          {
            hrefTemplate: (permalink) => `${permalink}`,
          },
        ],
      ],
      rehypePlugins: [rehypeSlug, [headingsExtractPlugin, pluginData]],
    },
    scope: { allPosts: loadAllPosts ? await getPostsWithContent() : [] },
  })

  return {
    path,
    headings: pluginData.headings,
    source: parsedContent,
    frontMatter: {
      ...data,
      ...pluginData,
    },
  }
}
