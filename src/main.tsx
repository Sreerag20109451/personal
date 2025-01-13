import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children:[
      {
        index: true,
        element: <HomePage/>
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
