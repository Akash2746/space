import React, {useState} from 'react'

export default function Contact(){
  const [msg, setMsg] = useState('')
  return (
    <section>
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-4">Email: <a href="mailto:adguruswamy@gmail.com" className="underline">adguruswamy@gmail.com</a></p>
      <form className="mt-6 max-w-xl" onSubmit={(e)=>{e.preventDefault(); alert('This demo form does not send emails — wire Formspree or EmailJS to enable.')}}>
        <label className="block">
          <span className="text-sm">Message</span>
          <textarea value={msg} onChange={e=>setMsg(e.target.value)} className="mt-1 w-full border rounded-md p-2 bg-white/60 dark:bg-black/80" rows="6"></textarea>
        </label>
        <button className="mt-3 px-4 py-2 bg-sky-600 text-white rounded-md">Send</button>
      </form>
      <div className="mt-6">
        <a href="https://github.com/Akash2746" target="_blank" rel="noreferrer" className="underline">GitHub</a>
        <span className="mx-2">·</span>
        <a href="https://www.linkedin.com/in/adguruswamy" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
      </div>
    </section>
  )
}
