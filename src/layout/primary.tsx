import { PropsWithChildren } from 'react'

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="page-wrapper">
      <nav>navigation</nav>
      <div className="content">
        {props.children}
      </div>
      <footer>footer</footer>
    </div>
  )
}
