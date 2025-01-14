import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage.tsx'
import Education from "./pages/Education.tsx";
import Experiences from "./pages/Experiences.tsx";
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children:[
      {
        index: true,
        element: <HomePage/>
      },
        {
            path:"education",
            element: <Education/>
        },
        {
            path:"experiences",
            element: <Experiences/>
        },
        {
            path:"projects",
            element: <Projects/>
        },
        {
            path:"about",
            element: <About/>
        }
    ]

  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
            <RouterProvider router={router}/>
    </NextUIProvider>
  </StrictMode>,
)
