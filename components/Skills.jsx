import Image from "next/image"
import Icon from "./Icon";

const Skills = () => {
    return(
        <div className="w-full flex items-center flex-col gap-7" id="skills">
            <h1 className="text-2xl font-bold dark:text-zinc-100">My Toolbelt</h1>
            <div className="flex gap-3">
            <Icon icon="js"/>
            <Icon icon="ts"/>
            <Icon icon="react"/>
            <Icon icon="python"/>
            <Icon icon="html"/>
            <Icon icon="css"/>
            <Icon icon="redux"/>          
            </div>
            <div className="flex gap-3">
            <Icon icon="tailwind"/>
            <Icon icon="next"/>
            <Icon icon="mysql"/>
            <Icon icon="github"/>
            <Icon icon="git"/>
            <Icon icon="mongodb"/>
            <Icon icon="webpack"/>
            </div>
        </div>
    )
}

export default Skills;