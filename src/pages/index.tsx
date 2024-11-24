import { CSSProperties } from 'react'
import { ServiceList } from '../components/service-list'
import { TraitsList } from '../components/traits-list'
import Layout from '../layout/primary'

import webDesignImage from "../assets/web-design-background.jpg"
import appDesignImage from "../assets/app-design-background.jpg"
import graphicDesignImage from "../assets/graphic-design-background.jpg"
import headerImage from "../assets/home-page-header-image.png"

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
        , pageAddress: "/web-design"
        , image: webDesignImage
        , pageTitle: "web design"
        , }
      , { pageName: "appDesign"
        , pageAddress: "/app-design"
        , image: appDesignImage
        , pageTitle: "app design"
        , }
      , { pageName: "graphicDesign"
        , pageAddress: "/graphic-design"
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
