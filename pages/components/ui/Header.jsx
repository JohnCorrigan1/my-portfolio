import React from 'react'
import Nala from './../../../public/Nala.jpeg'

export default function Header() {
  return (
    <div className='bg-rose-300 w-full p-5 flex justify-between'>
        <h1 className='sm:pl-1 sm:text-xl pl-10 text-2xl font-bold hover:underline cursor-pointer hover:-translate-y-1 duration-300'>John Corrigan</h1>
        <nav>
            <ul className='flex gap-10 pr-10 sm:pr-1 sm:gap-3 sm:text-md'>
                <li className='text-lg hover:font-semibold hover:underline cursor-pointer hover:-translate-y-1 duration-300'>Projects</li>
                <li className='text-lg hover:font-semibold hover:underline cursor-pointer hover:-translate-y-1 duration-300'>Contact</li>
            </ul>
        </nav>
    </div> 
  )
}
