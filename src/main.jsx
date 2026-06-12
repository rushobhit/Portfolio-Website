import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import App from './App'
import Certificates from './pages/Certificates'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import './index.css'

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <App /> },
        { path: '/certificates', element: <Certificates /> },
        { path: '/projects', element: <Projects /> },
        { path: '/experience', element: <Experience /> },
      ],
    },
  ],
  { basename: '/Portfolio-Website/' }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)