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
  <section className="service-pages">
    <nav>
      <ul className="servicePagesList">
        <li className="servicePageItem">
          <Link className="servicePageLink" to="/app-design">
            app design
          </Link>
        </li>
        <li className="servicePageItem">
          <Link className="servicePageLink" to="/web-design">
            graphic design
          </Link>
        </li>
        <li className="servicePageItem">
          <Link className="servicePageLink" to="/graphic-design">
            graphic design
          </Link>
        </li>
      </ul>
    </nav>
  </section>
</>
