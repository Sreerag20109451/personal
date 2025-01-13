import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { useState } from "react";
import { FiAlignCenter } from "react-icons/fi";
import "../index.css"


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
          <Link href="#"  className="text-xl text-slate-500 font-bold">
            Education
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#" className="text-xl text-slate-500 font-bold">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-xl text-slate-500 font-bold">
            Project
          </Link>
        </NavbarItem>
         <NavbarItem>
          <Link href="#" className="text-xl text-slate-500 font-bold">
            About
          </Link>
        </NavbarItem>
      </NavbarContent> 
        </Navbar>
    
    )
}



  return (
    <section>
    <Navbar shouldHideOnScroll>
        <NavbarBrand className="hidden md:block ">
        <p className="text-inherit text-3xl raleway-1">Sreerag Sathian</p>
        </NavbarBrand>
     <NavbarBrand className="md:hidden flex flex-col gap-y-2" >
        <FiAlignCenter onClick={isOpenContent}/> 
        {isOpen && <div className="absolute mt-8 left-0 w-full z-10">
  <OpenContent />
</div>
} 
    </NavbarBrand>
      <NavbarContent className="hidden sm:flex md:flex-row gap-4" justify="end">
        <NavbarItem>
          <Link href="#"  className="text-xl text-slate-500  font-mono  transition ease-in-out hover:scale-110 hover:text-slate-950 hover:shadow-2xl">
            Education
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#" className="text-xl text-slate-500 font-mono  transition ease-in-out hover:scale-110 hover:text-slate-950 hover:shadow-2xl">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-xl text-slate-500 font-mono  transition ease-in-out hover:scale-110 hover:text-slate-950 hover:shadow-2xl">
            Project
          </Link>
        </NavbarItem>
         <NavbarItem>
          <Link href="#" className="text-xl text-slate-500 font-mono  transition ease-in-out hover:scale-110 hover:text-slate-950 hover:shadow-2xl">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      
    </Navbar>
  
    </section>


  );
}
