import { Inter } from 'next/font/google'
import NewsSection from '../Components/NewsSection/NewsSection'
import Layout from '@/Components/Layout/Layout'
import HomeIndex from '@/Components/HomeIndex/HomeIndex'
import Disciplines from '@/Components/Disciplines/Disciplines'
import { getDisciplineItem } from '@/Service/DisciplineItem'



const inter = Inter({ subsets: ['latin'] })

export default function Home({ item }) {
  return (
    <>
      <Layout
      title='Esc. Tenica 32 "Gral. Jose de San Martin"'
      favicon='/logoet32.ico'
      page="home"
      ></Layout>
        <HomeIndex />
        <NewsSection />
        <Disciplines
          props={item}
          showAs='allDisciplines' />      
    </>
  )
}

export async function getStaticProps() {
  const res = await getDisciplineItem()
  return {
    props: {
      item: res
    }
  }
}

