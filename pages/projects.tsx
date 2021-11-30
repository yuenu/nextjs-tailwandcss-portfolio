import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

const Projects = () => {
  return (
    <div className="px-5 py-2 overflow-auto" style={{ minHeight: '65vh' }}>
      <nav>Navbar</nav>

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {
          projects.map(project => {
            return (
              <div className="col-span-12 p-2 sm:col-span-6 md:col-span-4 rounded-xl" key={project.name}>
                <ProjectCard project={project} />
              </div>
            )
          })
        }
      </div>
    </div>




  )
}


export default Projects