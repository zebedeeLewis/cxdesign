import { Link } from '@tanstack/react-router'
import { PropsWithChildren, FunctionComponent } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import oval from '../assets/Oval.png'
import './primary.less'

const Layout:FunctionComponent<PropsWithChildren<{pageName:string}>>
= ({children, pageName}) =>
  <div className={`page-wrapper ${pageName}`}>
    <Navbar />

    {children}

    <section className="finalCTA">
      <div className="footer-card">
        <h2>Let's talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and
          find out how our expertise can help your business grow
        </p>
        <Link className="card-callToAction" to="/contact" >
          get in touch
        </Link>
      </div>
    </section>
    <Footer />
  </div>

export default Layout
