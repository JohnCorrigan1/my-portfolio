import { motion } from "framer-motion"

const Icon = (props) => {

  const cardVariants = {
    offscreen: {
      x: -200,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: -360,
      transition: {
        type: "spring",
        bounce: 1,
        duration: 2
      }
    }
  };

  return (
    
    <motion.img
    variants={cardVariants}
      className="w-24 duration-200 ease-in-out"
      src={`https://skillicons.dev/icons?i=${props.icon}&perline=1`}
      height={50}
      width={50}
      alt="skill icons"
      whileHover = {{rotate: 360}}
      initial="offscreen"
      whileInView="onscreen"
    />
  );
};

export default Icon;