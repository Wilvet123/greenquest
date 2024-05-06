import React, { useState } from 'react'
import img1 from '../assets/images/greenquestclub/Yaba/GREENQUEST2.jpg'
import img2 from '../assets/images/greenquestclub/Yaba/GREENQUEST11.jpg'
import img3 from '../assets/images/greenquestclub/Yaba/GREENQUEST24.jpg'
import img4 from '../assets/images/greenquestclub/Yaba/GREENQUEST25.jpg'
import img5 from '../assets/images/greenquestclub/Yaba/GREENQUEST32.jpg'
import img6 from '../assets/images/greenquestclub/Yaba/GREENQUEST39.jpg'
import img7 from '../assets/images/greenquestclub/Yaba/GREENQUEST46.jpg'
import img8 from '../assets/images/greenquestclub/Yaba/GREENQUEST52.jpg'
import img9 from '../assets/images/greenquestclub/Yaba/GREENQUEST55.jpg'
import img10 from '../assets/images/greenquestclub/Yaba/GREENQUEST60.jpg'
import img11 from '../assets/images/greenquestclub/Yaba/GREENQUEST62.jpg'
import s2s1 from '../assets/images/greenquestclub/street2schools/street2schools1.jpg'
import s2s2 from '../assets/images/greenquestclub/street2schools/street2schools2.jpg'
import s2s3 from '../assets/images/greenquestclub/street2schools/street2schools3.jpg'
import s2s4 from '../assets/images/greenquestclub/street2schools/street2schools4.jpg'
import s2s5 from '../assets/images/greenquestclub/street2schools/street2schools5.jpg'
import s2s6 from '../assets/images/greenquestclub/street2schools/street2schools6.jpg'
import s2s7 from '../assets/images/greenquestclub/street2schools/street2schools7.jpg'
import s2s9 from '../assets/images/greenquestclub/street2schools/street2schools9.jpg'
import s2s10 from '../assets/images/greenquestclub/street2schools/street2schools10.jpg'
import s2s11 from '../assets/images/greenquestclub/street2schools/street2schools11.jpg'
import s2s12 from '../assets/images/greenquestclub/street2schools/street2schools12.jpg'
import s2s13 from '../assets/images/greenquestclub/street2schools/street2schools13.jpg'
import s2s14 from '../assets/images/greenquestclub/street2schools/street2schools14.jpg'
import s2s15 from '../assets/images/greenquestclub/street2schools/street2schools15.jpg'
import s2s16 from '../assets/images/greenquestclub/street2schools/street2schools16.jpg'
import s2s17 from '../assets/images/greenquestclub/street2schools/street2schools17.jpg'



const gallery = [
  {
    title: 'Yaba',
    image: img1
  },
  {
    title: 'streeet2schools',
    image: s2s12
  }
]
const Image = ({title, id, display, details, gallery}) => {

  return (
    <div className='flex items-center mx-auto '>
     
      <div className='px-12' key={id}> 
      <div className='bg-gray-300 h-72 w-[250px] relative'>
      <img src={display} className='h-64 w-56 pb-8 object-cover center' 
      />
      <img src={gallery.img1} className='h-64 w-56 pb-8 object-cover center' 
      />
      <h1 className='absolute bottom-4 left-[45%] font-RussoOne'>{title}</h1>
      </div>
      </div>
    
     </div>
    
  )
}

export default Image 
