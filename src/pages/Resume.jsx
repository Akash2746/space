import React from 'react'

export default function ResumePage(){
  return (
    <section>
      <h2 className="text-2xl font-semibold">Resume</h2>
      <p className="mt-4">You can download or open the PDF below.</p>
      <div className="mt-6 border rounded overflow-hidden">
        <iframe src="/Resume.pdf" title="Resume" className="w-full h-[700px]"></iframe>
      </div>
      <a href="/Resume.pdf" download className="inline-block mt-4 px-4 py-2 border rounded-md">Download PDF</a>
    </section>
  )
}
