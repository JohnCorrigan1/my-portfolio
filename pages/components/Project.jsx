import Image from "next/image";
import { useState } from 'react';

const Project = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(true)

    const openProjectHandler = () => {
        if(!isOpen){
        setIsActive(true)
        setIsOpen(true)
        }
        else {
            setIsActive(false)
            setTimeout(() => {
                setIsOpen(false)
            }, 2000)
        }
    }

    return (
        <>
        <div className="projectImage flex p-10 bg-slate-200 min-w-xl max-w-xl items-center flex-col rounded-t-xl"  >
            <Image className="rounded-md cursor-pointer" onClick={openProjectHandler} src="/project1.png" height={400} width={496} alt={props.title}/>
        </div>
    {isOpen && <div className={`${isActive ? 'project-in' : 'project-out'} project-info p-10 rounded-b-xl bg-slate-300 min-w-xl max-w-xl items-center`}>
        <p>
            This is my awesome website that I built using the Nextjs React framework. It is complete frotend 
            application using Redux to manage the global state of all the items added to cart throughout the application.
            You can add an item to your cart from any of the three shop pages and open the cart on any page.
        </p>
        <div className="flex gap-10 items-center justify-center mt-10">
        <button className="bg-cyan-400 p-2 pr-4 pl-4 rounded-xl hover:bg-cyan-500 active:scale-95">Live Site</button>
        <Image src="/github.svg" width={40} height={40} />
        </div>
    </div>}
    </>
    )
}

export default Project;