import React from 'react'
import fun2p1 from '../assets/images/giveaway/giveaway-main.jpg'
import fun2p2 from '../assets/images/giveaway/giveaway1.jpg'
import fun2p3 from '../assets/images/giveaway/giveaway2.jpg'

const Giveaway = () => {
  return (
    <div>  {/* Giveaway */}
    <section  className='bg-gray-100 md:px-10 lg:px-12 px-12'>
      <h1 className='font-bold text-green-800 text-3xl text-center font-Bungee pt-20 pb-7'>GQ Giveaway</h1>
      <div>
      
      <img src={fun2p2} className='  pb-8 object-cover mx-auto w-full'/>
      <h1 className='font-bold text-center text-3xl pb-3'>ITS GIVEAWAY TIMEEEE!!!</h1>
      <p className='font-RussoOne '>To participate you are to transform used plastic items into something new and fantastic💫
        This could be anything from planters and decorations to jewelry and art pieces. 
        The key is to showcase the versatility of plastic when upcycled creatively.<br></br><br></br>
        Submission Process: <br></br>
        ✨Participants must post a photo or short video (under 1 minute) of their upcycled plastic creation on Instagram and Twitter. <br></br>
        ✨The post must include a brief description of the project and tag and follow @playgreenquest <br></br>
        ✨Don’t forget to use the hashtag #PlasticToFantastic. <br></br>
        Deadline: 29th April, 2024. <br></br>
        #PlasticToFantastic #GreenQuest #explore #giveaway</p>  
        <div className='grid grid-cols-1 lg:grid-cols-2  place-items-center lg:px-28 py-5'>
          <img src={fun2p1} className='h-80 w-72 pb-8 object-cover'/>
          <img src={fun2p3} className='h-80 w-72 pb-8 object-cover'/>
        </div>
      </div>
    
    </section></div>
  )
}

export default Giveaway