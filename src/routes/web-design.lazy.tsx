import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/web-design')({
  component: WebDesign,
})

function WebDesign() {
  return <div className="p-2">Hello from Web Design Page!</div>
}
