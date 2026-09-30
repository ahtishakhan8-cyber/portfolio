import { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import './ScrollToTop.css'

// How far down the page the user must scroll before the button appears.
const SCROLL_OFFSET = 300

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > SCROLL_OFFSET)

    handleScroll()
    // passive: true tells the browser we never block scrolling, so it stays smooth.
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      className="scroll-to-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FaChevronUp aria-hidden="true" />
    </button>
  )
}

export default ScrollToTop
