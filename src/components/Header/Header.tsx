import { useState } from 'react'
import { NAV_LINKS } from '../../data/navigation'
import './Header.css'

function Header() {
  // Only used on mobile, where the nav collapses into a drawer.
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <a href="#" className="site-header__logo">
          <img src="/images/urduban-logo.png" alt="Urduban" />
        </a>

        <nav
          id="primary-navigation"
          className={`site-nav ${isNavOpen ? 'site-nav--open' : ''}`}
          aria-label="Primary"
        >
          <ul className="site-nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={isNavOpen}
          aria-controls="primary-navigation"
          aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsNavOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
