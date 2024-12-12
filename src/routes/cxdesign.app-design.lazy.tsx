import { createLazyFileRoute } from '@tanstack/react-router'
import AppDesign from '../pages/app-design'

export const Route = createLazyFileRoute('/cxdesign/app-design')({
  component: AppDesign,
})
