import {FunctionComponent} from 'react'
import { LocationLinks } from '../components/location-links'
import {FlexiCard} from '../components/flexi-card'
import Layout from '../layout/primary'
import './contact.less'

const Contact:FunctionComponent = () =>
  <Layout pageName="contact-page">
    <FlexiCard
      as="header"
      className="flexiCard--header flexiCard--imageRight"
    >
      <h1 className="flexiCard-heading">Contact Us</h1>
      <p className="flexiCard-body">
        Ready to take it to the next level? Let’s talk about your
        project or idea and find out how we can help your business
        grow. If you are looking for unique digital experiences that’s
        relatable to your users, drop us a line.
      </p>
      <form id="contactForm" className="flexiCard-form">
        <label className="contactForm-inputLabel">
          Name
          <input
            className="contactForm-input"
            name="name"
            type="text"
          />
        </label>
        <label className="contactForm-inputLabel">
          Email Address
          <input
            className="contactForm-input"
            name="email"
            type="email"
          />
        </label>
        <label className="contactForm-inputLabel">
          Phone
          <input
            className="contactForm-input"
            name="phone"
            type="tel"
          />
        </label>
        <label className="contactForm-inputLabel">
          Your Message
          <textarea
            className="contactForm-input"
            name="phone"
            rows={6}
          />
        </label>
        <input className="contactForm-submit" type="submit" />
      </form>
    </FlexiCard>
    <LocationLinks />
  </Layout>

export default Contact
