import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { getSession } from 'next-auth/react'
import Login from '../components/Login'
import { useSession, signIn, signOut } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  if (!session) return <Login />
  return (
    <>
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* <Main /> */}
    </>
  )
}

// export async function getServerSideProps(context) {
//   const session = await getSession

//   return {
//     props:{
//       session
//     }
//   }
// }
