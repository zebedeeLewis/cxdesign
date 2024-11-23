import {FunctionComponent, CSSProperties} from 'react'

import passionateImage from '../../assets/passionate-image.svg'
import resourcefulImage from '../../assets/resourceful-image.svg'
import friendlyImage from '../../assets/friendly-image.svg'

import './traits-list.less'

interface BackgroundVariableCss extends CSSProperties {
  '--image'?: `url(${string})`;
}

const imgVar = (s:string): BackgroundVariableCss => ({'--image': `url(${s})`})

export const TraitsList:FunctionComponent
= () => <>
  <ul className="traitsList"> {
    [ { title: "passionate"
      , summary: "Each project starts with an in-depth brand research "+
                 "to ensure we only create products that serve a "+
                 "purpose. We merge art, design, and technology into "+
                 "exciting new solutions."
      , image: passionateImage
      , }
    , { title: "resourceful"
      , summary: "Everything that we do has a strategic purpose. We "+
                 "use an agile approach in all of our projects and "+
                 "value customer collaboration. It guarantees superior "+
                 "results that fulfill our clients’ needs."
      , image: resourcefulImage
      , }
    , { title: "friendly"
      , summary: "We are a group of enthusiastic folks who know how to "+
                 "put people first. Our success depends on our "+
                 "customers, and we strive to give them the best "+
                 "experience a company can provide."
      , image: friendlyImage
      , }
    , ].map( ({title, summary, image}, k) =>
      <li className="traitItem" key={k} style={imgVar(image)}>
        <h3 className="traitItem-title">{title}</h3>
        <p className="traitItem-summary">{summary}</p>
      </li> )
  } </ul>
</>
