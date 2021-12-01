import React from 'react'
import { ISkill } from '../type'
import { motion } from "framer-motion"


interface Props {
  data: ISkill
}

const Bar: React.FC<Props> = ({ data: { name, level, Icon } }) => {
  const barWidth = `${level}%`

  const variants = {
    initial: {
      width: 0
    },
    animate: {
      width: barWidth,
      transition: {
        duration: 0,
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  }
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: barWidth }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  )
}

export default Bar
