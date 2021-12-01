import type { GetServerSidePropsContext, NextPage } from 'next'
import { services } from '../data'
import { ServiceCard } from '../components'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import Head from 'next/head'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Web Developer | About | Josh Hsu</title>
      </Head>
      <motion.div variants={routeAnimation} initial="initial" animate="animate" className="flex flex-col flex-grow px-6 pt-1">
        <h5 className="my-3 text-base font-medium">
          I am currently pursuing B.Tech Degree(Final Year) in Computer Science
          Engineering from Academy of Technology. I have 3+ years of experience in
          Web Development and I have a Youtube Channel where I teach Full Stack
          Web Development
        </h5>
        <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
          <h6>What I Offer</h6>

          <motion.div className="grid gap-6 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate">
            {services.map(service => (
              <motion.div variants={fadeInUp} key={service.title} className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
                <ServiceCard service={service} />
              </motion.div>

            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Index

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

  const BASE_URL = process.env.VERCEL_URL
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data = await res.json()

  return {
    props: {
      BASE_URL: BASE_URL
    }
  }
}
