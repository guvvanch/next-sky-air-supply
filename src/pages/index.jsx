import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import AboutText from '@/components/AboutText'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Sky Air Supply Ltd.- Your reliable business partner in aviation
        </title>
      </Head>
      <Header />
      <main>
        <Hero />
        <AboutText />
      </main>
      <Footer />
    </>
  )
}
