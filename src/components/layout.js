import * as React from 'react'
import { Link } from 'gatsby'
import * as layout from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layout.container}>
      <nav>
        <ul className={layout.navLinks}>
          <li className={layout.navLinkItem}>
            <Link to="/" className={layout.navLinkText}>
              Home
            </Link>
          </li>
          <li className={layout.navLinkItem}>
            <Link to="/about" className={layout.navLinkText}>
              About
            </Link>
          </li>
        <li className={layout.navLinkItem}>
          <Link to="/resources" className={layout.navLinkText}>
            Resources
          </Link>
        </li>
        </ul>
      </nav>
      <main>
        <h1 className={layout.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
