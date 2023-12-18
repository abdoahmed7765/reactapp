import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const formRef = useRef();
  const [form,setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading,setLoading] = useState(false)
  const handelchange = (e) => {
    const {name,value} = e.target
    setForm({...form, [name]: value})
  }
  const handelsubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_cb87tb5","template_a0hprle",{
      from_name: form.name,
      to_name: "Abdelrahman",
      from_email: form.email,
      to_email: "asmaahmd291@gmail.com",
      message: form.message
    },"TrDYAzyHMEfjNIO85").then(() => {
      setLoading(false)
      alert("Thank You. i will back to you as soon as possible")
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }).catch((err) => {
      setLoading(false)
      console.log(err);
      alert("some thing went wrong.")
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left","tween",0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form action="" ref={formRef} onSubmit={handelsubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex-col flex">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" 
              value={form.name}
              required
              name="name"
              onChange={handelchange}
              placeholder="what's your name?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg placeholder:text-secondary outline-none border-none font-medium "
            />
          </label>
          <label htmlFor="" className="flex-col flex">
            <span className="text-white font-medium mb-4">Your email</span>
            <input type="email" 
              value={form.email}
              required
              name="email"
              onChange={handelchange}
              placeholder="what's your email?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg placeholder:text-secondary outline-none border-none font-medium "
            />
          </label>
          <label htmlFor="" className="flex-col flex">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              value={form.message}
              required
              name="message"
              onChange={handelchange}
              placeholder="what do you want to say?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg placeholder:text-secondary outline-none border-none font-medium "
            ></textarea>
          </label>
          <button type="submit"
            className="bg-tertiary px-8 py-3 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
          >
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right","tween",0.2,1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}
export default SectionWrapper(Contact,"contact");