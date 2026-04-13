import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './components/NotFoundPage'
import ProjectPage from './pages/ProjectPage'
import BlogPage from './pages/BlogPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/project",
        element: <ProjectPage />
      },
      {
        path: "/blog",
        element: <BlogPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      },
    ]
  },
]);


const App = () => {
  return <RouterProvider router={router} />
}

export default App