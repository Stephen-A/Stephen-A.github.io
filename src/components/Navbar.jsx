import React, {useState} from 'react';
import '@fontsource-variable/inter';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png'
const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav) 

  return (
    <nav className='fixed shadow-sm mt-0 z-50'>
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-black-300 shadow-lg bg-[#fff]'>
            <div>
                <img src={Logo} alt="Logo Image"/>
            </div>

            {/* Hamburger */}
                <ul className='hidden md:flex font-bold'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            
            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/> }
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center font-bold'}>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Projects</li>
                    <li className='py-6 text-4xl'>Contact</li>
                </ul>

            {/* Social icons */}
            <div className='hidden min-[920px]:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-white' 
                            href="/">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-white' 
                            href="/">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-white' 
                            href="/">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-white' 
                            href="/">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>

                </ul>

            </div>
        </div>
    </nav>  
  )
}

export default Navbar