import Layout from '../layout/primary'
import { ServicePageContent, PageContent } from './_service-page-content'

import './web-design.less'

import expressHeaderImage from '../assets/express-header-image.png'
import builderHeaderImage from '../assets/builder-header-image.png'
import transferHeaderImage from '../assets/transfer-header-image.png'
import blogrHeaderImage from '../assets/blogr-header-image.png'
import photonHeaderImage from '../assets/photon-header-image.png'
import campHeaderImage from '../assets/camp-header-image.png'

const content: PageContent =
  { heading: "Web Design"
  , currentPage: "webDesign"
  , headline: "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
  , portfolio:
    [ { heading: "Express"
      , image: expressHeaderImage
      , backgroundColor: "#2E3947"
      , summary: "A multi-carrier shipping website for ecommerce businesses"
      } 
    , { heading: "Transfer"
      , image: transferHeaderImage
      , backgroundColor: "#34B7A2"
      , summary: "Site for low-cost money transfers and sending money within seconds"
      }
    , { heading: "Photon"
      , image: photonHeaderImage
      , backgroundColor: "#3F2F83"
      , summary: "A state-of-the-art music player with high-resolution audio and DSP effects"
      }
    , { heading: "Builder"
      , image: builderHeaderImage
      , backgroundColor: "#40125A"
      , summary: "Connects users with local contractors based on their location"
      }
    , { heading: "Blogr"
      , image: blogrHeaderImage
      , backgroundColor: "#853A4D"
      , summary: "Blogr is a platform for creating an online blog or publication"
      }
    , { heading: "Camp"
      , image: campHeaderImage
      , backgroundColor: "#853A4D"
      , summary: "Get expert training in coding, data, design, and digital marketing"
      }
    ]
  }

const WebDesign = () =>
  <Layout pageName={content.currentPage}>
    <ServicePageContent {...{content}} />
  </Layout>

export default WebDesign
