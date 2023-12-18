import { BallCanvas } from "./canvas"
import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {technologies.map((x) => (
        <div key={x.name} className="w-28 h-28">
          <BallCanvas icon={x.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"")