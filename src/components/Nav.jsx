import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react' // optional icons (if using lucide-react)

const links = [
  { to: '/space', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav({ darkMode, setDarkMode }) {
  const loc = useLocation()

  return (
    <nav className="bg-white/60 dark:bg-black/80 backdrop-blur border-b dark:border-gray-800 sticky top-0 z-20">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
        {/* Site Title */}
          <Link to="/space" className="font-semibold text-lg">
            Akashdeep Guruswamy
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={
                'px-3 py-2 rounded-md ' +
                (loc.pathname === l.to
                  ? 'bg-gray-100 dark:bg-gray-900 font-medium'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800')
              }
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* 🌙 Toggle Button on Right Side */}
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            title="Toggle theme"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
      </div>
    </nav>
  )
}
