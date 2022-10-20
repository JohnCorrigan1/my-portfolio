import Image from "next/image";

const Projects = () => {
    return (
        <div className="p-5 hover:p-32 bg-slate-100 cursor-pointer" >
            <Image src="/project1.png" height={300} width={300} alt="Project 1"/>
        </div>
    )
}

export default Projects;