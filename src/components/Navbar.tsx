import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import { useState } from "react";
import { FiAlignCenter } from "react-icons/fi";
import "../index.css"
import {ThemeToggler} from "./ThemeToggler.tsx";


export default function NavbarComponent() {

const [isOpen, setIsOpen] = useState(false)

const isOpenContent = () =>{

    setIsOpen(!isOpen)

}

const OpenContent = () =>{

    return (
        <Navbar className="md:hidden" >
        <NavbarContent className="sm:flex flex-col gap-4" justify="start">
        <NavbarItem>
          <a href="/education"  className="text-xl text-slate-500 font-bold">
            Education
          </a>
        </NavbarItem>
        <NavbarItem>
          <a  href="/experiences" className="text-xl text-slate-500 font-bold">
            Experience
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="/projects" className="text-xl text-slate-500 font-bold">
            Project
          </a>
        </NavbarItem>
         <NavbarItem>
          <a href="/about" className="text-xl text-slate-500 font-bold">
            About
          </a>
        </NavbarItem>
      </NavbarContent> 
        </Navbar>
    
    )
}



  return (
    <section>
    <Navbar shouldHideOnScroll>
        <NavbarBrand className="hidden md:block ">
            <a href="/"><p className="text-inherit text-3xl raleway-1">Sreerag Sathian</p></a>
        </NavbarBrand>
     <NavbarBrand className="md:hidden flex flex-col gap-y-2" >
        <FiAlignCenter onClick={isOpenContent}/> 
        {isOpen && <div className="absolute mt-8 left-0 w-full z-10">
  <OpenContent />
</div>
} 
    </NavbarBrand>
      <NavbarContent className="hidden sm:flex md:flex-row gap-4" justify="center">
        <NavbarItem>
          <a href="/education"  className="text-xl text-slate-500  font-mono  transition ease-in-out hover:scale-110 hover:text-slate-950 hover:shadow-2xl dark:hover:text-slate-300">
            Education
          </a>
        </NavbarItem>
        <NavbarItem>
          <a  href="/experiences" className="text-xl text-slate-500 font-mono  transition ease-in-out hover:scale-110 hover:text-slate-950 hover:shadow-2xl dark:hover:text-slate-300">
            Experiences
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="/projects" className="text-xl text-slate-500 font-mono  transition ease-in-out hover:scale-110 hover:text-slate-950 hover:shadow-2xl dark:hover:text-slate-300">
            Projects
          </a>
        </NavbarItem>
         <NavbarItem>
          <a href="/about" className="text-xl text-slate-500 font-mono  transition ease-in-out hover:scale-110 hover:text-slate-950 hover:shadow-2xl dark:hover:text-slate-300">
            About
          </a>
        </NavbarItem>
      </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem>
                <ThemeToggler/>
            </NavbarItem>
        </NavbarContent>
      
    </Navbar>
  
    </section>


  );
}
