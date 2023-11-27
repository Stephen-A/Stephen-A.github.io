import React from 'react'
import CoffeComputer from '../assets/coffee_computer.jpg';

const Projects = () => {
  return (
    <section id="projects" className="projects">
        <div className='container'>
            <div className='project-content'>
                <p>Portfolio</p>
                <h3>Here&apos;s a few projects, each with their own unique idea</h3>
                {/* div for all projects */}
                <div className="projects-grid-display">
                    {/* first project */}
                    <div className="project pro__1 project-left-right">
                        <div className="project-image">
                            <a href='/'>
                                <img src={CoffeComputer}></img>
                            </a>
                        </div>
                        <div className="project-description">
                            <h3>Placeholder text</h3>
                            <p>Placeholder description</p>
                            <div className='tech-stack'>
                                Placeholder for project tech stack
                            </div>
                            <div className='project-links'>
                                Placeholder for project links
                            </div>
                        </div>
                    </div>
                    {/* second project */}
                    <div className="project pro__1 project-right-left">
                        <div className="project-image">
                            <a href='/'>
                                <img src={CoffeComputer}></img>
                            </a>
                        </div>
                        <div className="project-description">
                            <h3>Placeholder title</h3>
                            <p>Placeholder description</p>
                            <div className='tech-stack'>
                                Placeholder for project tech stack
                            </div>
                            <div className='project-links'>
                                Placeholder for project links
                            </div>
                        </div>
                    </div>
                    {/* third project */}
                    <div className="project pro__1 project-left-right">
                        <div className="project-image">
                            <a href='/'>
                                <img src={CoffeComputer}></img>
                            </a>
                        </div>
                        <div className="project-description">
                            <h3>Placeholder title</h3>
                            <p>Placeholder description</p>
                            <div className='tech-stack'>
                                Placeholder for project tech stack
                            </div>
                            <div className='project-links'>
                                Placeholder for project links
                            </div>
                        </div>
                    </div>
                    {/* fourth project */}
                    <div className="project pro__1 project-right-left">
                        <div className="project-image">
                            <a href='/'>
                                <img src={CoffeComputer}></img>
                            </a>
                        </div>
                        <div className="project-description">
                            <h3>Placeholder text</h3>
                            <p>Placeholder description</p>
                            <div className='tech-stack'>
                                Placeholder for project tech stack
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