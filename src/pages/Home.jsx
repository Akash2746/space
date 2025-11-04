import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section>
      <div className="mt-12">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Akashdeep Guruswamy
        </h1>
        <p className="mt-6 text-lg max-w-2xl">
          Software Engineer — building secure cloud applications and ML tooling. 
          I craft data-driven tools and interactive visualizations for research teams.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="/Resume.pdf" download className="px-4 py-2 border rounded-md">Download Resume</a>
          <Link to="/projects" className="px-4 py-2 bg-sky-600 text-white rounded-md">View Projects</Link>
        </div>
      </div>

      <div className="mt-14 grid gap-8">
        <div className="p-6 border rounded-md">
          <h3 className="font-semibold">Featured — ML Model Visualizer</h3>
          <p className="mt-2">Interactive demo showing model metrics and fairness visualizations — built with React + Plotly.</p>
        </div>
        <div className="p-6 border rounded-md">
          <h3 className="font-semibold">Featured — Secure Cloud Dashboard</h3>
          <p className="mt-2">Prototype UI for a secure research dashboard with 2FA UX and dataset management.</p>
        </div>
      </div>
    </section>
  )
}
