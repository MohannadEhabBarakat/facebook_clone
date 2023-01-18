import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Stories from '../components/Stories'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (      
    <div className='h-screen flex flex-col bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      {/* <Main /> */}
      <div className='flex flex-row justify-between w-screen overflow-x-hidden'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  )
}
