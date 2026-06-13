import React, { useState, useEffect } from 'react'

function Hero() {
  const words = ['React.js', 'UI/UX Design', 'Modern Web Apps', 'AI & ML Research']
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    let typeSpeed = 180
    const currentWord = words[wordIndex]

    if (isDeleting) {
      typeSpeed = 120
    }

    const handleType = () => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)

        if (charIndex + 1 === currentWord.length) {
          setIsDeleting(true)
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)

        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 3800 // Hold the full word for 3.8s
    } else if (isDeleting && charIndex === 0) {
      typeSpeed = 800  // Pause 0.8s before typing the next word
    }

    const timer = setTimeout(handleType, typeSpeed)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, wordIndex])

  const handleScroll = (e) => {
    e.preventDefault()
    const el = document.getElementById('about')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="intro" className="h-screen min-h-[650px] flex items-center relative overflow-hidden bg-bg-primary pt-20">
      <div className="max-w-6xl w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">

        {/* Intro text */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-headings text-accent-cyan tracking-widest uppercase font-semibold mb-4">
            Hello, I'm Gazi Faizul Islam
          </h3>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-text-main leading-tight font-headings mb-6">
            Front-End Developer <br />
            specializing in <span className="bg-gradient-to-r from-accent-pink via-accent-violet to-accent-cyan bg-clip-text text-transparent font-extrabold">{text}</span>
            <span className="text-accent-cyan font-light ml-1 animate-cursor-blink">|</span>
          </h1>
        </div>

        {/* Profile Picture Wrapper */}
        <div className="relative group shrink-0 select-none">
          {/* Outer Ambient Glow under the photo */}
          <div className="absolute inset-[-15px] bg-gradient-to-tr from-accent-pink/35 via-accent-violet/35 to-accent-cyan/40 rounded-full blur-3xl opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 -z-10" />
          {/* Liquid Glowing Ring directly behind photo */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-accent-pink/60 via-accent-violet/60 to-accent-cyan/60 rounded-full opacity-70 group-hover:opacity-95 blur-md transition-all duration-700 -z-10 animate-liquid" />
          
          {/* Profile Picture Shape */}
          <div className="w-[250px] h-[250px] md:w-[380px] md:h-[380px] bg-bg-secondary border-2 border-glass-border shadow-2xl relative z-10 bg-[url(/images/hero-pic.png)] bg-cover bg-top animate-liquid md:rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%] rounded-full group-hover:border-accent-cyan/60 transition-all duration-500 overflow-hidden" />
        </div>
      </div>

      {/* Scroll indicator link */}
      <div className="absolute bottom-16 left-10 md:left-12 font-headings text-xs uppercase tracking-widest hidden md:block z-10">
        <a
          href="#about"
          onClick={handleScroll}
          className="text-text-muted hover:text-text-main flex items-center gap-3 after:content-[''] after:h-[1px] after:w-10 hover:after:w-16 after:bg-accent-pink after:transition-all after:duration-300"
        >
          Scroll For More
        </a>
      </div>
    </section>
  )
}

export default Hero
