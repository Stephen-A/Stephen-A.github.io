import React from 'react'
import CoffeeComputer from '../assets/coffee_computer.jpg'

const About = () => {
  return (
    <section id='about' className='about'>
        {/* Container */}
        <div className='container'>
            <div className='about-content'>
                <div className='img-side'>
                    <img className='main-img' src={CoffeeComputer} ></img>
                </div>
                <div className='text-side'>
                    <h3>About Me</h3>
                    <p>As a junior front-end developer, I am enthusiastic about crafting seamless and visually appealing web solutions. 
                        Proficient in HTML, CSS, JavaScript, React, and Tailwind. I invite you to explore my portfolio, 
                        where each project reflects my dedication to creating engaging user interfaces and dynamic web experiences. 
                        Driven by a curiosity for emerging technologies, I constantly seek to expand my skills and embrace innovative approaches in web development.
                        Collaborative by nature, I thrive in team environments and relish the opportunity to work alongside fellow developers to bring projects to life.
                        </p>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default About