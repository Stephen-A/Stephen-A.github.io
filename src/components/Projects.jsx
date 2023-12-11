import React from 'react'
import './Projects.css';
import CoffeComputer from '../assets/coffee_computer.jpg';
import shanes_logo from '../assets/shanes_logo.png';
import { FiExternalLink, FiGithub } from "react-icons/fi";

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
                    <div className="project all_projects forward">
                        <div className="project-image">
                            <a href='https://www.shanescards.net/'>
                                <img src={shanes_logo}></img>
                            </a>
                        </div>
                        <div className="project-description">
                            <h3>Shane's Cards Redesign</h3>
                            <p>A redesign of my local card game store's current website. I chose to design the new website with their current website's core components in mind.</p>
                            <div className='tech-stack'>
                                <p>React</p>
                                <p>Tailwind CSS</p>  
                            </div>
                            <div className='project-links'>
                                <a href=''>Code<FiGithub /></a>
                                <a href=''>Demo<FiExternalLink /></a>
                            </div>
                        </div>
                    </div>
                    {/* second project */}
                    <div className="project all_projects backward">
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
                                <a href=''>Code<FiGithub /></a>
                                <a href=''>Demo<FiExternalLink /></a>
                            </div>
                        </div>
                    </div>
                    {/* third project */}
                    <div className="project all_projects forward">
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
                                <a href=''>Code<FiGithub /></a>
                                <a href=''>Demo<FiExternalLink /></a>
                            </div>
                        </div>
                    </div>
                    {/* fourth project */}
                    <div className="project all_projects backward">
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
                                <a href=''>Code<FiGithub /></a>
                                <a href=''>Demo<FiExternalLink /></a>
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