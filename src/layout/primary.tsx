import { PropsWithChildren } from 'react'
import Navbar from '../components/navbar'
import './primary.less'

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="content">
        {props.children}
      </div>
      <footer>footer</footer>
    </div>
  )
}
