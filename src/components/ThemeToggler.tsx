// 'use client'; // uncomment this line if you're using Next.js App Directory Setup

// components/ThemeSwitcher.tsx
import {useTheme} from "@nextui-org/use-theme";
import {Button} from "@nextui-org/react"
import {MdDarkMode, MdOutlineLightMode} from "react-icons/md";

export const ThemeToggler = () => {
    const { theme, setTheme } = useTheme()


    const changeTheme = () =>{
        if(theme == "light") setTheme("dark")
        else setTheme("light")
    }

    return (
        <div>
            <Button variant="light" color="default" onPress={()=> changeTheme()}> {theme == "light" ? <MdDarkMode/> : <MdOutlineLightMode/>} </Button>
        </div>
    )
};