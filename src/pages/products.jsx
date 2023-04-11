import React from 'react'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Rfq } from '@/components/Rfq'
import { Testimonials } from '@/components/Testimonials'
//test
const products = () => {
  return (
    <>
      <Head>
        <title>Products - Your needs are fulfilled here.</title>
      </Head>
      <Header />
      <main>
        <Testimonials />
        <Rfq />
      </main>
      <Footer />
    </>
  )
}

export default products
