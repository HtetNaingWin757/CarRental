import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Models from './Pages/Models'
import Team from './Pages/Team'
import Testimonial from './Pages/Testimonial'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className=' overflow-x-hidden'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/models' element={<Models/>}/>
        <Route path='/testimonials' element={<Testimonial/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App