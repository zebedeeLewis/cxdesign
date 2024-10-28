import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/graphic-design')({
  component: GraphicDesign,
})

function GraphicDesign() {
  return <div className="p-2">Hello from Graphic Design Page!</div>
}
