import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import Community from './pages/Community'
import About from './pages/About'
import Footer from './components/Footer'
import Popup1 from './components/Popup1'
function App() {

  return (
    <div className='overflow-hidden relative'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/community' element={<Community/>}/>

    </Routes>
    
  <Footer/>
    </div>
  )
}

export default App
