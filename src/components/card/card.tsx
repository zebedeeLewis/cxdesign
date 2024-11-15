import {FunctionComponent} from 'react'

export interface CardContent
  { heading: string
  , image: string
  , summary: string
  }

export const Card:FunctionComponent<{content:CardContent}>
= ({content:{heading}}) => <>
  {heading}
</>
