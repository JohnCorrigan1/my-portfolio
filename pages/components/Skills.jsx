import Image from "next/image"

const Skills = () => {
    return(
        <div className="w-full flex items-center flex-col">
            <h1 className="text-2xl font-bold">My Toolbelt</h1>
            <img className="w-2/3 max-w-5xl sm:w-full md:w-full lg:w-5/6 max-h-64 p-10" src="https://skillicons.dev/icons?i=js,ts,html,css,react,next,redux,tailwind,mysql,github,git,linux,mongodb,webpack&perline=7" alt="skill icons"/>
        </div>
    )
}

export default Skills;