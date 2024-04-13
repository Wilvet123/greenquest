import {React, useState} from 'react'
import logo from "../assets/images/logo.png"
import {IoMenu, IoClose} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Button from './ui/Button'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
  return (
    <div>
        <nav>
            <div className=' '>
                <div className=' w-full fixed z-50 bg-gray-100  px-12'>
                    <div className='z-50 flex justify-between items-center w-full'>
                    <img src={logo} className='w-32 h-14 cursor-pointer'/>
                <IoMenu size={35}
                 onClick={()=>{setMenu(!menu)}}
                  className='block lg:hidden  cursor-pointer'/>
                
                <div className='hidden lg:flex text-gray-700  gap-4 justify-center items-center font-RussoOne '>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/community">Community</Link>
                </div>
                <div className='hidden lg:flex '>
                    <Button title="Log In"/>
                    <button className='px-5 py-2 shadow-lg inline ml-4 bg-gray-600 rounded-md text-white text-center'>Sign Up</button>
                </div>
                    </div>
                

            
                
                </div>  
                    {/* Menu bar */}
                    <div className={`${menu ? "block": "hidden"} z-40   bg-gray-100 text-black 
                absolute w-full h-screen  top-0 left-0 px-24 `}>
                <IoClose size={35} onClick={()=>{setMenu(!menu)}} className='block lg:hidden cursor-pointer absolute right-8 top-7'/>
                    <ul className='flex-col  flex text-black items-center justify-center '> 
                        <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/community">Community</Link></li>
                        </ul>
                        
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar