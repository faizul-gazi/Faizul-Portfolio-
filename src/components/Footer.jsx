import React, { useState, useEffect } from 'react'

function Footer() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-bg-primary border-t border-glass-border py-10 relative z-10">
      <div className="max-w-6xl w-[90%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-text-muted font-headings tracking-wide">
          <span>© Copyright Faizul 2025</span>
          <span className="hidden sm:inline text-text-muted/20">|</span>
          <span>
            Design by{' '}
            <a
              href="https://www.github.com/faizul-gazi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-main hover:text-accent-pink font-semibold underline decoration-glass-border hover:decoration-accent-pink transition-colors duration-300"
            >
              Faizul
            </a>
          </span>
        </div>

        {/* Scroll back to top button */}
        {visible && (
          <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 animate-bounce">
            <a
              title="Back to Top"
              href="#top"
              onClick={scrollToTop}
              className="w-12 h-12 bg-bg-secondary border border-glass-border hover:border-accent-pink hover:bg-accent-pink text-text-main hover:text-white flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 focus:outline-none"
            >
              <i className="fas fa-arrow-up" aria-hidden="true" style={{ fontSize: '1.4rem' }}></i>
            </a>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer
