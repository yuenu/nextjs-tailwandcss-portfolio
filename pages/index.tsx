import type { GetServerSidePropsContext, NextPage } from 'next'
import { services } from '../data'

const Home: NextPage = () => {
  console.log('CLIENT', services)
  return (
    <div>
      This is Home page
    </div>
  )
}

export default Home

// export const getServerSideProps = async (context: GetServerSidePropsContext)=> {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   return {
//     props: {
//       services: data.services
//     }
//   }
// }
