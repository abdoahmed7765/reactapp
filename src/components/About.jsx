import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import { services } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
const About = () => {
  const ServiceCard = ({index,title,icon}) => {
    return (
      <Tilt className="sm:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right","spring",0.5 * index,0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt="icon" className="w-16 h-16 rounded-full object-contain"/>

            <h3 className="text-white text-[20px] text-center font-bold>{title}">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p className="mt-4 w-[65%] text-secondary text-[17px] max-w-3xl leading-[30px]" variants={fadeIn("","",0.1,1)}>
      Hello! My name is Abdul Rahman. I work as a freelancer as a front-end developer. I am a beginner front-end developer and this is my portfolio.
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service,index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About,"about")