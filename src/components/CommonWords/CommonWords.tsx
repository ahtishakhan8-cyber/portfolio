import { useCallback, useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { COMMON_WORDS } from '../../data/word'
import crossIcon from '../../assets/cross-icon.svg'
import './CommonWords.css'

// Browsers report fractional scroll positions, so the ends are compared loosely.
const EDGE_TOLERANCE = 1

function CommonWords() {
  // Scroll position lives in the DOM, so we reach the list through a ref.
  const listRef = useRef<HTMLUListElement>(null)
  const [words, setWords] = useState(COMMON_WORDS)
  const [canScrollBack, setCanScrollBack] = useState(false)
  const [canScrollForward, setCanScrollForward] = useState(false)

  // Turns each arrow off once the list cannot scroll any further that way.
  const syncArrows = useCallback(() => {
    const list = listRef.current
    if (!list) {
      return
    }
    setCanScrollBack(list.scrollLeft > EDGE_TOLERANCE)
    setCanScrollForward(
      list.scrollLeft + list.clientWidth < list.scrollWidth - EDGE_TOLERANCE,
    )
  }, [])

  useEffect(() => {
    syncArrows()
    // Resizing changes how many cards fit, so the arrows are checked again.
    window.addEventListener('resize', syncArrows)

    return () => window.removeEventListener('resize', syncArrows)
  }, [syncArrows, words.length])

  const scroll = (direction: 1 | -1) => {
    const list = listRef.current
    if (!list) {
      return
    }

    // Distance between two cards = card width + gap, without hardcoding either.
    const [first, second] = list.children
    const step = second
      ? (second as HTMLElement).offsetLeft - (first as HTMLElement).offsetLeft
      : list.clientWidth

    list.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  const removeWord = (id: string) => {
    setWords((current) => current.filter((word) => word.id !== id))
  }

  if (words.length === 0) {
    return null
  }

  return (
    <section className="common-words container" aria-label="Most common words">
      <header className="common-words__header">
        <h2 className="common-words__title">Most Common Words:</h2>

        <div className="common-words__controls">
          <button
            type="button"
            aria-label="Previous words"
            onClick={() => scroll(-1)}
            disabled={!canScrollBack}
          >
            <FiChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next words"
            onClick={() => scroll(1)}
            disabled={!canScrollForward}
          >
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
      </header>

      <ul className="common-words__list" ref={listRef} onScroll={syncArrows}>
        {words.map(({ id, english, urdu }) => (
          <li className="word-card" key={id}>
            <button
              type="button"
              className="word-card__close"
              aria-label={`Remove ${english}`}
              onClick={() => removeWord(id)}
            >
              <img src={crossIcon} alt="" aria-hidden="true" />
            </button>

            <p className="word-card__english">{english}</p>
            <p className="word-card__urdu" lang="ur" dir="rtl">
              {urdu}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CommonWords
