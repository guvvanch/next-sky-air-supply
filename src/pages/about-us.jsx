import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import AboutText from '@/components/AboutText'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Get to know your partner.</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <AboutText />
      </main>
      <Footer />
    </>
  )
}
