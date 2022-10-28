import Image from "next/image";
import { useState } from 'react';

const Project = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const openProjectHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex p-10 bg-slate-300 min-w-xl max-w-xl items-center flex-col rounded-xl shadow-zinc-600 shadow-lg"  >
            <Image className="rounded-md cursor-pointer" onClick={openProjectHandler} src={props.image} height={400} width={496} alt={props.title}/>
            {isOpen && <div className="project-info slideIn mt-10">
                <p>This is my awesome website that I built using the Nextjs React framework. It is complete frotend 
                    application using Redux to manage the global state of all the items added to cart throughout the application.
                    You can add an item to your cart from any of the three shop pages and open the cart on any page.
                </p>
                <div className="flex gap-10 items-center justify-center mt-10">
                <button className="bg-cyan-400 p-2 pr-4 pl-4 rounded-xl hover:bg-cyan-500 active:scale-95">Live Site</button>
                <Image src="/github.svg" width={40} height={40} />
                </div>
            </div>}
        </div>
    )
}

export default Project;