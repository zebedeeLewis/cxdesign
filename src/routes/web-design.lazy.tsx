import { createLazyFileRoute } from '@tanstack/react-router'
import WebDesign from '../pages/web-design'

export const Route = createLazyFileRoute('/web-design')({
  component: WebDesign,
})
