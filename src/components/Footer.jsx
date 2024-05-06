import React from 'react'
import {IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin, IoMegaphoneOutline} from 'react-icons/io5'
import logo from "../assets/images/logo.png"
import Subscribe from './form/Subscribe'
import { Link } from 'react-router-dom'
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaDiscord } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className='bg-gray-300 px-12 py-12'>
        <div className='flex flex-col lg:flex-row gap-5 justify-between items-center'>
        <div>
          <Link to='/'><img src={logo} className='w-32 h-14 cursor-pointer'/></Link>
          <p className='lg:pr-7 lg:pl-0 pt-3  md:text-xl text-base lg:text-base lg:text-start text-center'>GreenQuest is an exciting gaming<br></br> 
          application designed to enlighten<br></br> and empower players 
            on climate <br></br>change adaptation and environmental<br></br> protection.</p>
        </div>
        <ul className='flex  flex-shrink font-RussoOne text-lg items-center justify-center gap-4 py-5'>
          <Link to="/" className='hover:text-green-800 '>Home</Link>
          <Link to="/about" className='hover:text-green-800 '>About</Link>
          <Link to="/features" className='hover:text-green-800 '>Features</Link>
          <Link to="/community" className='hover:text-green-800 '>Community</Link>
        </ul>
        <div className='flex flex-col gap-5 items-center lg:items-start'>
        {/* <Subscribe/> */}
        <ul className='flex gap-4 md:gap-7 '>
            <li className='hover:scale-110 duration-200 hover:text-blue-600'><a href='https://www.twitter.com/GreenQuestGame' target="_blank"><IoLogoTwitter size={26}/></a></li>
            <li className='hover:scale-110 duration-200 hover:text-[#FD1D1D]'><a href='https://www.instagram.com/playgreenquest' target="_blank"><IoLogoInstagram size={26}/></a></li>
            <li className='hover:scale-110 duration-200 hover:text-blue-800'><a href='https://www.linkedin.com/company/greenquest/' target="_blank"><IoLogoLinkedin size={26}/></a></li>
            <li className='hover:scale-110 duration-200 hover:text-blue-700'><a href='https://discord.com/invite/34JGRh38F4?fbclid=PAAaZ9q4IcgbN5XsoiGXKXiVhUiHziu-gR8qQGIoAgLEkxh_sfsVwYtrVwAFo'><FaDiscord size={26}/></a></li>
        </ul> 
        <div className='flex flex-col items-center lg:items-start md:text-xl text-base'>
          <h1 className='pb-1 font-bold md:text-xl lg:text-base'>Quick Links</h1>
          <div className='flex gap-2 items-center cursor-pointer hover:text-green-800 hover:underline' ><FiPhoneCall  size={18} className=''/><a href="tel:+2348088752094" className="">+2348088752094</a></div>
          <div className='flex gap-2 items-center cursor-pointer hover:text-green-800 hover:underline' ><HiOutlineEnvelope size={18}/><a href=" agrohuskwares@gmail.com" className="href">agrohuskwares@gmail.com</a></div>
        </div>
        </div>
       
       
       
        </div>   
        
    </footer>
  )
}

export default Footer