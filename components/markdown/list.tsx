import { format } from 'date-fns'
import Link from 'next/link'

export function List({ allPosts }) {
  const groupedPostsByMonthYear = allPosts.reduce((result, post) => {
    let key = format(post.frontMatter.createdAt, 'MMM yyyy')
    if (post.frontMatter.title) {
      result[key] = result[key] || []
      result[key].push(post)
    }
    return result
  }, {})

  return (
    <div className="grid mx-auto w-3/5">
      {Object.entries(groupedPostsByMonthYear).map(([date, posts]) => (
        <div key={date} className="grid grid-flow-col justify-between">
          <ul className="grid grid-flow-row m-0 list-none">
            {Array.isArray(posts) &&
              posts.map((post, index) => (
                <Link key={index} href={post.path} className="no-underline text-inherit hover:text-text-highlight">
                  <li className=" cursor-pointer before:content-['\22EF\0020'] before:font-black	 opacity-75	hover:opacity-100 inline-block">
                    {post.frontMatter.title}
                  </li>
                </Link>
              ))}
          </ul>
          <div className="justify-self-end	">
            <div className="mt-10 text-text-secondary" style={{ writingMode: 'vertical-rl' }}>
              {date}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
