import { useState } from 'react'
import { gsap } from 'gsap/gsap-core'
import { CSSPlugin } from 'gsap'
import Navbar from './Components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import './App.css'

gsap.registerPlugin(CSSPlugin);

const pages = [Hero, About, Projects, Skills, Contact]

function App() {
  const [pageIndex, setPageIndex] = useState(0)
  const PageComponent = pages[pageIndex]

  const handleNext = () =>{
    gsap.to('.page', {
      x: '-100%',
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setPageIndex((prev) => (prev + 1) % pages.length)
        gsap.fromTo('.page', {x: '100%', opacity: 0}, {x: "0%", opacity: 1, duration: 0.5});
      }
    })
  }

   const handlePrev = () =>{
    gsap.to('.page', {
      x: '100%',
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setPageIndex((prev) => (prev - 1) % pages.length)
        gsap.fromTo('.page', {x: '-100%', opacity: 0}, {x: "0%", opacity: 1, duration: 0.5});
      }
    })
  }

  return (
    <div className='min-h-screen bg-black/95 text-gray font-cyber relative'>
      <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300ffe7' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
      <div
        className="absolute z-0 w-80 h-80 rounded-full blur-[100px] bg-primary/40 animate-pulse duration-1000"
        style={{ top: '10%', right: '10%' }}
      ></div>
      <div
        className="absolute z-0 w-80 h-80 rounded-full blur-[100px] bg-secondary/40 animate-pulse delay-1000 duration-500"
        style={{ bottom: '10%', left: '10%' }}
      ></div>
      <Navbar />
      <PageComponent />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
        <button onClick={handlePrev} className="px-4 py-2 bg-secondary font-semibold text-dark rounded transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgb(255, 0, 255, 0.5)] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50">Prev</button>
        <button onClick={handleNext} className="px-4 py-2 bg-secondary font-semibold text-dark rounded">Next</button>
      </div>
    </div>
  )
}

export default App
