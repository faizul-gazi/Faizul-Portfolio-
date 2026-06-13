import React from 'react'

function About() {
  const handleScrollToContact = (e) => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }



  return (
    <section id="about" className="py-24 md:py-32 relative z-10 bg-bg-primary">
      
      {/* About Me Details */}
      <div className="max-w-6xl w-[90%] mx-auto mb-16">
        <h2 className="text-xs uppercase tracking-[0.3em] text-text-main font-semibold font-headings relative pl-0 pt-6 before:content-[''] before:block before:h-[2px] before:w-20 before:bg-gradient-to-r before:from-accent-pink before:to-accent-violet before:absolute before:top-0 before:left-0 mb-10">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <p className="text-xl md:text-2xl font-light text-text-main leading-relaxed border-l-2 border-accent-pink pl-6 col-span-1 md:col-span-2">
            I'm a frontend developer and React.js enthusiast. I enjoy turning ideas into clean, modern, pixel-perfect user interfaces. Proficient in HTML, CSS, JavaScript, Tailwind, and React, with an interest in crafting responsive, user-friendly web experiences.
          </p>
          <div className="text-base text-text-muted leading-relaxed">
            <p className="mb-4">
              Alongside development, I’m actively involved in research and have co-authored multiple academic papers in the fields of Machine Learning and AI. My passion for technology drives me to continuously learn and stay updated with the latest trends in web development and AI.
            </p>
            <p>
              My background in digital marketing also helps me understand user behavior, product positioning, and how to create meaningful digital experiences from both technical and strategic perspectives.
            </p>
          </div>
          <div className="text-base text-text-muted leading-relaxed">
            <p className="mb-4">
              Always learning. Always building. Always exploring new ways to make technology more impactful.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 max-w-2xl">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="flex-1 border-2 border-glass-border hover:border-accent-cyan hover:bg-accent-cyan/5 text-text-main hover:text-accent-cyan py-4 px-8 rounded-full font-headings font-bold uppercase tracking-wider text-center transition-all duration-300 hover:-translate-y-1 focus:outline-none"
          >
            Get In Touch
          </a>
          <a
            href="/cv/Gazi Faizul Islam -CV.pdf"
            download
            className="flex-1 bg-gradient-to-r from-accent-pink to-accent-violet hover:from-accent-pink/90 hover:to-accent-violet/90 text-white py-4 px-8 rounded-full font-headings font-bold uppercase tracking-wider text-center transition-all duration-300 hover:shadow-[0_8px_25px_rgba(255,0,127,0.3)] hover:-translate-y-1 focus:outline-none"
          >
            Download CV
          </a>
        </div>
      </div>

    </section>
  )
}

export default About
