import { languages, tools } from "../data"
import { Bar } from '../components'
import { motion } from "framer-motion"
import {fadeInUp, routeAnimation} from '../animations'

const Resume = () => {
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" className="px-6 py-2">
      {/* eduction & exp */}

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Science Engineering</h5>
            <p className="font-semibold">Academy of Technology(2017-2021)</p>
            <p className="py-3">
              I am currently pursuing B.tech in Computer Sciene Engineering from Academy of Technology
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Engineer Jr.</h5>
            <p className="font-semibold">Academy of Technology(2021-on)</p>
            <p className="py-3">I dont know why I am doing this job</p>
          </div>
        </motion.div>
      </div>

      {/* Languages & tool */}

      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div>
            <div className="my-3 text-base">
              <div className="my-2">
                {languages.map(language => <Bar key={language.name} data={language} />)}
              </div>
            </div>
          </div>

        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-3 text-base">
            <div className="my-2">
              {tools.map(tool => <Bar key={tool.name} data={tool} />)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume