import { createLazyFileRoute } from '@tanstack/react-router'

import About from '../pages/about'

export const Route = createLazyFileRoute('/cxdesign/about')({
  component: About,
})
