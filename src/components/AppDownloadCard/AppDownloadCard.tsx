import { STORE_BADGES } from '../../data/appStores'
import './AppDownloadCard.css'

function AppDownloadCard() {
  return (
    <section className="app-download-card">
      <h2 className="app-download-card__title">Download Our Mobile App!</h2>

      <div className="app-download-card__badges">
        {STORE_BADGES.map(({ caption, name, href, icon: Icon }) => (
          <a className="store-badge" href={href} key={name}>
            <Icon className="store-badge__icon" aria-hidden="true" />
            <span className="store-badge__text">
              <small>{caption}</small>
              <strong>{name}</strong>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default AppDownloadCard
