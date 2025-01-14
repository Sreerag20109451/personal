
import { Outlet } from 'react-router'
import NavbarComponent from './components/Navbar'
import {useTheme} from "next-themes";

function App() {

  const  {theme} = useTheme()

  return (
    <main className={`${theme} text-foreground bg-background flex min-h-screen min-w-screen space flex-col`}>
        <NavbarComponent ></NavbarComponent>

      <section className='mx-auto my-auto w-1/2 '>
        <Outlet/>
      </section>

    </main>
  )
}

export default App
