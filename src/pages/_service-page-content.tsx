import { FunctionComponent } from 'react'
import { Link } from '@tanstack/react-router'
import { Card, CardContent } from '../components/card'
import './_service-page-content.less'

export interface PageContent
  { heading: string
  , headline: string
  , portfolio: Array<CardContent>
  }

export const ServicePageContent:FunctionComponent<{content:PageContent}>
= ({content: {portfolio, heading, headline}}) => <>
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
    <nav>
      <ul className="servicePagesList">
        <li className="servicePageItem servicePageItem-appDesign">
          <Link className="servicePageLink" to="/app-design">
            <div className="servicePageLink-pageName">app design</div>
            <div className="servicePageLink-callToAction">view projects</div>
          </Link>
        </li>
        <li className="servicePageItem servicePageItem-webDesign">
          <Link className="servicePageLink" to="/web-design">
            <div className="servicePageLink-pageName">web design</div>
            <div className="servicePageLink-callToAction">view projects</div>
          </Link>
        </li>
        <li className="servicePageItem servicePageItem-graphicDesign">
          <Link className="servicePageLink" to="/graphic-design">
            <div className="servicePageLink-pageName">graphic design</div>
            <div className="servicePageLink-callToAction">view projects</div>
          </Link>
        </li>
      </ul>
    </nav>
  </section>
</>
