import React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Layout } from './pages/Layout'
import { Dashboard } from './pages/Dashboard'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='dashboard' element={<Dashboard />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
