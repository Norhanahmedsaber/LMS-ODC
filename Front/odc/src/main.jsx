import React from 'react'
import ReactDOM from 'react-dom/client'
import './input.css'
import Categories from './pages/categories/Categories.jsx'
import Section from './pages/sections/Sections.jsx'
import Error from './pages/Error.jsx'
import Courses from './pages/courses/Courses.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Categories/>,
    errorElement: <Error />,
  },
  {
    path: "/courses/:id",
    element: <Courses />,
    errorElement: <Error />,
  },
  {
    path: "/course/:id",
    element: <Section />,
    errorElement: <Error />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


        <RouterProvider router={router} />

  </React.StrictMode>,
)
