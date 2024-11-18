import {FunctionComponent, CSSProperties} from 'react'
import './card.less'

interface BackgroundVariableCss extends CSSProperties {
  '--background-image'?: string;
  '--background-color'?: string;
}

export interface CardContent
  { heading: string
  , image: string
  , summary: string
  , backgroundColor: string
  }

export const Card:FunctionComponent<{content:CardContent}>
= ({content:{heading, image, summary, backgroundColor}}) => {
  const backgroundVariableCss: BackgroundVariableCss
    = { '--background-image': `url(${image})`
      , '--background-color': backgroundColor
      , }


  return <div style={backgroundVariableCss} className="portfolioCard-variableContainer">
    <div className="portfolioCard">
      <h2 className="portfolioCard-heading">{heading}</h2>
      <p className="portfolioCard-summary">{summary}</p>
    </div>
  </div>
}
