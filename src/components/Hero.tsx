
import img from "../assets/profile.jpg"
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import {MdEmail} from "react-icons/md";
import {useState} from "react";
import {Alert} from "@nextui-org/react";


export default function Hero(){

    const [isVisible, setIsVisible] = useState(false)

    const copyEmail = () =>{

        const email = "chisreerag@gmail.com"
        navigator.clipboard.writeText(email)
        setIsVisible(true)

    }

    return (

       <div className="flex flex-col justify-center items-center space-y-8 opacity-0 translate-y-10 animate-load">
           {  isVisible &&  (
           <Alert
               color="success"
               description="Email Copied to Clipboard"
               isVisible={isVisible}
               variant="faded"
               onClose={() => setIsVisible(false)}
           /> )}

        <img src={img} alt="profile image" className="rounded-full max-w-96 max-h-96 transition ease-in-out hover:scale-110  hover:shadow-2xl" />
        <h1 className="text-4xl font-bold text-slate-950 dark:text-white">Hi, I am Sreerag</h1>
        <p className="text-lg text-slate-600 md:text-center">Empowering innovation through code, AI, and creativity—building impactful solutions that bridge technology and real-world challenges.</p>
           <div className="flex flex-row space-x-8">
               <div>

               </div>
               <div>

               </div>

           </div>
           <div className="flex flex-row space-x-8">
               <a href="https://www.linkedin.com/in/sreerag-s-212305189/"><FaLinkedin size="25"/></a>
               <a href="https://github.com/Sreerag20109451"><FaGithub size="25"/> </a>
               <a href="https://www.instagram.com/sed_schmosby/"><FaInstagram size="25"/></a>
               <button onClick={()=> copyEmail()}><MdEmail size="25"/></button>

           </div>
       </div>

    )
}