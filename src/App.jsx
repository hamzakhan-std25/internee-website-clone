import { useState } from 'react'
import './styles/global.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/Home'     
import Internship from './pages/Internship'
import GraduateProgram from './pages/GraduateProgram'
import StudentAmbassador from './pages/StudentAmbassador'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/graduateProgram" element={<GraduateProgram />} />
        <Route path="/studentAmbassador" element={<StudentAmbassador />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
