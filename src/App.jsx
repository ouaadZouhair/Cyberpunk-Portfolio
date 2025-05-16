import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-black/95 text-gray font-cyber'>
      <Navbar />
      <Hero/>
    </div>
  )
}

export default App
