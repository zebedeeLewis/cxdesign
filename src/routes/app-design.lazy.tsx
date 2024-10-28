import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/app-design')({
  component: AppDesign,
})

function AppDesign() {
  return <div className="p-2">Hello from App Design!</div>
}
