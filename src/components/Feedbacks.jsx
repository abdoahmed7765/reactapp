import { testimonials } from "../constants"
import { SectionWrapper } from "../hoc"
import { styles } from "../style"
import { motion } from "framer-motion"
import { textVariant,fadeIn } from "../utils/motion"
const Feedbacks = () => {
  const Card = ({ testimonial,image,company,designation,name,index }) => (
    <motion.div
          variants={fadeIn("right","spring",0.5 * index,0.75)}
          className="sm:w-[280px] w-full p-[1px] rounded-[8px] shadow-card "
    >
      <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className={`relative bg-black-100 rounded-[8px] min-h-[320px] px-[35px] py-[25px] flex justify-evenly flex-col`}
          >
            <h1 className="text-5xl font-bold">''</h1>
            <p>{testimonial}</p>
            <div className="flex justify-between items-center ">
              <div>
                <h3><span className="text-blue-400 text-[18px] mr-1">@</span>{name}</h3>
              </div>
              <img src={image} alt="reviewimg" className="rounded-full w-[35px] h-[35px] " />
            </div>
          </div>
    </motion.div>
  )
  return (
    <div className={`bg-tertiary ${styles.padding}`}>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>WHAT OTHERS SAY.</p>
      <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>
      <div className={`flex items-center flex-wrap gap-10 ${styles.paddingY}`}>
        {testimonials.map((card,i) => (
          <Card key={i} index={i} {...card} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"")