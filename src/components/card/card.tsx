import {FunctionComponent, useRef} from 'react'

export interface CardContent
  { heading: string
  , image: string
  , summary: string
  }

export const Card:FunctionComponent<{content:CardContent}>
= ({content:{heading, image, summary}}) => {
  const cardRef = useRef(null)

  return <div ref={cardRef} className="portfolioCard">
    <h2 className="portfolioCard-heading">{heading}</h2>
    {image}
    <p className="portfolioCard-summary">{summary}</p>
  </div>
}
