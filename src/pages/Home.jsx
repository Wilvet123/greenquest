import React, { useState } from 'react'
import Niko from '../assets/images/niko.png'
import bg1 from '../assets/images/Greenquest-bg1.png'
import Video from '../assets/images/Video.mp4'
import {TbPlayerPlayFilled} from 'react-icons/tb'
import Button from '../components/ui/Button'
import Popup1 from '../components/Popup1'

const Home = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(true)
  return (
    <div className=''>
      <div className='h-screen  flex justify-between px-7 items-center'>
    <div className='z-20 absolute bg-black/40 flex flex-col   justify-center text-center lg:text-left h-screen left-0 px-12 text-black shadow-xl'>
          <h1 className='font-bold lg:text-5xl text-4xl mb-5 font-Bungee  '>Welcome to Greenquest</h1>
          <p className='lg:pr-[500px] font-bold '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Eveniet quae maxime mollitia accusantium sint quidem minus minima molestiae facere enim?</p>
        </div>
     <video autoPlay loop muted  className='absolute top-12 left-0 right-0 object-cover h-screen w-full -z-20' >
          <source src={Video} type='video/mp4' />
        </video>
        
        
        <div className='z-30 lg:w-[600px] lg:h-[600px] h-[375px] w-[375px] top-[291px] -left-5 absolute lg:top-[52px]   lg:left-[720px] '>
          <img src={Niko} />
        </div>     
     </div>
        


          {/* Game trailer */}
          <section  className='bg-gray-100 md:px-10 lg:px-12'>
          <h1 className='text-3xl  py-12 text-bold text-center font-Bungee text-green-800'>Introduction</h1>
          <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-14 lg:px-20 px-10'>
            {/* Video */}
            <div>
              <div className='relative h-72 w-72 '>
                <img src='https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' 
                className='border-8 rounded-md border-white'/>
                <TbPlayerPlayFilled size={50} className='absolute text-white left-28 top-20' onClick={()=>{setVideoPlaying(!isVideoPlaying)}}/>
              </div>
              <video width={500}  autoplay controls className={`${isVideoPlaying ? "hidden":"block"}`}>
                <source src='' type='video/mp4'></source>
              </video>
            </div>
            {/* brief intro */}
            <div className='lg:pl-12 md:text-2xl lg:text-lg font-RussoOne lg:py-5 text-center'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos voluptates
               maxime nesciunt sit obcaecati error sint labore autem eius rerum atque velit saepe,
                debitis quas quam odio. Ex esse labore commodi dolores consequuntur voluptate ipsa 
                dolorum repellendus eaque facilis? Praesentium?
                <Button title="Download Here"/>
            </div>
          </div> 
         
          </section>

          {/* Game Update */}
          <div>
            <h1 className='text-3xl  py-12 text-bold text-center font-Bungee text-green-800'>Game Updates</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 px-12 pb-10'>
          <div className='bg-gray-100 relative h-60 w-80 shadow-md lg:shadow-xl '>
          <img src='https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          className='w-full h-full rounded-md shadow-xl'></img>
          <div className='absolute bottom-5 left-3'>
            <h1 className='text-white font-bold text-2xl'>New Weapon</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, illum.</p>
          </div>
         
        </div>
      
          <div className='bg-gray-100 relative h-60 w-80 '>
          <img src='https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          className='w-full h-full rounded-md shadow-xl'></img>
          <div className='absolute bottom-5 left-3'>
            <h1 className='text-white font-bold text-2xl'>New Weapon</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, illum.</p>
          </div>
          </div>
          <div className='bg-gray-100 relative h-60 w-80 '>
          <img src='https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          className='w-full h-full rounded-md shadow-xl'></img>
          <div className='absolute bottom-5 left-3'>
            <h1 className='text-white font-bold text-2xl'>New Weapon</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, illum.</p>
          </div>
        </div>
          </div>
          </div>
          <Popup1/>
         
    </div>
  )
}

export default Home