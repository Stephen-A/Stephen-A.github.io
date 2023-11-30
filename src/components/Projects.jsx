import React from 'react'
import CoffeComputer from '../assets/coffee_computer.jpg';

const Projects = () => {
  return (
    <section id="projects" className="projects">
        <div className='container'>
            <div className='project-content'>
                <p>Portfolio</p>
                <h3>Here&apos;s a few projects, check them out!</h3>
                {/* div for all projects */}
                <div className="projects-grid-display">
                    {/* first project */}
                    <div className="project pro__1 forward">
                        <div className="project-image">
                            <a href='/'>
                                <img src={CoffeComputer}></img>
                            </a>
                        </div>
                        <div className="project-description">
                            <h3>Shane's Card Shop Redesign</h3>
                            <p>A redesign of my local card game store's current website: https://www.shanescards.net/. I took some of their core components in mind with the new design</p>
                            <div className='tech-stack'>
                                <p>React</p>
                                <p>Tailwind CSS</p>  
                            </div>
                            <div className='project-links'>Placeholder for project links</div>
                        </div>
                    </div>
                    {/* second project */}
                    <div className="project pro__1 backward">
                        <div className="project-image">
                            <a href='/'>
                                <img src={CoffeComputer}></img>
                            </a>
                        </div>
                        <div className="project-description">
                            <h3>Placeholder title</h3>
                            <p>Placeholder description</p>
                            <div className='tech-stack'>
                                <p>React</p>
                                <p>Tailwind CSS</p>                            
                            </div>
                            <div className='project-links'>
                                Placeholder for project links
                            </div>
                        </div>
                    </div>
                    {/* third project */}
                    <div className="project pro__1 forward">
                        <div className="project-image">
                            <a href='/'>
                                <img src={CoffeComputer}></img>
                            </a>
                        </div>
                        <div className="project-description">
                            <h3>Placeholder title</h3>
                            <p>Placeholder description</p>
                            <div className='tech-stack'>
                                <p>React</p>
                                <p>Tailwind CSS</p>
                            </div>
                            <div className='project-links'>
                                Placeholder for project links
                            </div>
                        </div>
                    </div>
                    {/* fourth project */}
                    <div className="project pro__1 backward">
                        <div className="project-image">
                            <a href='/'>
                                <img src={CoffeComputer}></img>
                            </a>
                        </div>
                        <div className="project-description">
                            <h3>Placeholder text</h3>
                            <p>Placeholder description</p>
                            <div className='tech-stack'>
                                <p>React</p>
                                <p>Tailwind CSS</p>
                            </div>
                            <div className='project-links'>
                                Placeholder for project links
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects