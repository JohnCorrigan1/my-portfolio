import Image from "next/image"
import Icon from "./Icon";
import { motion } from "framer-motion"

const Skills = () => {
    
    const cardVariants = {
        offscreen: {
         opacity: 0,
        },
        onscreen: {
          opacity: 1,
          scale: 1.2,
          transition: {
            type: "spring",
            bounce: 0.5,
            duration: 5,
           
          }
        }
      };
    
    return(
        <div className="w-full flex items-center flex-col gap-7" id="skills">
            <motion.h1 className="text-3xl font-bold dark:text-zinc-100"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            >My Toolbelt</motion.h1>
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