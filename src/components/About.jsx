import React from 'react'

function About() {
  const handleScrollToContact = (e) => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const timelineWork = [
    {
      title: 'QuickTutor – Online Learning Platform',
      role: 'Frontend Developer',
      tech: 'React.js, HTML, CSS, Tailwind, JavaScript',
      desc: 'Developed a responsive platform for students and tutors, including an admin panel for managing courses, users, and learning content.'
    },
    {
      title: 'Gadget E-commerce System Improvement',
      role: 'Frontend Developer',
      tech: 'HTML, CSS, Bootstrap, JavaScript',
      desc: 'Improved an existing e-commerce system by solving navigation, filtering, and checkout issues while developing a responsive, modern UI and an enhanced admin panel.'
    },
    {
      title: 'Diamond Price Prediction (ML + Web App)',
      role: 'Machine Learning + Web App Developer',
      tech: 'Python, scikit-learn, pandas, Flask, HTML, CSS',
      desc: 'Performed exploratory data analysis on 54K-entry diamond dataset and built a machine learning model to predict diamond prices. Developed a simple web interface for real-time prediction.'
    }
  ]

  const timelineEducation = [
    {
      timeframe: 'March 2022 - Present',
      title: 'International University of Business Agriculture and Technology (IUBAT)',
      degree: 'Bachelor of Science in Computer Science and Engineering',
      desc: 'Pursuing a Bachelor of Science in Computer Science and Engineering at IUBAT with a strong focus on software development, algorithms, data structures, databases, networking, and computer systems. Gaining practical experience in front-end and back-end web development, including proficiency in frameworks like React.js.'
    }
  ]

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
            Hire Me
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

      {/* Experience & Education Timelines */}
      <div className="max-w-6xl w-[90%] mx-auto mt-24">
        <h2 className="text-xs uppercase tracking-[0.3em] text-text-main font-semibold font-headings relative pl-0 pt-6 before:content-[''] before:block before:h-[2px] before:w-20 before:bg-gradient-to-r before:from-accent-pink before:to-accent-violet before:absolute before:top-0 before:left-0 mb-16">
          Work & Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Work Timeline */}
          <div>
            <div className="relative pl-8 border-l border-glass-border before:content-[''] before:absolute before:top-0 before:left-[-1px] before:w-[2px] before:h-full before:bg-glass-border">
              <div className="w-12 h-12 rounded-full border border-glass-border bg-bg-secondary flex items-center justify-center absolute left-[-24px] top-[-36px] z-10 text-accent-cyan text-lg shadow-lg">
                <i className="fas fa-briefcase" aria-hidden="true"></i>
              </div>

              {timelineWork.map((item, index) => (
                <div
                  className="bg-bg-secondary border border-glass-border hover:border-accent-cyan/40 rounded-2xl p-6 md:p-8 mb-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-cyan/5 relative group"
                  key={index}
                >
                  <div className="w-2 h-2 rounded-full bg-accent-cyan absolute left-[-45px] top-9 shadow-[0_0_10px_#00f0ff] group-hover:scale-125 transition-transform duration-300" />
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-text-main font-headings group-hover:text-accent-cyan transition-colors duration-300">
                      {item.title}
                    </h3>
                    <h5 className="text-sm font-semibold text-text-muted mt-1 font-headings">
                      {item.role}
                    </h5>
                  </div>
                  <div className="text-sm md:text-base leading-relaxed text-text-muted">
                    <p className="mb-2 text-accent-pink font-semibold font-headings tracking-wide">
                      Tech: {item.tech}
                    </p>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="relative pl-8 border-l border-glass-border before:content-[''] before:absolute before:top-0 before:left-[-1px] before:w-[2px] before:h-full before:bg-glass-border">
              <div className="w-12 h-12 rounded-full border border-glass-border bg-bg-secondary flex items-center justify-center absolute left-[-24px] top-[-36px] z-10 text-accent-cyan text-lg shadow-lg">
                <i className="fas fa-graduation-cap" aria-hidden="true"></i>
              </div>

              {timelineEducation.map((item, index) => (
                <div
                  className="bg-bg-secondary border border-glass-border hover:border-accent-cyan/40 rounded-2xl p-6 md:p-8 mb-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-cyan/5 relative group"
                  key={index}
                >
                  <div className="w-2 h-2 rounded-full bg-accent-cyan absolute left-[-45px] top-9 shadow-[0_0_10px_#00f0ff] group-hover:scale-125 transition-transform duration-300" />
                  <div className="mb-4">
                    <span className="text-xs font-bold text-accent-pink tracking-wider uppercase mb-1 block font-headings">
                      {item.timeframe}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-text-main font-headings group-hover:text-accent-cyan transition-colors duration-300">
                      {item.title}
                    </h3>
                    <h5 className="text-sm font-semibold text-text-muted mt-1 font-headings">
                      {item.degree}
                    </h5>
                  </div>
                  <div className="text-sm md:text-base leading-relaxed text-text-muted">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
