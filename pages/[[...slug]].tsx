import { Heading, TOC } from '../components/post'
import { getPosts, getPost } from '../lib/posts'
import { MDXRemote } from 'next-mdx-remote'
import { Components } from '../components/markdown'

export default function Post({ frontMatter, headings, source }) {
  const siteOptions = {
    heading: true,
    toc: true,
    sidenote: true,
    ...frontMatter.site,
  }
  const { heading, toc, sidenote } = siteOptions

  return (
    <main className="prose mx-auto px-8 prose-custom md:prose-lg lg:prose-xl max-w-6xl min-h-[85vh] prose-headings:font-normal">
      {heading && <Heading {...frontMatter} />}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
        <div className={`${sidenote ? 'col-span-3' : 'col-span-3 md:col-span-4'} max-w-5xl`}>
          <MDXRemote components={Components} {...source} />
        </div>
        {toc && headings.length > 0 && (
          <div className="hidden md:block">
            <TOC headings={headings} />
          </div>
        )}
      </div>
    </main>
  )
}

export const getStaticProps = async ({ params: { slug } }) => ({
  props: {
    ...(await getPost(slug ? slug.join('/') : '')),
  },
})

export const getStaticPaths = async () => {
  return {
    paths: (await getPosts()).map((post) => ({ params: { slug: post.url.split('/') } })),
    fallback: false,
  }
}
