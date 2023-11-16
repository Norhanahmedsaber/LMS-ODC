import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './input.css'
import Categories from './pages/categories/Categories.jsx'
import Section from './pages/sections/Sections.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Section />
  </React.StrictMode>,
)
