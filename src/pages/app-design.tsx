import Layout from '../layout/primary'
import { ServicePageContent, PageContent } from './_service-page-content'

import './app-design.less'

import loopstudiosHeaderImage from '../assets/loopstudio-header-image.png'
import todoHeaderImage from '../assets/todo-header-image.png'
import faceitHeaderImage from '../assets/faceit-header-image.png'
import eyecamHeaderImage from '../assets/eyecam-header-image.png'
import airfilterHeaderImage from '../assets/airfilter-header-image.png'

const content: PageContent =
  { heading: "app design"
  , currentPage: "appDesign"
  , headline: "out mobile designs bring intuitive digital solutions to your customers right at their fingertips."
  , portfolio:
    [ { heading: "airfilter"
      , image: airfilterHeaderImage
      , backgroundColor: "#2E3947"
      , summary: "solving the problem of poor indoor air quality by filtering the air."
      } 
    , { heading: "eyecam"
      , image: eyecamHeaderImage
      , backgroundColor: "#34B7A2"
      , summary: "product that lets you edit your favorite photos and videos at any time"
      }
    , { heading: "faceit"
      , image: faceitHeaderImage
      , backgroundColor: "#3F2F83"
      , summary: "get to meet your favorite internet superstar with the faceit app"
      }
    , { heading: "todo"
      , image: todoHeaderImage
      , backgroundColor: "#40125A"
      , summary: "a todo app that features cloud sync with light and dark mode"
      }
    , { heading: "loopstudios"
      , image: loopstudiosHeaderImage
      , backgroundColor: "#853A4D"
      , summary: "a VR experience app made for loopstudios"
      }
    ]
  }

const AppDesign = () =>
  <Layout pageName={content.currentPage}>
    <ServicePageContent {...{content}} />
  </Layout>

export default AppDesign
