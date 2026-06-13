import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Works from './components/Works'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(() => {
    const hasReset = localStorage.getItem('theme_reset_light_v1')
    if (!hasReset) {
      localStorage.setItem('theme_reset_light_v1', 'true')
      localStorage.setItem('theme', 'light')
      return 'light'
    }
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    // Force scroll to top on refresh
    window.scrollTo(0, 0)
    
    const timer = setTimeout(() => {
      setLoading(false)
    }, 350)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Floating Ambient Background Blobs */}
      <div className="bg-glow-container">
        <div className="bg-glow bg-glow-1"></div>
        <div className="bg-glow bg-glow-2"></div>
        <div className="bg-glow bg-glow-3"></div>
      </div>

      {/* Preloader screen - Fades out smoothly using CSS transition */}
      <div
        id="preloader"
        className={`transition-opacity duration-500 ease-out ${
          loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div id="loader"></div>
      </div>

      {/* Main website layouts - Rendered immediately so browser pre-fetches assets */}
      <Header theme={theme} toggleTheme={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <Works />
        <Experience />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
