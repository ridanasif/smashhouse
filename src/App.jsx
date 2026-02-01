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

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <TopBanner />
      <Navbar />
      <Carousel />
      <Ticker />
      <About />
      <HookedBanner />
      <Menu />
      <FindUs />
      <ImageTicker />
      <Footer />
    </div>
  )
}

export default App
