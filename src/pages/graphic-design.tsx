import Layout from '../layout/primary'
import { ServicePageContent, PageContent } from './_service-page-content'

import './graphic-design.less'

import timBrownHeaderImage from '../assets/timBrown-header-image.png'
import boxedWaterHeaderImage from '../assets/boxedWater-header-image.png'
import scienceHeaderImage from '../assets/science-header-image.png'

const content: PageContent =
  { heading: "graphic design"
  , currentPage: "graphicDesign"
  , headline: "We deliver eye-catching branding materials that are tailored to meet your business objectives."
  , portfolio:
    [ { heading: "Tim Brown"
      , image: timBrownHeaderImage
      , backgroundColor: "#F8D67A"
      , summary: "A book cover designed for Tim Brown’s new release, ‘Change’"
      } 
    , { heading: "Boxed Water"
      , image: boxedWaterHeaderImage
      , backgroundColor: "#F8FCF8"
      , summary: "A simple packaging concept made for Boxed Water"
      }
    , { heading: "Science"
      , image: scienceHeaderImage
      , backgroundColor: "#F8FAF9"
      , summary: "A poster made in collaboration with the Federal Art Project"
      }
    ]
  }

const GraphicDesign = () =>
  <Layout pageName={content.currentPage}>
    <ServicePageContent {...{content}} />
  </Layout>

export default GraphicDesign
