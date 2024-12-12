import { createLazyFileRoute } from '@tanstack/react-router'
import GraphicDesign from '../pages/graphic-design'

export const Route = createLazyFileRoute('/cxdesign/graphic-design')({
  component: GraphicDesign,
})
