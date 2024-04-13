import React from 'react'
import {IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin} from 'react-icons/io5'
import logo from "../assets/images/logo.png"
import Subscribe from './form/Subscribe'

const Footer = () => {
  return (
    <footer className='bg-gray-300 px-12 py-12'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
        <img src={logo} className='w-32 h-14 cursor-pointer'/>
        <ul className='flex flex-wrap flex-shrink font-RussoOne items-center justify-center gap-4'>
            <li><a>About</a></li>
            <li><a>News</a></li>
            <li><a>Support</a></li>
            <li><a>Community</a></li>
            <li><a>Account</a></li>
        </ul>
        <div className='flex flex-col gap-5'>
        <Subscribe/>
        <ul className='flex gap-4 justify-center items-center'>
            <li><a><IoLogoInstagram size={26}/></a></li>
            <li><a><IoLogoTwitter size={26}/></a></li>
            <li><a><IoLogoLinkedin size={26}/></a></li>
        </ul>
        </div>
       
       
       
        </div>   
        
    </footer>
  )
}

export default Footer