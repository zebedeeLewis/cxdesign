import { Link } from '@tanstack/react-router'
import './navbar.less'
import logo from '../../assets/logo.svg'
import hamburger from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'

export default function Navbar() {
  return (
    <div className="navbar toggled">
      <nav className="navbar-header primary-container">
        <Link to="/">
          <div className="image-wrapper navbar-logo">
            <img alt="logo" loading="lazy" src={logo} />
          </div>
        </Link>
        <button className="navbar-toggle">
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
      <nav className="navbar-links primary-container">
        <Link to="/about" className="nav-link">Our Company</Link>
        <Link to="/location" className="nav-link">Locations</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </div>
  )
}
