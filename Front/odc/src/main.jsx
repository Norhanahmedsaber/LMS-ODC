import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './input.css'
import Categories from './pages/categories/Categories.jsx'
import Section from './pages/sections/Sections.jsx'
import Error from './pages/error.jsx'

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
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


        <RouterProvider router={router} />

  </React.StrictMode>,
)
