import { createLazyFileRoute } from '@tanstack/react-router'
import Location from '../pages/location'

export const Route = createLazyFileRoute('/cxdesign/location')({
  component: Location,
})
