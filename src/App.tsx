
import { Outlet } from 'react-router'
import NavbarComponent from './components/Navbar'

function App() {


  return (
    <main className='flex h-screen w-screen space flex-col'>
      <NavbarComponent></NavbarComponent>
      <section className='mx-auto my-auto w-1/2 '>
        <Outlet/>
      </section>
    </main>
  )
}

export default App
