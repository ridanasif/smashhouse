import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import Ticker from "./components/Ticker"
import About from "./components/About"
import HookedBanner from "./components/HookedBanner"
import Footer from "./components/Footer"
import FindUs from "./components/FindUs"
import Menu from "./components/Menu"
import TopBanner from "./components/TopBanner"
import ImageTicker from "./components/ImageTicker"

import { Analytics } from "@vercel/analytics/react"

import { LanguageProvider } from "./context/LanguageContext"

function App() {

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50">
          <TopBanner />
          <Navbar />
        </header>
        <main>
          <Carousel />
          <Ticker />
          <About />
          <HookedBanner />
          <Menu />
          <FindUs />
          <ImageTicker />
        </main>
        <Footer />
        <Analytics />
      </div>
    </LanguageProvider>
  )
}

export default App
