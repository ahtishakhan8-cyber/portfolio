import AppDownloadCard from '../AppDownloadCard/AppDownloadCard'
import AdCard from '../AdCard/AdCard'
import OtherWordsCard from '../OtherWordsCard/OtherWordsCard'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="More from Urduban">
      <AppDownloadCard />
      <AdCard src="/images/promo-2.png" className="sidebar-promo-card" />
      <OtherWordsCard />
    </aside>
  )
}

export default Sidebar
