import React from 'react'
import Niko from '../assets/images/niko.png'
import {team} from '../data'
import bg4 from '../assets/images/bg4.jpg'


const About = () => {
  return (
    <div>
      <div className=''>
      <div className='h-screen  z-20 absolute top-20 bg-black/30 lg:px-7 gap-3 flex flex-col items-center justify-center'>
        <h1 className='font-bold text-3xl'>Who We Are </h1>
        <p className='lg:px-64 px-8 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Distinctio nostrum porro aperiam beatae, suscipit numquam consectetur vel a officia vitae.</p>
        <button className='bg-green-800 text-gray-300 border-4 border-green-800 px-7 py-2 rounded-sm font-bold'>About Us</button>
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
      <div className='border-[3px] text-center lg:text-start border-green-800 rounded-lg  px-7 py-9 text-wrap '>
      <h1 className='font-bold text-green-800 text-2xl md:text-3xl lg:text-2xl font-Bungee'>Vision</h1>
     <p className='text-2xl  lg:text-lg'>Leading social impact through advocacy lead games
       thereby creating a mindset shift of a new generation</p>
      </div>
    <div className='border-[3px] text-center lg:text-start border-green-800 rounded-lg px-7 py-9 '>
    <h1 className='font-bold text-green-800 text-2xl md:text-3xl lg:text-2xl font-Bungee  ' >Mission</h1>
       <p className='text-2xl lg:text-lg'>To create a thriving ecosystem with zeal and intentionality
        through gamification for social impact.
       </p>
    </div>
     
      </div>

      
      <h1 className='text-3xl  py-12 text-bold text-center font-Bungee text-green-800'>THE TEAM</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center items-center m-auto '>
      {team.map((teams) => (
          
           <div className='bg-gray-100 relative h-72 w-56 rounded-xl shadow-xl my-8 '>
              <img src='https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              className='w-full h-full rounded-xl shadow-xl'></img>
              <div className='absolute bottom-5 left-3'>
                <h1 className='text-white font-bold text-2xl'>{teams.name}</h1>
                <p className='text-white'>{teams.role}</p>
              </div>
              </div>
              
      ))}
      </div>
     </div>
       </div>
    
  )
}

export default About