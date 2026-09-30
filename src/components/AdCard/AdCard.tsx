import { useState } from 'react'
import crossIcon from '../../assets/cross-icon.svg'
import './AdCard.css'

type AdCardProps = {
  src: string
  className?: string
}

/* DOM class names and image paths avoid the word "ad": blockers hide any
   element matching it, which made the banner disappear in the browser. */
function AdCard({ src, className="" }: AdCardProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <aside className={`promo-card ${className}`}>
      <button
        type="button"
        className="promo-card__close"
        aria-label="Close this promotion"
        onClick={() => setIsVisible(false)}
      >
        <img src={crossIcon} alt="" aria-hidden="true" />
      </button>
      <img src={src} alt="Promotion" className="promo-card__image" />
    </aside>
  )
}

export default AdCard
