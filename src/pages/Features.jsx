import React from 'react'
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import nugwa from '../assets/images/features/Nugwa.png'
import {gqCharacters} from '../data'

const Features = () => {
  
  return (
    <div className=' px-12'>
       {
        gqCharacters.map((character) => (
          <div key={character.id} className='flex justify-between items-center w-full h-64 gap-12'>
             <img src={character.img} className='h-64 w-64'/>
             <div className='px-32 text-center'>
                <h1 className='font-bold font-RussoOne'>{character.name}</h1>
                <p className=''>{character.details} </p>
             </div>
          
            </div>
        
        ))
       }
     

        

    </div>
  )
}

export default Features