import React from 'react'
import { IoClose } from 'react-icons/io5'

const Popup1 = ({info, show, setShow}) => {
  return (
    <div>
         <div className='lg:mb-12 bg-gray-300  lg:w-[600px] w-[330px] lg:h-80 h-96  rounded-lg shadow-lg flex lg:flex-row flex-col  items-center
          justify-center  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
            <IoClose size={35} onClick={()=>{setShow(!show)}} className='block lg:hidden cursor-pointer absolute right-8 bottom-0 text-white'/>
            <div className='lg:w-[45%] w-full lg:h-full fixed top-0 left-0'>
              <img className='h-full object-cover w-full  rounded-t-lg' src='https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
            </div>
              <div className='lg:w-[55%] w-full h-full flex items-center flex-col lg:py-9 lg:px-9 px-6  pt-44 text-center'>
                <h1 className='lg:pb-5 font-bold lg:text-2xl text-xl'>{info.topic}</h1>
                <p className='text-sm'>{info.intro}</p>
              </div>
          </div>
         
    </div>
  )
}

export default Popup1