import { FunctionComponent } from 'react'
import { Card, CardContent } from '../components/card'
import { ServiceList } from '../components/service-list'

import webDesignImage from "../assets/web-design-background.jpg"
import appDesignImage from "../assets/app-design-background.jpg"
import graphicDesignImage from "../assets/graphic-design-background.jpg"

import './_service-page-content.less'

export interface PageContent
  { heading: string
  , headline: string
  , portfolio: Array<CardContent>
  , currentPage: string
  }

export const ServicePageContent:FunctionComponent<{content:PageContent}>
= ({content: {portfolio, heading, headline, currentPage}}) => <>
  <header className="header">
    <h1>{heading}</h1>
    <p>{headline}</p>
  </header>
  <section className="portfolio">
    <ul className="portfolioList">
      {portfolio.map((content, i) =>
        <li key={i} className="portfolioList-item"><Card {...{content}} /></li>)}
    </ul>
  </section>
  <section className="servicePages">
    <ServiceList services={
      [ { pageName: "appDesign"
        , pageAddress: "/app-design"
        , image: appDesignImage
        , pageTitle: "app design"
        , }
      , { pageName: "webDesign"
        , pageAddress: "/web-design"
        , image: webDesignImage
        , pageTitle: "web design"
        , }
      , { pageName: "graphicDesign"
        , pageAddress: "/graphic-design"
        , image: graphicDesignImage
        , pageTitle: "graphic design"
        , }
      , ].filter(({pageName}) => pageName !== currentPage)
    }/>
  </section>
</>
