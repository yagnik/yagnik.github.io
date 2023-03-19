export function Columns({ children }) {
  return <div className={`grid grid-cols-1 md:grid-cols-2`}>{children}</div>
}

export function Column({ children }) {
  return <div>{children}</div>
}
