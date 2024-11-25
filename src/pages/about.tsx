import Layout from '../layout/primary'
import {FlexiCard} from '../components/flexi-card'
import { LocationLinks } from '../components/location-links'

import heroImage from '../assets/about-page-hero.jpg'
import talentImage from '../assets/talent-card-image.jpg'
import realDealImage from '../assets/real-deal-card-image.jpg'

import './about.less'

const About = () =>
  <Layout pageName="about-page">
    <FlexiCard
      as="header"
      image={heroImage}
      className="flexiCard--header flexiCard--imageRight"
    >
      <h1 className="flexiCard-heading">About Us</h1>
      <p className="flexiCard-body">
        Founded in 2010, we are a creative agency that produces lasting
        results for our clients. We’ve partnered with many startups,
        corporations, and nonprofits alike to craft designs that make
        real impact. We’re always looking forward to creating brands,
        products, and digital experiences that connect with our clients’
        audiences.
      </p>
    </FlexiCard>
    <FlexiCard
      as="section"
      image={talentImage}
      className="flexiCard--secondary"
    >
      <h1 className="flexiCard-heading">World-class talent</h1>
      <p className="flexiCard-body">
        We are a crew of strategists, problem-solvers, and
        technologists. Every design is thoughtfully crafted from concept
        to launch, ensuring success in its given market. We are
        constantly updating our skills in a myriad of platforms.
      <span className="flexiCard-verticalSpace" ></span>
        Our team is multi-disciplinary and we are not merely interested
        in form — content and meaning are just as important. We give
        great importance to craftsmanship, service, and prompt delivery.
        Clients have always been impressed with our high-quality
        outcomes that encapsulates their brand’s story and mission.
      </p>
    </FlexiCard>
    <section className="companyTraits">
      <LocationLinks />
    </section>
    <FlexiCard
      as="section"
      image={realDealImage}
      className="flexiCard--secondary flexiCard--imageRight"
    >
      <h1 className="flexiCard-heading">The real deal</h1>
      <p className="flexiCard-body">
        As strategic partners in our clients’ businesses, we are ready
        to take on any challenge as our own. Solving real problems
        require empathy and collaboration, and we strive to bring a
        fresh perspective to every opportunity. We make design and
        technology more accessible and give you tools to measure success.
        <span className="flexiCard-verticalSpace" ></span>
        We are visual storytellers in appealing and captivating ways. By
        combining business and marketing strategies, we inspire
        audiences to take action and drive real results.
      </p>
    </FlexiCard>
  </Layout>

export default About
