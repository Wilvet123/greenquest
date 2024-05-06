import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Niko from '../assets/images/niko.png'
import bg1 from '../assets/images/Greenquest-bg1.png'
import Video from '../assets/images/Video.mp4'
import {TbPlayerPlayFilled} from 'react-icons/tb'
import Button from '../components/ui/Button'
import Popup1 from '../components/Popup1'
import { gameUpdate } from '../data'



const Home = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(true)
  const [show, setShow] = useState(false)
  const [popup, setPopup] = useState('')

  return (
    <div className=''>
      <div className='h-screen relative  flex justify-between px-7 items-center'>
        <div className='z-20 absolute top-0 bg-black/50 h-screen  shadow-xl left-0'>
        <div className=' flex flex-col justify-center text-center lg:text-left lg:mt-60 md:mt-72 mt-48   px-12 '>
          <h1 className='font-bold lg:text-5xl md:text-4xl text-3xl mb-2 font-Bungee text-white tracking-widest  '>Welcome to Greenquest</h1>
          <p className='lg:pr-[500px] font-bold text-lg lg:text-lg md:text-xl md:mt-4 text-white'>GreenQuest is an adventurous game crafted to immerse players in an engaging journey of sustainability and climate action.</p>
        </div>
        </div>
     <video autoPlay loop muted  className='absolute top-12 left-0 right-0 object-cover h-screen w-full -z-20' >
          <source src={Video} type='video/mp4' />
        </video>
        <div className='z-30 lg:w-[600px] lg:h-[600px] md:h-[400px] md:w-[400px]  h-[360px] w-[360px] bottom-0  absolute lg:top-[52px]   lg:left-[720px] left-1/2 -translate-x-1/2 lg:translate-x-0  '>
          <img src={Niko} className=' ' />
        </div>     
     </div>
        


          {/* Game trailer */}
          <section  className='bg-gray-100 md:px-10 lg:px-12'>
          <h1 className='text-3xl  py-12 text-bold text-center font-Bungee text-green-800'>Introduction</h1>
          <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-14 lg:px-20 px-10'>
            {/* Video */}
           
            {/* brief intro */}
            <div className='lg:pl-12 md:text-2xl text-base lg:text-lg font-RussoOne pb-7  text-center'>
              Niko, armed with a backpack and a zap weapon, steps into the streets of Lagos to tackle the impacts of climate 
              change. The air is thick with pollution, and the once vibrant city is now struggling under the weight of 
              plastic waste. Niko must save her community! <br></br>Join Niko on her adventure to save the planet. 
               <Link to='/about'><button className='text-white bg-green-800 px-4 py-2 mt-4 mx-auto rounded-md  flex items-center justify-center'>About Us</button></Link>
            </div>
          </div> 
          </section>



  {/* md:grid-cols-2 lg:grid-cols-3 */}
          {/* Game Update */}
          <div className='relative'>
            <h1 className='text-3xl py-12 text-bold text-center font-Bungee text-green-800'>GQ Updates</h1> 
            <div className='grid grid-cols-1 place-items-center  justify-center  gap-10 px-12 pb-10'
            onClick={() => { setShow(!show)}}>
          {
            gameUpdate.map((task) =>(
              <div className=''>
                <Link to={`${task.id}`}>
                <div className='relative bg-gray-100  h-60 w-80  ' onClick={() => {setPopup(task); setShow(!show)}}>
              <img src={task.image}
              className=' w-full h-full rounded-md shadow-xl'></img>
              <div className='absolute bottom-5 left-3'>
                <h1 className='text-white font-bold text-2xl'>{task.topic}</h1>
                <p className='text-white'>{task.intro}</p>
              </div>      
              </div>
                </Link>
              
              </div>
            ))  
          }
             {show ? <Popup1 info = {popup} setShow={setShow} show={show} /> : ''}
       {/* bg-opacity-30 backdrop-blur-sm */}
        <div className='fixed hidden inset-0 flex justify-center items-center '>
        </div>
          </div>
          </div>
          
        
         
         
    </div>
  )
}

export default Home