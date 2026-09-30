import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import MainContent from './components/MainContent/MainContent'
import CommonWords from './components/CommonWords/CommonWords'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MainContent />
        <CommonWords />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
