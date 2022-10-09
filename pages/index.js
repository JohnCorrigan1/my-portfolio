import Head from 'next/head'
import Image from 'next/image'
import Nala from './../public/Nala.jpeg'
import About from './components/About'
import Header from './components/ui/Header'


export default function Home() {
  return (
    <div className='flex justify-center flex-col items-center gap-10'>
      <Header />
      <About />
      <h1 className='text-2xl text-rose-600 text-center mt-10'>Coming Soon to a Web Browser near you...</h1>

      <Image 
      src={Nala}
      alt="epic doggo"
      height={500}
      width={500} />
    </div>
  )
}
