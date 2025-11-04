import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ResumePage from './pages/Resume'
import Contact from './pages/Contact'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  // Whenever darkMode changes, add/remove class on HTML root
  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-gray-400 transition-colors duration-300">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Routes>
          <Route path="/space" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
