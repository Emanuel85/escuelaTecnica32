// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import NewsSection from '../Components/NewsSection/NewsSection'
import Layout from '@/Components/Layout/Layout'
import HomeIndex from '@/Components/HomeIndex/HomeIndex'
import Disciplines from '@/Components/Disciplines/Disciplines'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Layout></Layout>
    <HomeIndex/>
    <NewsSection/>
    <Disciplines/>
    </>
  )
}
