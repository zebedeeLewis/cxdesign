import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/location')({
  component: Location,
})

function Location() {
  return <div className="p-2">Hello from Location Page!</div>
}
