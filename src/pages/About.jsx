import React from 'react'
import resume from '../../Resume.pdf'

export default function About(){
  return (
    <section>
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className="mt-4">
      a Software Engineer specializing in secure cloud applications, machine learning tooling, and data visualization.
I’ve designed and built full-stack systems using React, Python, and AWS, delivering scalable and compliant platforms for research and clinical teams.
      </p>

      <p className="mt-4">
      At SecureGen Inc., I led end-to-end development of a cloud-based data platform for pharmaceutical research — introducing two-factor authentication, automated testing, and visualization tools that improved security and performance across the board.
Earlier, at Teledyne Lecroy, I helped modernize internal systems with Node.js, Docker, and Kubernetes, streamlining automation and logging infrastructure.
      </p>

      <p className="mt-4">
      I’m passionate about turning complex data and processes into clear, interactive, and secure software solutions — blending robust engineering with thoughtful design.
      </p>

      <h3 className="mt-6 font-semibold">Experience highlights</h3>
      <ul className="list-disc ml-6 mt-2">
        <li>Implemented two-factor authentication and real-time alerts reducing unauthorized access incidents by 40%.</li>
        <li>Developed Python package + UI for ML model analysis—reduced iteration time by 30%.</li>
        <li>Automated testing with Selenium to increase coverage and reduce bugs.</li>
      </ul>

      <a href="/Resume.pdf" download className="inline-block mt-6 px-4 py-2 border rounded-md">Download Resume</a>
    </section>
  )
}
