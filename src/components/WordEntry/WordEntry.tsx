import { SEARCHED_WORD, WORD_MEANINGS } from '../../data/word'
import './WordEntry.css'

function WordEntry() {
  return (
    <article className="word-entry">
      {/* The design shows no h1, but every page needs one for its outline. */}
      <h1 className="visually-hidden">Meanings of {SEARCHED_WORD}</h1>

      {WORD_MEANINGS.map(({ partOfSpeech, english, urdu }) => (
        <section className="word-meaning" key={partOfSpeech}>
          <h2 className="word-meaning__title">
            {partOfSpeech}: {SEARCHED_WORD}
          </h2>

          <div className="word-meaning__body">
            <p className="word-meaning__english">{english}</p>
            {/* dir="rtl" makes Urdu read right to left. */}
            <p className="word-meaning__urdu" lang="ur" dir="rtl">
              {urdu}
            </p>
          </div>
        </section>
      ))}
    </article>
  )
}

export default WordEntry
