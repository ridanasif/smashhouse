import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import Ticker from "./components/Ticker"
function App() {

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Navbar />
      <Carousel />
      <Ticker />
    </div>
  )
}

export default App
