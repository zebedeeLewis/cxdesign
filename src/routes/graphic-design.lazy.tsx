import { createLazyFileRoute } from '@tanstack/react-router'
import GraphicDesign from '../pages/graphic-design'

export const Route = createLazyFileRoute('/graphic-design')({
  component: GraphicDesign,
})
