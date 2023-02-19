import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import Locations from '@/components/Locations'
import dynamic from 'next/dynamic'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Let us find a solution to your concerns!</title>
      </Head>
      <Header />
      <main>
        <div className="mx-auto flex max-w-7xl flex-col px-4 sm:flex-row sm:px-8">
          <ContactForm />
          <Locations />
        </div>
      </main>
      <Footer />
    </>
  )
}
