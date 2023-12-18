import { textVariant } from "../utils/motion"
import { motion } from "framer-motion"
import { styles } from "../style"
import { fadeIn } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { Tilt } from "react-tilt"
import { github } from "../assets"
const Works = () => {
  const ProjectCard = ({ name,description,tags,image,source_code_link,ProjectCard,index }) => {
    return (
      <Tilt className="sm:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right","spring",0.5 * index,0.75)}
          className="w-full p-[1px] rounded-[8px] shadow-card "
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="relative bg-tertiary rounded-[8px] min-h-[300px] "
          >
            <a href={source_code_link} className="">
              <img src={github} alt="githup" className="w-[25px] h-[25px] bg-amber-950 rounded-full absolute top-2 right-2 z-50" />
            </a>
            <img src={image} alt="img" className="w-full h-[160px] rounded-[8px]" />
            <div className="p-3">
              <h3 className="font-bold text-[20px]">{name}</h3>
              <p className="text-secondary my-[8px] text-[14px]">{description}</p>
              <div className="flex gap-[8px]">
                {tags.map((x,i) => (
                  <p key={i} className={`${x.color} text-sm`}>#{x.name}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Tilt>
    )
  }
  return (
    <div>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>MY WORK.</p>
      <h2 className={styles.sectionHeadText}>PROJECTS.</h2>
      </motion.div>
      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" variants={fadeIn("","",0.1,1)}>
        This is my works that I built during my learning period
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-20">
        {projects.map((project,index) => (
          <ProjectCard key={index} index={index} {...project}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Works,'')