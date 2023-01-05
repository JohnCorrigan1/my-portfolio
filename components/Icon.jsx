import { motion } from "framer-motion"

const Icon = (props) => {

  const cardVariants = {
    offscreen: {
      x: 600
    },
    onscreen: {
      y: 0,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
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
      initial="offScreen"
      whileInView="onscreen"
    />
  );
};

export default Icon;