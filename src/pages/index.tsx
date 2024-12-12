import { CSSProperties } from 'react'
import { ServiceList } from '../components/service-list'
import { TraitsList } from '../components/traits-list'
import Layout from '../layout/primary'

import webDesignImage from "../assets/web-design-background.jpg"
import appDesignImage from "../assets/app-design-background.jpg"
import graphicDesignImage from "../assets/graphic-design-background.jpg"
import headerImage from "../assets/home-page-header-image.png"

import { Route as appDesignRoute } from '../routes/cxdesign.app-design.lazy'
import { Route as webDesignRoute } from '../routes/cxdesign.web-design.lazy'
import { Route as graphicDesignRoute } from '../routes/cxdesign.graphic-design.lazy'

import './index.less'

interface MyCSS extends CSSProperties {
  '--image': `url(${string})`
}

const bgImageCssVar = (s:string):MyCSS => ({
  '--image': `url(${s})`,
})

const Index = () =>
<Layout pageName="home-page">
  <header className="homePageHeader" style={bgImageCssVar(headerImage)}>
    <h1 className="contentCard-heading">
      Award-winning custom designs and digital branding solutions
    </h1>
    <p className="contentCard-content">
      With over 10 years in the industry, we are experienced in
      creating fully responsive websites, app design, and engaging
      brand experiences. Find out more about our services.
    </p>
    <a href="" className="contentCard-cta">
      learn more
    </a>
  </header>
  <section className="servicePages">
    <ServiceList services={
      [ { pageName: "webDesign"
        , pageAddress: webDesignRoute.options.id
        , image: webDesignImage
        , pageTitle: "web design"
        , }
      , { pageName: "appDesign"
        , pageAddress: appDesignRoute.options.id
        , image: appDesignImage
        , pageTitle: "app design"
        , }
      , { pageName: "graphicDesign"
        , pageAddress: graphicDesignRoute.options.id
        , image: graphicDesignImage
        , pageTitle: "graphic design"
        , }
      , ]}
    />
  </section>
  <section className="companyTraits">
    <TraitsList />
  </section>
</Layout>

export default Index
