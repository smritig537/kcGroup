import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footers'

import Home from './pages/Home'
import About from './pages/About'
import Welcome from './pages/Welcome'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import VisionMission from './pages/Vission'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />                 {/* Now safe — inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}