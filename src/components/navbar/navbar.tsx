import {useState} from 'react'
import { Link } from '@tanstack/react-router'
import './navbar.less'
import logo from '../../assets/logo.svg'
import hamburger from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'

export default function Navbar() {
  const [toggled, setToggled] = useState(false)
  const toggle = ()=>setToggled(!toggled)

  return (
    <div className={`navbar navbar-${toggled?'toggled':''}`}>
      <nav className="navbar-header">
        <Link to="/">
          <div className="image-wrapper navbar-logo">
            <img alt="logo" loading="lazy" src={logo} />
          </div>
        </Link>
        <button className="navbar-toggle" onClick={toggle} >
          <div className="image-wrapper">
            <img className="hamburger"
              alt="navbar-hamburger"
              loading="eager"
              src={hamburger}
            />
            <img className="close"
              alt="navbar-hamburger"
              loading="eager"
              src={close}
            />
          </div>
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
