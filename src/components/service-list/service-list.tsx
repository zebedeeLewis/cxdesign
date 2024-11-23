import {FunctionComponent, CSSProperties} from 'react'
import { Link } from '@tanstack/react-router'
import './service-list.less'

interface BackgroundVariableCss extends CSSProperties {
  '--background-image'?: `url(${string})`;
}

export type Service
= { pageName: string
  , pageAddress: string
  , pageTitle: string
  , image: string
  , }
  
const bg = (s:string):BackgroundVariableCss => ({
  '--background-image': `url(${s})`
})

export const ServiceList:FunctionComponent<{services:Array<Service>}>
= ({services}) =>
  <nav>
    <ul className="servicePagesList">
      {services.map( ({pageName, pageAddress, pageTitle, image}, i) => 
        <li
          key={i}
          style={bg(image)}
          className={`servicePageItem servicePageItem-${pageName}`}
        >
          <Link className="servicePageLink" to={`/${pageAddress}`}>
            <div className="servicePageLink-pageTitle">{pageTitle}</div>
            <div className="servicePageLink-callToAction">view projects</div>
          </Link>
        </li>
      )}
    </ul>
  </nav>
