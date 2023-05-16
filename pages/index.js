import Head from 'next/head'

import Navbar from '@/components/Navbar'
import Social from '@/components/Social'
import HomePage from '@/components/HomePage'



export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main className='main'>
      
      <Navbar/>
      <div>
      <Social/>
      <HomePage/>
      </div>
     </main>
    </>
  )
}
