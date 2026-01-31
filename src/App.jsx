import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import Ticker from "./components/Ticker"
import About from "./components/About"
import HookedBanner from "./components/HookedBanner"
import Footer from "./components/Footer"
import FindUs from "./components/FindUs"
function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Carousel />
      <Ticker />
      <About />
      <div id="menu" />
      <HookedBanner />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App
