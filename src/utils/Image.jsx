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



const gqClubImages = [{
  id: 1,
  img: img1
},
{
  id: 2,
  img: img2
},
{
  id: 3,
  img: img3
},
{
  id: 4,
  img: img4
},
{
  id: 5,
  img: img5
},
{
  id: 6,
  img: img6
},
{
  id: 7,
  img: img7
},
{
  id: 8,
  img: img8
},
{
  id: 9,
  img: img9
},
{
  id: 10,
  img: img10
},
{
  id: 11,
  img: img11
},]
export const Image = () => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)

  return (
    <div className='flex items-center mx-auto '>
     {/* { gqClubImages.map((item) =>(
      <div key={item.id} className=' px-12 gap-12 '>
        <img src={item.img} className='p-4 w-12 h-12'/>
      </div>
     ))} */}
    
     <div className='px-12 '> 
     <div className='bg-gray-300 h-72 w-[250px] relative'>
     <img src={img1} className='h-64 w-56 pb-8 object-cover center' 
     onClick={() => setShow1(!show1) }/>
     <h1 className='absolute bottom-4 left-[45%] font-RussoOne'>Yaba</h1>
     </div>
       {show1 ? <div className='grid grid-cols-3 gap-4'>
        <img src={img3} className='h-48 w-72 object-cover'/>
        <img src={img4} className='h-48 w-72 object-cover'/>
        <img src={img11} className='h-48 w-72 object-cover'/>
        <img src={img6} className='h-48 w-72 object-cover'/>
        <img src={img7} className='h-48 w-72 object-cover'/>
        <img src={img8} className='h-48 w-72 object-cover'/>
        <img src={img9} className='h-48 w-72 object-cover'/>
        <img src={img10} className='h-48 w-72 object-cover'/>
        <img src={img5} className='h-48 w-72 object-cover'/>
       </div> : <div></div>} 

       

     </div>
     <div className='bg-gray-300 h-72 w-[250px] relative'>
     <img src={s2s12} className='h-64 w-56 pb-8 object-cover center' 
     onClick={() => setShow2(!show2) }/>
     <h1 className='absolute bottom-4 left-[45%] font-RussoOne'>Street2Schools</h1>
     </div>
       {show2 ? <div className='grid grid-cols-3 gap-4'>
        <img src={s2s1} className='h-48 w-72 object-cover'/>
        <img src={s2s2} className='h-48 w-72 object-cover'/>
        <img src={s2s3} className='h-48 w-72 object-cover'/>
        <img src={s2s4} className='h-48 w-72 object-cover'/>
        <img src={s2s5} className='h-48 w-72 object-cover'/>
        <img src={s2s6} className='h-48 w-72 object-cover'/>
        <img src={s2s7} className='h-48 w-72 object-cover'/>
        <img src={s2s10} className='h-48 w-72 object-cover'/>
        <img src={s2s11} className='h-48 w-72 object-cover'/>
        <img src={s2s12} className='h-48 w-72 object-cover'/>
        <img src={s2s13} className='h-48 w-72 object-cover'/>
        <img src={s2s14} className='h-48 w-72 object-cover'/>
        <img src={s2s15} className='h-48 w-72 object-cover'/>
        <img src={s2s16} className='h-48 w-72 object-cover'/>
        <img src={s2s17} className='h-48 w-72 object-cover'/>

       </div> : <div></div>} 

       

     </div>
    
  )
}
