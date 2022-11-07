import * as React from 'react'
import { Link } from 'gatsby'
import * as layout from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layout.container}>
      <p className={layout.siteTitle}>
        PM Field Manual
      </p>
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
        
        {children}
      </main>
      <footer>
        <p>Made & maintained by <a href="https://andersun.com">Justin Andersun</a>.</p>
      </footer>
    </div>
  )
}

export default Layout
