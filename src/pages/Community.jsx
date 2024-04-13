import React from 'react'
import  IMAGES  from '../utils/images'
import { Image } from '../utils/Image'


const Community = () => {
  return (
    <div> 
  
  
       <h1 className='text-3xl py-12 text-bold text-center font-Bungee text-green-800'>Greenquest Clubs</h1>

    <Image/>
    
    <h1 className='text-3xl  py-12 text-bold text-center font-Bungee text-green-800'>News Update</h1>
       <div className='grid grid-cols-1 my-12 mx-12 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-7 '>
      <div className='h-72 w-72 bg-gray-100 rounded-md  '>
        <img src='https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          className='w-full'></img>
          <div>
            <h1>Greenquest Clubs</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid culpa, dolorum ipsa inventore libero accusamus?</p>
          </div>
        </div>
        <div className='h-72 w-72 bg-gray-100  '>
        <img src='https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          className='w-full'></img>
          <div>
            <h1>Greenquest Clubs</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid culpa, dolorum ipsa inventore libero accusamus?</p>
          </div>
        </div>
        <div className='h-72 w-72 bg-gray-100  '>
        <img src='https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          className='w-full'></img>
          <div>
            <h1>Greenquest Clubs</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid culpa, dolorum ipsa inventore libero accusamus?</p>
          </div>
        </div>
    </div>
   
    </div>
    
  )
}

export default Community