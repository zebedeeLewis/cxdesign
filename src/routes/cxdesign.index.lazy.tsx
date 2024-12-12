import { createLazyFileRoute } from '@tanstack/react-router'
import Index from '../pages/index'

export const Route = createLazyFileRoute('/cxdesign/')({
  component: Index,
})
