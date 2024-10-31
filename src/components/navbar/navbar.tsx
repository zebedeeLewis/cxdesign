import {useState} from 'react'
import { Link } from '@tanstack/react-router'
import './navbar.less'
import logo from '../../assets/logo.svg'
import collapsedSymbol from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'

const navbarExpandedImageAlt
  = "A \"hamburger\" symbol that is displayed when the navbar is expanded and hidden otherwise"
const navbarCollapsedImageAlt
  = "An \"x\" symbol that is displayed when the navbar is collapsed and hidden otherwise"
const navbarLogoAlt = "This is a picture showing the company logo"

export default function Navbar() {
  const [toggled, setToggled] = useState(false)
  const toggle = ()=>setToggled(!toggled)

  return (
    <div className={`navbar navbar-${toggled?'toggled':''}`}>
      <nav className="navbar-header">
        <Link className="navbar-logo" to="/">
          <img src={logo} alt={navbarLogoAlt} loading="lazy" />
        </Link>
        <button className="navbar-toggler" onClick={toggle} >
          <img className="navbar-collapsedSymbol"
            src={collapsedSymbol}
            alt={navbarCollapsedImageAlt}
            loading="eager"
          />
          <img className="navbar-expandedSymbol"
            src={close}
            alt={navbarExpandedImageAlt}
            loading="eager"
          />
        </button>
      </nav>
      <div className="navbar-body">
        <nav className="navbar-body-inner">
          <Link to="/about" className="nav-link">Our Company</Link>
          <Link to="/location" className="nav-link">Locations</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </div>
  )
}
