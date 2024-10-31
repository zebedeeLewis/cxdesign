import { Link } from '@tanstack/react-router'
import logoDark from '../../assets/logo-dark.svg'
import facebookIcon from '../../assets/fb.svg'
import youtubeIcon from '../../assets/youtube.svg'
import twitterIcon from '../../assets/twitter.svg'
import pinterestIcon from '../../assets/pinterest.svg'
import instagramIcon from '../../assets/instagram.svg'

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
      <div className="footer-card">
        <h2>Let's talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how our
          expertise can help your business grow
        </p>
        <Link className="card-callToAction" to="/contact" >
          get in touch
        </Link>
      </div>
      <nav className="footerNav">
        <Link className="footer-logo" to="/">
          <img src={logoDark} alt={footerLogoAlt} loading="lazy" />
        </Link>
        <Link to="/about" className="footerNav-link">Our Company</Link>
        <Link to="/location" className="footerNav-link">Locations</Link>
        <Link to="/contact" className="footerNav-link">Contact</Link>
      </nav>
      <address>
        Designo Central Office<br/>
        3886 Wellington Street<br />
        Toronto, Ontario M9C 3J5<br />
      </address>
      <address>
        Contact Us (Central Office)<br/>
        P : <a href="tel:+12538638967" className="nav-link">+1 253-863-8967</a><br />
        M : <a href="mailto:contact@designo.co" className="nav-link">contact@designo.co</a><br />
      </address>
      <address className="footer-socialLinks">
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
