import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import ProfilePicture from '../assets/profile_picture.jpg'

function Home() {
  return (
    <section id='home' className='hero'>
        <div className='container'>
            <div className='content'>
                <div className='hero-main'>
                    <div className='hero-text'>
                        <h1 className='max-w-[500px] text-[#2d2e32] text-[4rem] sm:text-[3.5rem] md:text-[3.5rem] mb-[2rem] mt-[2rem] font-[800] leading-[1]'>Front-End React Developer</h1>
                        <p className='font-[500] leading-[1.6] max-w-[500px]'>Howdy hey, I&apos;m Stephen Allen, a front-end developer driven by passion for transforming concepts into captivating digital experiences.</p>
                        <button className='group border-2 px-6 py-3 my-2 flex items-center border-black hover:bg-purple-900 hover:border-purple-900 hover:text-[#fff]'>View Work 
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3'/>
                            </span>
                        </button>
                    </div>
                    <div className='hero-img'></div>
                </div>
                <div className='skills'>
                        <p className='text-[1.2rem] left-2 border-r-2 border-purple-900 mr-3 pr-[2rem]'>Tech Stack</p>
                        <div className='flex place-items-center'>
                            <ul className='logos flex flex-wrap'>
                                <li>
                                    <img src="https://skillicons.dev/icons?i=html,css" alt="" />
                                </li>
                                <li>
                                    <img src="https://skillicons.dev/icons?i=javascript,react" alt="" />
                                </li>
                                <li>
                                    <img src="https://skillicons.dev/icons?i=tailwind,bootstrap" alt="" />
                                </li>
                                <li>
                                    <img src="https://skillicons.dev/icons?i=git,vscode" alt="" />   
                                </li>
                            </ul>
                        </div>
                </div>
                </div>
        </div>
    </section>
  )
}

export default Home