import React from 'react';
import { useParams } from 'react-router-dom';
import { gqClubs } from '../data'
import img1 from '../assets/images/greenquestclub/Yaba/GREENQUEST2.jpg'



const Article1 = () => {
  const { id } = useParams();  // Extract the dynamic part of the URL
  // Fetch data based on the ID or get it from a local source
  // For demonstration, just displaying the ID
  return (
    <div>
      {
        gqClubs.filter(article => article.id == id).map((article)=>(
          <div className='flex flex-col items-center justify-center pt-20  '>
          <h1 className='font-bold text-3xl font-RussoOne text-green-800'>{article.title}</h1>
          <p className='text-center lg:px-20 px-9 pt-5'>{article.key_details}</p>
          <div className='grid lg:grid-cols-4 grid-cols-2 gap-9 px-9 py-20'>
          <img src={article.img.img1} className='h-64 w-56 pb-8 object-cover  '/>
          <img src={article.img.img2} className='h-64 w-56 pb-8 object-cover  '/>
          <img src={article.img.img3} className='h-64 w-56 pb-8 object-cover  '/>
          <img src={article.img.img4} className='h-64 w-56 pb-8 object-cover  '/>
          <img src={article.img.img5} className='h-64 w-56 pb-8 object-cover  '/>
          <img src={article.img.img6} className='h-64 w-56 pb-8 object-cover  '/>
          <img src={article.img.img7} className='h-64 w-56 pb-8 object-cover  '/>
          <img src={article.img.img8} className='h-64 w-56 pb-8 object-cover  '/>
          <img src={article.img.img9} className='h-64 w-56 pb-8 object-cover  '/>
          <img src={article.img.img10} className='h-64 w-56 pb-8 object-cover   '/>
          </div>
      </div>
        ))
      }
    </div>
  );
};

export default Article1;
