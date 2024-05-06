import React from 'react'
import Image from '../utils/Image'
import { gqClubs , articles} from '../data'
import { Link } from 'react-router-dom'
import bg3 from '../assets/images/community-bg.jpg'


const Community = () => {
  return (
    <div> 
        <div className=''>
      <div className='h-screen  z-20 absolute w-full bg-black/60 lg:px-7 gap-3 flex flex-col items-center justify-center'>
      <h1 className='font-bold text-center text-3xl lg:text-5xl font-Bungee tracking-[20px] text-white'>OUR COMMUNITY</h1>
        
      </div>
      <img src={bg3} className='h-screen object-cover w-full'/>
      </div>
      
    <div className='lg:px-24 md:px-16  px-3 text-center'>
     {/* GQ clubs */}
       <h1 className='text-3xl pt-20 pb-5 text-bold text-center font-Bungee text-green-800'> gq Advocacy Programs</h1>
       <p className='px-12 md:text-xl lg:text-base'>Discover the transformative impact of the GreenQuest Climate Change Advocacy Program! 
       Over the past few months, we've empowered and educated over 500 children about the urgent need for climate
        action through immersive games and interactive learning experiences. But we didn't stop there. 
        In collaboration with dedicated NGOs focused on combating climate change, our young champions have 
        rolled up their sleeves and removed over a ton of plastic waste from local communities. 
        Dive into our website to learn more about our initiatives, our partners, and how you can join us in 
        creating a sustainable future for generations to come.</p>
       <div className='lg:gap-28 gap-12 grid grid-cols-1 my-12 mx-12 md:grid-cols-2 lg:grid-cols-4 justify-center place-items-center '>
       {
        gqClubs.map((article) => (
          <div key={article.id} className=' '>
            <Link to={`${article.id}`}>
              <div className='flex items-center px-6  '>
                <div className='px-12' key={article.id}> 
                  <div className='bg-gray-300 h-72 w-[250px] relative'>
                    <img src={article.img.img2} className='h-64 w-56 pb-8 object-cover center' 
                    />
                    <h1 className='absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-lg font-RussoOne'>{article.title}</h1>
                </div>
              </div>
   </div>  </Link>
          </div>
        ))
      }
       </div>
      


      {/* News Update */}
    <h1 className='text-3xl lg:px-24 md:px-16  px-9  pt-12 pb-5 text-bold text-center font-Bungee text-green-800'>GQ Blogs</h1>
    {/* md:grid-cols-2 lg:grid-cols-3 */}
    <div className='grid grid-cols-1 my-12 mx-12  justify-center place-items-center gap-12 '>
     
      {
        articles.map((article) => (
          <div key={article.id}>
            <Link to={`${article.id}`}>
            <div className='h-64 w-72 bg-gray-100 rounded-lg mb-10 '>
              <img src={article.img}
          className='w-full rounded-t-lg h-2/3'/>
            <div className='px-2 h-1/2 flex flex-col justify-center items-center pb-12'>
              <h1 className='font-bold font-Bungee '>{article.title}</h1>
              <p className='text-sm'>{article.key_details}</p>
            </div>
          </div>
            </Link>
          </div>
        ))
      }
    </div>
    </div>
    </div>
   
    
    
  )
}

export default Community