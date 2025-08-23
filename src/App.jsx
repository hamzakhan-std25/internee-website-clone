import { useState } from 'react'
import './styles/global.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Internship from './pages/Internship/Internship'
import GraduateProgram from './pages/GraduateProgram/GraduateProgram'
import StudentAmbassador from './pages/StudentAmbassador/StudentAmbassador'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard/DashBoard'

function App() {
    const [isDarkMode, setDarkMode] = useState(false);
  

  return (
    <BrowserRouter>
      <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/graduateProgram" element={<GraduateProgram />} />
        <Route path="/studentAmbassador" element={<StudentAmbassador />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path='/DashBoard' element={ <DashBoard />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>


  )
}

export default App
