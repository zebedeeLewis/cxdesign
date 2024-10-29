import { PropsWithChildren } from 'react'
import { Link } from '@tanstack/react-router'

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="page-wrapper">
      <nav>
        <div className="flex">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
      </nav>
      <div className="content">
        {props.children}
      </div>
      <footer>footer</footer>
    </div>
  )
}
