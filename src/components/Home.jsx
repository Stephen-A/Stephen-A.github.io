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
                        <h1>Front-End React Developer</h1>
                        <p>Howdy hey, I&apos;m Stephen Allen, a front-end developer driven by passion for transforming concepts into captivating digital experiences.</p>
                        <button>View Work 
                            <span>
                                <HiArrowNarrowRight className='ml-3'/>
                            </span>
                        </button>
                    </div>
                    <div className='hero-img'></div>
                </div>
                <div className='skills'>
                    <p>Tech Stack</p>
                    <div className='skill-icons'>
                        <ul className='skill-logos'>
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