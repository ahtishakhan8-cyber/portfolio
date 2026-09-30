import { OTHER_WORDS } from '../../data/word'
import './OtherWordsCard.css'

function OtherWordsCard() {
  return (
    <section className="other-words">
      <h2 className="other-words__title">Other Words!</h2>

      <ul className="other-words__list">
        {OTHER_WORDS.map((word) => (
          <li key={word}>
            <a href="#">{word}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OtherWordsCard
