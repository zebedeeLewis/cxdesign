import {FunctionComponent, CSSProperties} from 'react'
import { Link } from '@tanstack/react-router'

import canadaLocationImage from '../../assets/canada-location-image.svg'
import australiaLocationImage from '../../assets/australia-location-image.svg'
import unitedKingdomLocationImage from '../../assets/united-kingdom-location-image.svg'

import './location-links.less'

interface BackgroundVariableCss extends CSSProperties {
  '--image'?: `url(${string})`;
}

const imgVar = (s:string): BackgroundVariableCss => ({'--image': `url(${s})`})

export const LocationLinks:FunctionComponent
= () => <nav className="locationLinks">
  <ul className="locationLinks-list"> {
    [ { title: "Canada"
      , image: canadaLocationImage
      , }
    , { title: "Australia"
      , image: australiaLocationImage
      , }
    , { title: "United Kingdom"
      , image: unitedKingdomLocationImage
      , }
    , ].map( ({title, image}, k) =>
      <li className="locationLinks-item" key={k} style={imgVar(image)}>
        <span className="locationLinks-title">{title}</span>
        <Link to="/location" className="locationLinks-link">
          see location
        </Link>
      </li> )
  } </ul>
</nav>
