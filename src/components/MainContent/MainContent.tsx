import WordEntry from '../WordEntry/WordEntry'
import Sidebar from '../Sidebar/Sidebar'
import './MainContent.css'

function MainContent() {
  return (
    <div className="main-content container">
      <WordEntry />
      <Sidebar />
    </div>
  )
}

export default MainContent
