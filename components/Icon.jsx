import { motion } from "framer-motion"

const Icon = (props) => {

  const cardVariants = {
    offscreen: {
      x: -200,
    },
    onscreen: {
      x: 0,
      rotate: 360,
      
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 3
      }
    }
  };

  return (
    
    <motion.img
    variants={cardVariants}
      className="w-24"
      src={`https://skillicons.dev/icons?i=${props.icon}&perline=1`}
      height={50}
      width={50}
      alt="skill icons"
      whileHover={{ scale: 1.2 }}
      initial="offscreen"
      whileInView="onscreen"
    />
  );
};

export default Icon;