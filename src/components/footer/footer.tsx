import { Link } from '@tanstack/react-router'
import logoDark from '../../assets/logo-dark.png'
import facebookIcon from '../../assets/fb.svg'
import youtubeIcon from '../../assets/youtube.svg'
import twitterIcon from '../../assets/twitter.svg'
import pinterestIcon from '../../assets/pinterest.svg'
import instagramIcon from '../../assets/instagram.svg'
import { Route as aboutRoute } from '../../routes/cxdesign.about.lazy'
import { Route as locationRoute } from '../../routes/cxdesign.location.lazy'
import { Route as contactRoute } from '../../routes/cxdesign.contact.lazy'
import { Route as indexRoute } from '../../routes/cxdesign.index.lazy'

import './footer.less'

const footerLogoAlt = "This is a picture showing the company logo"
const facebookIconAlt = ""
const youtubeIconAlt = ""
const twitterIconAlt = ""
const pinterestIconAlt = ""
const instagramIconAlt = ""

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link className="footer-logo" to={indexRoute.options.id}>
          <img src={logoDark} alt={footerLogoAlt} loading="lazy" />
        </Link>
        <Link to={aboutRoute.options.id} className="footer-nav-link">Our Company</Link>
        <Link to={locationRoute.options.id} className="footer-nav-link">Locations</Link>
        <Link to={contactRoute.options.id} className="footer-nav-link">Contact</Link>
      </nav>
      <address className="footer-address footer-address--1">
        Designo Central Office<br/>
        3886 Wellington Street<br />
        Toronto, Ontario M9C 3J5<br />
      </address>
      <address className="footer-address footer-address--2">
        Contact Us (Central Office)<br/>
        P : <a href="tel:+12538638967" className="nav-link">+1 253-863-8967</a><br />
        M : <a href="mailto:contact@designo.co" className="nav-link">contact@designo.co</a><br />
      </address>
      <address className="footer-socialLinks footer-address--3">
        <a href="facebook.com" target="_blank">
          <img src={facebookIcon} alt={facebookIconAlt} loading="lazy" />
        </a>
        <a href="youtube.com" target="_blank">
          <img src={youtubeIcon} alt={youtubeIconAlt} loading="lazy" />
        </a>
        <a href="twitter.com" target="_blank">
          <img src={twitterIcon} alt={twitterIconAlt} loading="lazy" />
        </a>
        <a href="pinterest.com" target="_blank">
          <img src={pinterestIcon} alt={pinterestIconAlt} loading="lazy" />
        </a>
        <a href="instagram.com" target="_blank">
          <img src={instagramIcon} alt={instagramIconAlt} loading="lazy" />
        </a>
      </address>
    </footer>
  )
}
