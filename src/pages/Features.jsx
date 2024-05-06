import React from 'react'
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import nugwa from '../assets/images/features/Nugwa.png'
import {gqCharacters} from '../data'

 const Features = () => {
  
  return (
    <div className=' md:px-12 lg:px-24 pt-24 my-12 flex items-center justify-center flex-col gap-20'>
      
       {
        gqCharacters.map((character) => (
          <div key={character.id} className='lg:mb-12 bg-gray-300  lg:w-[550px] md:w-[440px] w-[260px] 
          lg:h-64 md:h-64  h-96  rounded-lg shadow-lg flex lg:flex-row md:flex-row flex-col  items-center
          justify-center '>
             <div className='lg:w-[45%] w-full h-1/2 lg:h-full md:h-full bg-black/40 lg:rounded-l-lg '>
               <img src={character.img} className='h-64 w-64'/>
            </div>
            <div className='lg:w-[55%] w-full h-full flex items-center flex-col lg:py-9 lg:px-9 px-6 
              text-center justify-center'>
               <h1 className='font-bold text-green-800 font-RussoOne'>{character.name}</h1>
                <p className=''>{character.details} </p>
              </div>
            </div>
        
        ))
       }
     

        

    </div>
  )
}

export default Features