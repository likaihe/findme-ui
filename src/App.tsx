import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { About } from './pages/About'
import { Layout } from './pages/Layout'
import { Dashboard } from './pages/Dashboard'
import { NotFound } from './pages/NotFound'
import { Jobs } from './pages/Jobs'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Jobs />} />
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
