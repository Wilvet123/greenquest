import React from 'react'

const Popup1 = () => {
  return (
    <div>
         <div className='mb-12 bg-gray-300 w-[650px] h-80 rounded-lg shadow-lg flex '>
            <div className='w-[45%] h-full'>
              <img className='h-full object-cover w-full rounded-l-lg' src='https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
            </div>
              <div className='w-[55%] h-full flex items-center flex-col py-9 px-9 text-center'>
                <h1 className='pb-5 font-bold text-2xl'>New Weapon</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Recusandae vitae, laboriosam amet esse eaque perferendis iste voluptatibus nulla.
                   Error reprehenderit eos fugiat in corporis dolore quia praesentium, magnam magni
                    impedit?</p>
              </div>
          </div>
    </div>
  )
}

export default Popup1