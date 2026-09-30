import type { IconLink } from '../../data/footer'
import {
  FOOTER_APP_LINKS,
  FOOTER_INFO_LINKS,
  FOOTER_SITE_LINKS,
  SOCIAL_LINKS,
} from '../../data/footer'
import type { NavLink } from '../../data/navigation'
import './Footer.css'

// Two small helpers so the same list markup is not repeated three times below.
function LinkList({ links }: { links: NavLink[] }) {
  return (
    <ul className="footer-links">
      {links.map(({ label, href }) => (
        <li key={label}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  )
}

function IconList({ links, className }: { links: IconLink[]; className: string }) {
  return (
    <ul className={`icon-links ${className}`}>
      {links.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a href={href} aria-label={label}>
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <div className="site-footer__brand">
          <img
            src="/images/urduban-logo.png"
            alt="Urduban"
            className="site-footer__logo"
          />
          <p>&copy; 2018 Copyright: Urduban</p>
          <p>All Right Reserved.</p>
          <IconList links={SOCIAL_LINKS} className="social-links" />
        </div>

        <nav className="site-footer__column" aria-label="Footer">
          <LinkList links={FOOTER_SITE_LINKS} />
        </nav>

        <div className="site-footer__column">
          <nav aria-label="Company">
            <LinkList links={FOOTER_INFO_LINKS} />
          </nav>

          <h2 className="site-footer__heading">Download Our Mobile App:</h2>
          <IconList links={FOOTER_APP_LINKS} className="app-links" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
