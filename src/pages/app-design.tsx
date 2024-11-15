import Layout from '../layout/primary'
import { ServicePageContent, PageContent } from './_service-page-content'

import './app-design.less'

import loopstudiosHeaderImage from '../assets/loopstudio-header-image.jpg'
import todoHeaderImage from '../assets/todo-header-image.jpg'
import faceitHeaderImage from '../assets/faceit-header-image.jpg'
import eyecamHeaderImage from '../assets/eyecam-header-image.jpg'
import airfilterHeaderImage from '../assets/airfilter-header-image.jpg'

const content: PageContent =
  { heading: "app design"
  , headline: "out mobile designs bring intuitive digital solutions to your customers right at their fingertips."
  , portfolio:
    [ { heading: "airfilter"
      , image: airfilterHeaderImage
      , backgroundColor: "red"
      , summary: "solving the problem of poor indoor air quality by filtering the air."
      } 
    , { heading: "eyecam"
      , image: eyecamHeaderImage
      , backgroundColor: "red"
      , summary: "product that lets you edit your favorite photos and videos at any time"
      }
    , { heading: "faceit"
      , image: faceitHeaderImage
      , backgroundColor: "red"
      , summary: "get to meet your favorite internet superstar with the faceit app"
      }
    , { heading: "todo"
      , image: todoHeaderImage
      , backgroundColor: "red"
      , summary: "a todo app that features cloud sync with light and dark mode"
      }
    , { heading: "loopstudios"
      , image: loopstudiosHeaderImage
      , backgroundColor: "red"
      , summary: "a VR experience app made for loopstudios"
      }
    ]
  }

const AppDesign = () =>
  <Layout pageName="app-design-page">
    <ServicePageContent {...{content}} />
  </Layout>

export default AppDesign
