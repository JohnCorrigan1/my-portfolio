import React from 'react'
import Image from 'next/image'
import Person from './../../public/person.png'
import Linkedln from './../../public/linkedln.svg'
import Gmail from './../../public/gmail.svg'
import Github from './../../public/github.svg'
import Twitter from './../../public/twitter.svg'

export default function About() {
    return (
        <div className='flex justify-center'>
            <div className='flex  gap-10 w-2/3 justify-center bg-slate-100 p-5 shadow-lg drop-shadow-lg'>
                <Image src={Person} alt="Picture of me"/>
                <div className='flex flex-col'>
                    <p>I am currently focuses on learning all things web development. Outside of code I like to play video games, fish, and work at job epic gamer alert. This is not a picture of John Corrigan this was generated by ai</p>
                    <p>John Corrigan John Corrigan John Corrigan John Corrigan John Corrigan</p>
                    <div className='flex gap-5 mt-auto justify-center items-center'>
                        <a href="https://www.linkedin.com/in/john-corrigan322/" target="_blank"><Image className="cursor-pointer" src={Linkedln} height={40} width={40} alt="Linkeldn icon"/></a>
                        <a href="https://github.com/JohnCorrigan1" target="_blank"><Image className="cursor-pointer" src={Github} height={40} width={40} alt="Github icon"/></a>
                        <Image className="cursor-pointer" src={Gmail} height={40} width={40} alt="Gmail icon"/>
                        <Image className='cursor-pointer' src={Twitter} height={40} width={40} alt="Twitter icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}