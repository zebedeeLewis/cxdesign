import {useState } from 'react'
import { Link } from '@tanstack/react-router'
import './navbar.less'
import logo from '../../assets/logo.png'
import collapsedSymbol from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'
import { Route as aboutRoute } from '../../routes/cxdesign.about.lazy'
import { Route as locationRoute } from '../../routes/cxdesign.location.lazy'
import { Route as contactRoute } from '../../routes/cxdesign.contact.lazy'
import { Route as indexRoute } from '../../routes/cxdesign.index.lazy'

type navListState 
  = "Hidden"
  | "Transitioning"
  | "Toggled"

const navListExpandedImageAlt = "open navigation list"
const navListCollapsedImageAlt = "close navigation list"
const navListLogoAlt = "home"

export default function Navbar() {
  const [navListState, setNavListState] = useState<navListState>("Hidden")

  const navListTransitionDuration
    = Number(
      getComputedStyle(document.documentElement)
      .getPropertyValue('--navTransitionDuration'))

  const handleTogglerClick = ()=> {
    const prevState = navListState
    setNavListState("Transitioning")

    setTimeout(()=>{ setNavListState(prevState === "Hidden"?"Toggled":"Hidden") },
      navListTransitionDuration)
  }

  return (
    <nav className={`navbar navbar--navList${navListState}`}>
      <button className="navList-toggler" onClick={handleTogglerClick} >
        <img className="navList-collapsedSymbol"
          src={collapsedSymbol}
          alt={navListCollapsedImageAlt}
          loading="eager"
        />
        <img className="navList-expandedSymbol"
          src={close}
          alt={navListExpandedImageAlt}
          loading="eager"
        />
      </button>

      <ul className="navList">
        <li className="navList-item-logo">
          <Link className="navList-link-logo" to={indexRoute.options.id}>
            <img src={logo} alt={navListLogoAlt} loading="lazy" />
          </Link>
        </li>
        <li className="navList-item-first">
          <Link className="navList-link" to={aboutRoute.options.id}>
            Our Company
          </Link>
        </li>
        <li className="navList-item">
          <Link className="navList-link" to={locationRoute.options.id}>
            Locations
          </Link>
        </li>
        <li className="navList-item">
          <Link className="navList-link" to={contactRoute.options.id}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
