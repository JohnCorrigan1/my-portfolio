import Image from "next/image"

const Skills = () => {
    return(
        <div className="w-full flex items-center flex-col">
            <h1 className="text-2xl font-bold">My Toolbelt</h1>
            <img className="w-2/3 p-10" src="https://skillicons.dev/icons?i=js,ts,html,css,react,next,redux,tailwind,mysql,github,git,linux,mongodb,webpack,firebase,nodejs&perline=8" alt="skill icons"/>
        </div>
    )
}

export default Skills;