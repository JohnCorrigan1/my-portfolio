import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='flex justify-center flex-col items-center gap-10'>
      <h1 className='text-2xl text-rose-600 text-center mt-10'>Coming Soon...</h1>
      <Image 
      src="/../public/Nala.jpeg"
      alt="epic doggo"
      height={750}
      width={750} />
    </div>
  )
}
