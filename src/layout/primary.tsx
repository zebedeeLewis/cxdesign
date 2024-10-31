import { Link } from '@tanstack/react-router'
import { PropsWithChildren } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './primary.less'

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="content">
        {props.children}

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
      </div>
      <Footer />
    </div>
  )
}
