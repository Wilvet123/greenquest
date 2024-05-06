import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import Community from './pages/Community'
import About from './pages/About'
import Footer from './components/Footer'
import Popup1 from './components/Popup1'
import NotFound from './pages/NotFound'
import Article1 from './pages/Article1'
import Ecogaming from './pages/Ecogaming'
import Giveaway from './pages/Giveaway'
function App() {

  return (
    <div className='overflow-hidden relative'>
    <Navbar/>
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='giveaway' element ={<Giveaway/>}/>
      </Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/community'>
        <Route index element={<Community/>}/>
        <Route path=':id' element={<Article1/>} />
        <Route path='eco-gaming' element ={<Ecogaming/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    
  <Footer/>
    </div>
  )
}

export default App
