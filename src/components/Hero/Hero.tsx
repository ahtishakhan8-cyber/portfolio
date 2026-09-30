import { useState } from 'react'
import LanguageSelect from '../LanguageSelect/LanguageSelect'
import type { LanguageOption } from '../LanguageSelect/LanguageSelect'
import AdCard from '../AdCard/AdCard'
import rightArrowIcon from '../../assets/right-arrow-icon.svg'
import searchIcon from '../../assets/search-icon.svg'
import './Hero.css'

const LANGUAGES: LanguageOption[] = [
  { value: 'en', label: 'English' },
  { value: 'ur', label: 'Urdu' },
]

function Hero() {
  const [fromLanguage, setFromLanguage] = useState('en')
  const [toLanguage, setToLanguage] = useState('ur')

  return (
    <section className="hero" aria-label="Word translator">
      <div className="hero__inner">
        <div className="translate-bar" role="group" aria-label="Translation direction">
          <LanguageSelect
            label="Translate from"
            value={fromLanguage}
            options={LANGUAGES}
            onChange={setFromLanguage}
          />

          <img
            src={rightArrowIcon}
            className="translate-bar__arrow"
            alt=""
            aria-hidden="true"
          />

          <LanguageSelect
            label="Translate to"
            value={toLanguage}
            options={LANGUAGES}
            onChange={setToLanguage}
          />
        </div>

        {/* No search API in this task, so submitting must not reload the page. */}
        <form
          className="search-form"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="search-word" className="visually-hidden">
            Search a word
          </label>
          <input
            id="search-word"
            type="search"
            name="q"
            placeholder="Welcome"
            autoComplete="off"
          />
          <button type="submit" aria-label="Search">
            <img src={searchIcon} alt="" aria-hidden="true" />
          </button>
        </form>

        <AdCard src="/images/promo-1.png" className="hero-promo-card" />
      </div>
    </section>
  )
}

export default Hero
