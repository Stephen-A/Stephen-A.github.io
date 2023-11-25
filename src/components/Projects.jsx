import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="projects">
        <div className='container'>
            <div className='project-content'>
                <p>Portfolio</p>
                <h3>Check out my projects! Each has their own individual idea!</h3>
                {/* div for all projects */}
                <div className="projects-display">
                    {/* first project */}
                    <div className="project-left-right">
                        <div className="project-image">
                            
                        </div>
                        <div className="project-description">

                        </div>
                    </div>
                    {/* second project */}
                    <div className="project-right-left">
                        <div className="project-image">
                            
                        </div>
                        <div className="project-description">
            
                        </div>
                    </div>
                    {/* third project */}
                    <div className="project-left-right">
                        <div className="project-image">
                            
                        </div>
                        <div className="project-description">

                        </div>
                    </div>
                    {/* fourth project */}
                    <div className="project-right-left">
                        <div className="project-image">
                            
                        </div>
                        <div className="project-description">
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects