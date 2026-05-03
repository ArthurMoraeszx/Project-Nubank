import Navbar from "./components/navbar"
import Hero from "./components/hero"

export default function App() {
  return (
    <div>
        <div className="app-container">
          <Navbar/>
          <main>
            <Hero/>
          </main>
        </div>
    </div>
  )
}


