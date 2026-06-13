import React, { useState, useEffect } from 'react'

function Header({ theme, toggleTheme }) {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('intro')

  const navLinks = [
    { id: 'intro', label: 'Intro' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'works', label: 'Works' },
    { id: 'contact', label: 'Say Hello' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      // 1. Sticky Header threshold
      if (window.scrollY > 40) {
        setSticky(true)
      } else {
        setSticky(false)
      }

      // 2. Scroll Spy calculation
      const scrollPosition = window.scrollY + 180
      const sections = ['intro', 'about', 'services', 'works', 'contact']
      
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
        sticky
          ? 'bg-bg-secondary/90 backdrop-blur-md border-b border-glass-border shadow-md h-16 md:h-18'
          : 'bg-transparent h-20 md:h-24'
      }`}
    >
      {/* Brand logo */}
      <div className="flex items-center">
        <a href="#intro" onClick={(e) => handleLinkClick(e, 'intro')} className="block">
          <img src="/images/faizul_text.png" alt="Homepage" className={`h-7 md:h-8 transition-all duration-300 ${theme === 'light' ? 'invert' : ''}`} />
        </a>
      </div>

      {/* Nav wrap */}
      <nav
        className={`fixed md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-bg-secondary md:bg-transparent border-b md:border-none border-glass-border py-8 md:py-0 px-8 md:px-0 flex-col md:flex-row items-center gap-8 md:gap-10 transition-all duration-300 md:flex ${
          menuOpen ? 'flex shadow-2xl' : 'hidden'
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 font-headings text-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`relative pb-1 font-semibold group transition-colors duration-300 ${
                  activeSection === link.id ? 'text-text-main font-bold' : 'text-text-muted hover:text-text-main'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-pink via-accent-violet to-accent-cyan transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 md:ml-6 border-t md:border-t-0 border-glass-border md:pt-0 pt-6 w-full md:w-auto justify-center">
          {/* Social list */}
          <ul className="flex items-center gap-5 text-lg">
            <li>
              <a
                href="https://www.github.com/faizul-gazi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-pink hover:-translate-y-0.5 transition-all duration-300 block"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/faizul-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-pink hover:-translate-y-0.5 transition-all duration-300 block"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:faizul.thedevloper@gmail.com"
                className="text-text-muted hover:text-accent-pink hover:-translate-y-0.5 transition-all duration-300 block"
              >
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/faizul008"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-pink hover:-translate-y-0.5 transition-all duration-300 block"
              >
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 md:p-2.5 rounded-xl bg-bg-primary/50 border border-glass-border hover:border-accent-pink text-text-muted hover:text-accent-pink transition-all duration-300 flex items-center justify-center focus:outline-none cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {theme === 'dark' ? (
              <i className="fas fa-sun text-amber-400 text-sm"></i>
            ) : (
              <i className="fas fa-moon text-accent-violet text-sm"></i>
            )}
          </button>
        </div>
      </nav>

      {/* Hamburger mobile toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block md:hidden w-10 h-10 relative focus:outline-none z-50"
        aria-label="Toggle Menu"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-[2px] w-full bg-text-main rounded transition-all duration-300 origin-left ${
              menuOpen ? 'rotate-45 translate-x-[2px]' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-text-main rounded transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-text-main rounded transition-all duration-300 origin-left ${
              menuOpen ? '-rotate-45 translate-x-[2px]' : ''
            }`}
          />
        </div>
      </button>
    </header>
  )
}

export default Header
