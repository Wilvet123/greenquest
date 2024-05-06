import React from 'react'
import Niko from '../assets/images/niko.png'
import {team} from '../data'
import bg4 from '../assets/images/bg4.jpg'
import Button from '../components/ui/Button'


const About = () => {
  return (
    <div>
      <div className=''>
      <div className='h-screen w-full  z-20 absolute text-white  bg-black/60 lg:px-7 gap-3 flex flex-col items-center justify-center'>
        <h1 className='font-bold text-4xl text-center lg:text-5xl md:text-5xl font-Bungee tracking-[30px]'>ABOUT US</h1>
        <p className='lg:px-64 px-8 text-center'></p>
       
      </div>
      <img src={bg4} className='h-screen object-cover w-full'/>
      </div>
     
      <div className='lg:px-32 md:px-16  px-9'>
      <h1 className='font-bold text-green-800 text-3xl text-center font-Bungee pt-12 pb-7'>Who We Are?</h1>
       <p className='text-center md:text-2xl lg:text-lg'>Greenquest utilizes gamification to drive advocacy and education on social 
        challenges like climate change to bring about social impact, thereby increasing engagement
        and increased learning and behavioural changes in users. 
       </p>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-16 lg:px-24 py-12'>
      <div className='border-[3px] text-center lg:text-start border-green-800 rounded-lg  lg:px-7 lg:py-9 md:px-7 md:py-9 px-5 py-7'>
      <h1 className='font-bold text-green-800 text-2xl md:text-3xl lg:text-2xl font-Bungee'>Vision</h1>
     <p className='md:text-2xl  lg:text-lg'>Leading social impact through advocacy lead games
       thereby creating a mindset shift of a new generation</p>
      </div>
    <div className='border-[3px] text-center lg:text-start border-green-800 rounded-lg lg:px-7 lg:py-9 md:px-7 md:py-9 px-5 py-7'>
    <h1 className='font-bold text-green-800 text-2xl md:text-3xl lg:text-2xl font-Bungee  ' >Mission</h1>
       <p className='md:text-2xl lg:text-lg'>To create a thriving ecosystem with zeal and intentionality
        through gamification for social impact.
       </p>
    </div>
     
      </div>

      
      <h1 className='text-3xl  py-12 text-bold text-center font-Bungee text-green-800'>THE TEAM</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center place-items-center m-auto '>
      {team.map((teams) => (
          
           <div className='bg-gray-100 relative h-72 w-52 rounded-xl shadow-xl my-8 '>
              <img src={teams.image}
              className='w-full h-full rounded-xl shadow-xl'></img>
              <div className='absolute bottom-0 rounded-b-xl left-0 right-0 bg-white px-5 pb-1 '>
                <h1 className='text-green-800 font-bold text-lg'>{teams.name}</h1>
                <p className='text-green-800 text-sm'>{teams.role}</p>
              </div>
              </div>
              
      ))}
      </div>
     </div>
       </div>
    
  )
}

export default About