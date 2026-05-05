import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Carousel from "./components/carousel"
import Card from "./components/card"

export default function App() {
  return (
    <div>
        <div className="app-container">
          <Navbar/>
          <main>
            <Hero/>
            <Carousel/>
            <Card/>
          </main>
        </div>
    </div>
  )
}


