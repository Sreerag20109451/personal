import { Button } from "@nextui-org/react"
import img from "../assets/profile.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Hero(){

    return (
   
       <div className="flex flex-col justify-center items-center space-y-8">
        <img src={img} alt="profile image" className="rounded-full max-w-96 max-h-96 transition ease-in-out hover:scale-110  hover:shadow-2xl" />
        <h1 className="text-4xl font-bold text-slate-950">Hi, I am Sreerag</h1>
        <p className="text-lg text-slate-600 md:text-center">Empowering innovation through code, AI, and creativity—building impactful solutions that bridge technology and real-world challenges.</p>
        <div className="flex flex-row space-x-8">
          <Button color="primary" variant="solid" size="lg" className="transition ease-in-out hover:scale-110 hover:bg-secondary hover:shadow-2xl"><FaLinkedin/> <a href="https://www.linkedin.com/in/sreerag-s-212305189/">View LinkedIn</a></Button>
          <a href="https://github.com/Sreerag20109451"><Button color="primary" variant="solid" size="lg" className="transition ease-in-out hover:scale-110 hover:bg-secondary hover:shadow-2xl"><FaGithub/> View Github</Button></a>

        </div>
       </div>

    )
}