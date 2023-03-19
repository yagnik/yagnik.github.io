import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'

export function Heading({ kind, status, title, subTitle, createdAt, updatedAt }) {
  return (
    <div className="grid gap-1">
      <h4 className="pl-2 !m-0">
        <strong className="text-text-highlight">{kind}</strong>
        {status ? <>{` - ${status}`}</> : null}
      </h4>
      <h1 className="!m-0">{title}</h1>
      <h4 className="pl-1 !m-0">{subTitle}</h4>
      <div className="h-0.5 bg-gray-200 w-full" />
      <div className="text-right">
        <sub>
          {!updatedAt
            ? `Created ${formatDistanceToNow(createdAt, { addSuffix: true })}`
            : `Last updated ${formatDistanceToNow(createdAt, { addSuffix: true })}`}
        </sub>
      </div>
    </div>
  )
}

export function TOC({ headings }) {
  return (
    <div className="grid grid-flow-row sticky top-0">
      <h4 className="!mt-[1.2em]">Table of Contents</h4>
      <div>
        {headings.map((heading, index) => {
          return (
            <Link key={index} href={heading.href} className="no-underline text-inherit hover:text-text-highlight">
              <h6 className={`pl-${(heading.level - 2) * 2}`}>{heading.label}</h6>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
