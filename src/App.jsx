import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar.jsx'
import ScrollToTopButton from './Components/ScrollToTopButton.jsx'
import Home from './Components/Pages/Home.jsx'

import Footer from './Components/Footer.jsx'
import About from './Components/Pages/About.jsx'
import Prototying from './Components/Pages/Prototyping.jsx'
import Printing from './Components/Pages/Printing.jsx'
import Modeling from './Components/Pages/Modeling.jsx'
import Contact from './Components/Pages/Contact.jsx'
import Projects from './Components/Pages/Projects.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Navbar />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Prototyping" element={<Prototying />} />
        <Route path="/Printing" element={<Printing />} />
        <Route path="/Modeling" element={<Modeling />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
