import React from 'react'
import CoffeeComputer from '../assets/coffee_computer.jpg'

const About = () => {
  return (
    <section name='about'  id='about' className='about'>
        {/* Container */}
        <div className='container w-full h-screen text-[#2d2e32]'>
            
            <div className='flex flex-col justify-center items-center w-full h-96'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 text-left'>
                    <div>
                        <img src={CoffeeComputer} className='rounded-[1.7rem]'></img>
                    </div>
                    <div className='text-left pb-8'>
                        <h1 className='text-[1.7rem] font-bold inline border-b-4 border-purple-900'>About Me</h1>
                        <p className='text-[1.1rem]'>As a junior front-end developer enthusiastic about crafting seamless and visually appealing web solutions. 
                            Proficient in HTML, CSS, JavaScript, React, and Tailwind. I invite you to explore my portfolio, 
                            where each project reflects my dedication to creating engaging user interfaces and dynamic web experiences. 
                            Driven by a curiosity for emerging technologies, I constantly seek to expand my skills and embrace innovative approaches in web development. 
                            Join me on this coding journey as I contribute my part to the ever-evolving landscape of front-end development.</p>
                        </div>
                    
                </div>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div>

                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default About