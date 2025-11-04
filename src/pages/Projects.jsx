import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'ML Model Visualizer',
    desc: 'Interactive dashboard to compare model runs, show fairness metrics and confusion matrices.',
    tech: ['React', 'Plotly', 'Python'],
  },
  {
    title: 'Secure Cloud Dashboard (Prototype)',
    desc: 'Mock secure dashboard that simulates 2FA login and dataset management for research workflows.',
    tech: ['React', 'Tailwind'],
  },
  {
    title: 'Mobile Offloading Simulator',
    desc: 'Visualization of distributed mobile offloading showing throughput gains.',
    tech: ['React', 'Canvas'],
  },
]

export default function Projects(){
  return (
    <section>
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid gap-6">
        {projects.map(p => (
          <article key={p.title} className="p-6 border rounded-md">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2">{p.desc}</p>
            <div className="mt-3 text-sm text-slate-600">Tech: {p.tech.join(' • ')}</div>
            <div className="mt-4">
              <button className="px-3 py-1 border rounded">Live demo</button>
              <a target="_blank" rel="noreferrer" href="https://github.com/Akash2746" className="ml-2 text-sm underline">Code</a>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-sm text-slate-500">Want interactive demos embedded here? I can wire small working PoCs for each project (React components + sample data).</p>
    </section>
  )
}
