import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Gallery from "./Pages/Gallery"
import About from "./Pages/About"
import Catering from "./Pages/Catering"
import Pastries from "./Pages/Pastries"
import Contact from "./Pages/Contact"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/pastries" element={<Pastries />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App