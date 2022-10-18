import Head from 'next/head'
import Navbar from '../components/NavBar'

export default function Home(){
  return (
    <div className="">
      <Head>
        <title>Bernardo Cusmanich | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <header>
        <Navbar />
      </header>

    </div>
  )
}