import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { Layout } from './layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ProjectInfo } from './ProjectInfo.tsx'

const router = createBrowserRouter([
  {
    path: 'my-portfolio',
    element: (
      <Layout navbarType="PRIMARY">
        <App />
      </Layout>
    ),
  },
  {
    path: 'my-portfolio/:project',
    element: (
      <Layout navbarType="SECONDARY">
        <ProjectInfo />,
      </Layout>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
