import { createLazyFileRoute } from '@tanstack/react-router'
import AppDesign from '../pages/app-design'

export const Route = createLazyFileRoute('/app-design')({
  component: AppDesign,
})
