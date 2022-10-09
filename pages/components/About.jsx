import React from 'react'
import Image from 'next/image'
import Person from './../../public/person.png'
import Linkedln from './../../public/linkedln.svg'
import Gmail from './../../public/gmail.svg'
import Github from './../../public/github.png'
import Twitter from './../../public/twitter.svg'

export default function About() {
    return (
        <div className='flex justify-center'>
            <div className='flex  gap-10 w-2/3 justify-center bg-slate-100 p-5 shadow-lg drop-shadow-lg'>
                <Image src={Person} />
                <div className='flex flex-col'>
                    <p>I am currently focuses on learning all things web development. Outside of code I like to play video games, fish, and work at job epic gamer alert.</p>
                    <div className='flex gap-5 mt-auto justify-center'>
                        <Image className="cursor-pointer" src={Linkedln} height={40} width={40} />
                        <Image className="cursor-pointer" src={Github} height={40} width={40} />
                        <Image className="cursor-pointer" src={Gmail} height={40} width={40} />
                        <Image className='cursor-pointer' src={Twitter} height={40} width={40} />
                    </div>
                </div>
            </div>
        </div>
    )
}
