import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import ProjectCard from '../components/ProjectCard'
import ProjectNavbar from '../components/ProjectsNavbar'
import { projects as projectsData } from '../data'
import { Category } from '../type'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState('all')

  const handleerFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData)
      setActive(category)
      return
    }
    const newArray = projectsData.filter(project => project.category.includes(category))
    setProjects(newArray)
    setActive(category)
  }

  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" className="px-5 py-2 overflow-auto" style={{ minHeight: '65vh' }}>
      <ProjectNavbar handleerFilterCategory={handleerFilterCategory} active={active} />

      <motion.div variants={stagger} initial="initial" animate="animate" className="relative grid grid-cols-12 gap-4 my-3">
        {
          projects.map(project => {
            return (
              <motion.div variants={fadeInUp} className="col-span-12 p-2 sm:col-span-6 md:col-span-4 rounded-xl" key={project.name}>
                <ProjectCard project={project} />
              </motion.div>
            )
          })
        }
      </motion.div>
    </motion.div>




  )
}


export default Projects