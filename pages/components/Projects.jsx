import Image from "next/image";
import { useState } from 'react';

const Projects = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const openProjectHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex p-5 bg-slate-100 w-auto max-w-6xl items-center"  >
            <Image className="cursor-pointer" onClick={openProjectHandler} src="/project1.png" height={500} width={500} alt="Project 1"/>
            {isOpen && <div className="w-1/3 mr-auto ml-auto">
                <p>This is my awesome website that I built using the Nextjs React framework. It is complete frotend 
                    application using Redux to manage the global state of all the items added to cart throughout the application.
                    You can add an item to your cart from any of the three shop pages and open the cart on any page.
                </p>
                <div className="flex gap-10 items-center justify-center mt-10">
                <button className="bg-cyan-400 p-2 pr-4 pl-4 rounded-xl">Live Site</button>
                <Image src="/github.svg" width={40} height={40} />
                </div>
            </div>}
        </div>
    )
}

export default Projects;