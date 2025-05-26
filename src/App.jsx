import { useState, useEffect } from 'react'
import React, { Suspense } from 'react'
import { gsap } from 'gsap/gsap-core'
import { CSSPlugin } from 'gsap'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Footer from './Components/Footer'
import Loading from './Components/Loading'
import './App.css'

// Lazy load page components
const Hero = React.lazy(() => import('./pages/Hero'))
const About = React.lazy(() => import('./pages/About'))
const Projects = React.lazy(() => import('./pages/Projects'))
const Contact = React.lazy(() => import('./pages/Contact'))

gsap.registerPlugin(CSSPlugin);

const pages = [Hero, About, Projects, Contact]
const pageNames = ['Home', 'About', 'Projects', 'Contact']

function App() {
  const [pageIndex, setPageIndex] = useState(0)
  const PageComponent = pages[pageIndex]

  useEffect(() => {
    const handleNavigateToPage = (event) => {
      const newIndex = event.detail;
      if (newIndex >= 0 && newIndex < pages.length) {
        gsap.to('.page', {
          x: '-100%',
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            setPageIndex(newIndex);
            gsap.fromTo('.page',
              { x: '100%', opacity: 0 },
              { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
            );
          }
        });
      }
    };

    window.addEventListener('navigateToPage', handleNavigateToPage);
    return () => window.removeEventListener('navigateToPage', handleNavigateToPage);
  }, []);

  const handleNext = () => {
    gsap.to('.page', {
      x: '-100%',
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setPageIndex((prev) => (prev + 1) % pages.length)
        gsap.fromTo('.page',
          { x: '100%', opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }
    })
  }

  const handlePrev = () => {
    gsap.to('.page', {
      x: '100%',
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setPageIndex((prev) => (prev - 1 + pages.length) % pages.length)
        gsap.fromTo('.page',
          { x: '-100%', opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }
    })
  }

  return (
    <div className='min-h-screen bg-black/95 text-gray font-cyber relative '>
      <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300ffe7' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
      <div
        className="absolute z-0 w-80 h-80 rounded-full blur-[100px] bg-primary/40 animate-pulse duration-1000"
        style={{ top: '130px', right: '10%' }}
      ></div>
      <div
        className="absolute z-0 w-80 h-80 rounded-full blur-[100px] bg-secondary/40 animate-pulse delay-1000 duration-500"
        style={{ top: '330px', left: '10%' }}
      ></div>

      {/* Navigation Controls */}
      <nav className="fixed top-4 left-0 right-0 flex items-center justify-center gap-3 lg:gap-4 z-20">
        <button
          onClick={handlePrev}
          disabled={pageIndex === 0}
          className="group flex items-center gap-2 px-4 py-3 bg-black/50 border-2 border-primary text-primary font-tech backdrop-blur-sm transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,231,0.5)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>

        <div className="flex gap-2 p-3 rounded-full">
          <h1 className='text-xl font-semibold bg-primary p-2 text-dark border-2 border-primary shadow-lg shadow-primary/40'>{pageNames[pageIndex]}</h1>
        </div>

        <button
          onClick={handleNext}
          disabled={pageIndex === pages.length - 1}
          className="group flex items-center gap-2 px-4 py-3 bg-black/50 border-2 border-primary text-primary font-tech backdrop-blur-sm transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,231,0.5)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </nav>
      {/* <Navbar /> */}
      <Suspense fallback={<Loading />}>
        <PageComponent />
        <Footer />
      </Suspense>

    </div>
  )
}

export default App
