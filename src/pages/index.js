import { Inter } from 'next/font/google'
import NewsSection from '../Components/NewsSection/NewsSection'
import Layout from '@/Components/Layout/Layout'
import HomeIndex from '@/Components/HomeIndex/HomeIndex'
import Disciplines from '@/Components/Disciplines/Disciplines'
import Section from '@/Components/Secciones/Section.jsx'
import { getDisciplineItem } from '@/Service/DisciplineItem'
import dynamic from 'next/dynamic';
import Inscripciones from '@/Components/inscripciones/Inscripciones'
import Cooperadora from '@/Components/cooperadora/Cooperadora'
import { Footer } from '@/Components/Footer/Footer'
import TestCalendarModal from '../Components/TestCalendarModal.client';



const inter = Inter({ subsets: ['latin'] })

export default function Home({ item }) {
  return (
    <>
      <Layout
        title='Esc. Tenica 32 "Gral. Jose de San Martin"'
        favicon='/logoet32.ico'
        page="home"
      ></Layout>
      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 10000 }}>
        <TestCalendarModal />
      </div>
      <HomeIndex />
      <NewsSection />
      <Disciplines
        props={item}
        showAs='allDisciplines' />
      <Inscripciones />
      <Section />
      <Cooperadora />
      <Footer />
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

