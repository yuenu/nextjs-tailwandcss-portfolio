import React, { useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { IProject } from '../type'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animations'

type Props = {
  project: IProject,
  showDetail: number|null,
  setShowDetail:(id: number| null) => void
}

const ProjectCard: React.FC<Props> = ({ project, showDetail, setShowDetail }) => {
  const {
    id,
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    key_techs
  } = project


  return (
    <div>
      <Image src={image_path} alt={name} className="cursor-pointer" onClick={() => setShowDetail(id)} width={300} height={150} layout="responsive" />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id &&
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-8 md:grid-cols-2 gap-x-8 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp} className="border-4 border-gray-200 ">
              <Image src={image_path} alt={name} width={300} height={150} layout="responsive" />
            </motion.div>

            <div className="flex justify-center my-4 space-x-3">
              <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-100 dark:bg-dark-200">
                <AiFillGithub />
                <span>Github</span>
              </a>

              <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-100 dark:bg-dark-200">
                <AiFillProject />
                <span>Project</span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate" className="pr-5">
            <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {
                key_techs.map(tech => <span key={tech} className="px-2 py-1 my-1 bg-gray-200 rounded-lg dark:bg-dark-200">{tech}</span>)
              }
            </div>

            <button onClick={() => setShowDetail(null)} className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200">
              <MdClose size={30}></MdClose>
            </button>
          </motion.div>

        </div>
      }


    </div>
  )
}

export default ProjectCard
