import React, { useState } from 'react'

function Works() {
  const [lightboxItem, setLightboxItem] = useState(null)

  const projects = [
    {
      title: 'Skill Exchange Platform',
      category: 'MERN Stack Developer',
      img: '/images/portfolio/skill-exchange.png',
      galleryImg: '/images/portfolio/skill-exchange.png',
      link: 'https://skill-exchange-platform-pied.vercel.app',
      github: 'https://github.com/faizul-gazi/skill-exchange-platform',
      caption: 'A full-stack skill-sharing web application built using React, Node.js, Express, and MongoDB.',
      description: 'A full-stack collaborative platform designed to help users share, trade, and learn new skills. Features real-time direct messaging, user reviews, filter-based search engines, and roles-based dashboard controls.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      features: ['Real-time chat using Socket.io', 'User review and rating system', 'Dynamic search & filter options', 'Custom role dashboards']
    },
    {
      title: 'Sales Management System',
      category: 'MERN Stack Developer',
      img: '/images/portfolio/sales-management-new.png',
      galleryImg: '/images/portfolio/sales-management-new.png',
      link: 'https://sales-management-system-opal.vercel.app/',
      github: 'https://github.com/faizul-gazi/Sales-Management-System',
      caption: 'Full-stack gadget e-commerce application built using Next.js, Tailwind v4 & MongoDB.',
      description: 'A comprehensive sales management and inventory reporting panel. Enables store managers to track transactions, inventory, revenue metrics, and user logs with built-in dark/light mode toggles.',
      technologies: ['Next.js', 'Tailwind CSS v4', 'MongoDB', 'Node.js', 'Express.js', 'REST APIs'],
      features: ['Dashboard analytics for sales tracking', 'Inventory and product manager tools', 'Interactive charts and stats cards', 'Dark and light theme toggles']
    },
    {
      title: 'Diabetes Analyses & Prediction',
      category: 'ML & Full-Stack Developer',
      img: '/images/portfolio/diabetes.png',
      galleryImg: '/images/portfolio/diabetes.png',
      link: 'https://diabetes-analyses-and-prediction-mocha.vercel.app',
      github: 'https://github.com/faizul-gazi/Diabetes-Analyses-and-prediction',
      caption: 'Intelligent diagnostic predictive app integrating machine learning for health probability checking.',
      description: 'An intelligent diagnostic predictive web application. Integrates machine learning classification algorithms to assess diabetes probability based on health factors and demographic inputs.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Python', 'scikit-learn', 'Tailwind CSS'],
      features: ['Interactive health assessment questionnaire', 'Real-time classification predictions', 'Data exploratory graphs and guides', 'Secure patient health record tracking']
    },
    {
      title: 'Dazzling Diva',
      category: 'Frontend Developer',
      img: '/images/portfolio/dazzling-diva.png',
      galleryImg: '/images/portfolio/dazzling-diva.png',
      link: 'https://dazzling-diva.vercel.app',
      github: 'https://github.com/faizul-gazi/Dazzling-Diva',
      caption: 'A premium, modern fashion e-commerce store frontend featuring fluid layouts and smooth transitions.',
      description: 'A stunning, high-end e-commerce frontend designed for premium fashion brands. Features beautiful catalogs, cart drawer functionality, fluid page transitions, and modern typography layouts.',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
      features: ['Modern design with fluid micro-animations', 'Interactive cart sliding drawers', 'Responsive product grids', 'Curated search and filters']
    },
    {
      title: 'Tailwind Studio Landing Page',
      category: 'Frontend Developer',
      img: '/images/portfolio/tailwind-project-new.png',
      galleryImg: '/images/portfolio/tailwind-project-new.png',
      link: 'https://faizul-gazi.github.io/tailwind-project/',
      github: 'https://github.com/faizul-gazi/tailwind-project',
      caption: 'A highly responsive, custom-styled multi-section landing page displaying mastery in Tailwind layout systems.',
      description: 'A highly responsive, custom-styled multi-section landing page created to show mastery in Tailwind CSS utilities, structural layouts, hover micro-interactions, and smooth browser rendering.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      features: ['100% responsive grids & flex components', 'Premium glassmorphic navigation headers', 'Beautiful interactive hover animations', 'Fast load-time optimized assets']
    },
    {
      title: 'Tagger Report',
      category: 'Frontend Developer',
      img: '/images/portfolio/tagger-report-new.png',
      galleryImg: '/images/portfolio/tagger-report-new.png',
      link: 'https://tagger-report.vercel.app',
      github: 'https://github.com/faizul-gazi/Tagger-Report',
      caption: 'A professional DOM tree semantic compliance auditor and SEO factor verification tool.',
      description: 'An audit tool built to inspect semantic document tree outlines. Scans web pages to evaluate tag hierarchies, heading order, and check general search engine optimization markers.',
      technologies: ['JavaScript', 'React.js', 'Tailwind CSS', 'REST APIs', 'HTML5'],
      features: ['Document heading compliance reports', 'Search engine tag analyzer', 'Real-time audit log summaries', 'Exportable audit checklists']
    }
  ]

  const handleZoomClick = (e, project) => {
    e.preventDefault()
    setLightboxItem(project)
  }

  return (
    <section id="works" className="py-24 md:py-32 relative z-10 bg-bg-primary">
      {/* Heading */}
      <div className="max-w-5xl w-[90%] mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-main font-headings">
          Projects<span className="text-accent-pink">.</span>
        </h2>
      </div>

      {/* Staggered Grid List (Side-by-Side with Vertical Offset) */}
      <div className="max-w-5xl w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-14 gap-y-14 md:gap-y-20 md:pb-24">
        {projects.map((project, index) => (
          <div
            className={`flex flex-col bg-bg-secondary/40 border border-glass-border rounded-3xl p-5 md:p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(217,70,239,0.06)] hover:bg-bg-secondary/80 hover:border-accent-pink/20 group ${
              index % 2 !== 0 ? 'md:translate-y-14' : ''
            }`}
            key={index}
          >
            {/* Image mock browser container */}
            <div 
              className="bg-slate-200/90 dark:bg-slate-800/40 rounded-2xl p-4 md:p-6 aspect-[16/10] flex items-center justify-center relative overflow-hidden mb-6 border border-slate-300/40 dark:border-slate-700/30 shadow-inner cursor-pointer"
              onClick={(e) => handleZoomClick(e, project)}
            >
              
              {/* Decorative background curves (parallax movement) */}
              <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700">
                {index % 2 === 0 ? (
                  <svg className="absolute w-full h-full text-accent-pink" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M-10,40 Q30,10 60,60 T120,30" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                    <path d="M10,80 Q45,45 80,90" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg className="absolute w-full h-full text-accent-violet" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M-10,80 Q40,40 70,90 T120,60" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                    <path d="M20,10 Q55,45 90,0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                )}
              </div>

              {/* Browser window */}
              <div className="relative z-10 w-[85%] bg-bg-secondary rounded-2xl shadow-xl overflow-hidden border border-glass-border transform group-hover:scale-[1.03] transition-all duration-500 select-none">
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-bg-primary/20 border-b border-glass-border">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  </div>
                  {/* Address bar URL */}
                  <div className="mx-auto w-[60%] h-4 bg-bg-primary/40 rounded text-[9px] text-text-muted flex items-center justify-center truncate px-2 border border-glass-border font-body font-light">
                    {project.link.replace('https://', '').split('/')[0]}
                  </div>
                </div>
                {/* Wrap image in click handler for zoom lightbox */}
                <div className="overflow-hidden relative">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    loading="lazy" 
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Glowing overlay hover effect with zoom icon */}
                  <div className="absolute inset-0 bg-accent-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="w-9 h-9 rounded-full bg-white/95 dark:bg-black/90 text-accent-pink flex items-center justify-center shadow-md transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <i className="fas fa-search-plus text-[11px]"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Details */}
            <div className="flex flex-col px-1">
              <h3 className="text-2xl font-bold text-text-main font-headings mb-2">
                <button 
                  onClick={(e) => handleZoomClick(e, project)} 
                  className="hover:text-accent-pink transition-colors duration-300 flex items-center gap-1.5 group/link cursor-pointer bg-transparent border-none text-left p-0 font-extrabold focus:outline-none"
                >
                  {project.title}
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-glass-border group-hover/link:border-accent-pink group-hover/link:bg-accent-pink/10 text-text-muted group-hover/link:text-accent-pink text-xs transition-all duration-300 ml-1 shrink-0">
                    <span className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300 font-light text-sm">↗</span>
                  </span>
                </button>
              </h3>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                {project.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* React Lightbox Modal Overlay (Detailed Project Page) */}
      {lightboxItem && (
        <div
          className="fixed inset-0 bg-black/95 z-[99999] overflow-y-auto backdrop-blur-sm p-4 md:p-10 flex items-center justify-center"
          onClick={() => setLightboxItem(null)}
        >
          {/* Main Card Container */}
          <div
            className="w-full max-w-5xl bg-bg-secondary border border-glass-border rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row min-h-[500px] animate-zoom-in text-left my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full border border-glass-border bg-bg-primary hover:border-accent-pink text-text-muted hover:text-accent-pink flex items-center justify-center cursor-pointer transition-all duration-300 z-50 focus:outline-none"
              onClick={() => setLightboxItem(null)}
              aria-label="Close Project Details"
            >
              <i className="fas fa-times text-sm"></i>
            </button>

            {/* Left Column: Visual Showcase (Browser mock frame) */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center items-center bg-bg-primary/20 border-b md:border-b-0 md:border-r border-glass-border">
              <div className="relative w-full max-w-md bg-bg-secondary rounded-2xl shadow-xl overflow-hidden border border-glass-border select-none">
                {/* Browser top-bar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-bg-primary/20 border-b border-glass-border">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  </div>
                  <div className="mx-auto w-[60%] h-4 bg-bg-primary/40 rounded text-[9px] text-text-muted flex items-center justify-center truncate px-2 border border-glass-border font-body font-light">
                    {lightboxItem.link.replace('https://', '').split('/')[0]}
                  </div>
                </div>
                {/* Project Image */}
                <img
                  src={lightboxItem.galleryImg}
                  alt={lightboxItem.title}
                  className="w-full object-cover max-h-[40vh] md:max-h-none"
                />
              </div>
            </div>

            {/* Right Column: Project Details content */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                {/* Category Pill */}
                <span className="text-xs uppercase tracking-[0.2em] text-accent-pink font-semibold font-headings mb-1.5 block">
                  {lightboxItem.category}
                </span>
                {/* Project Title */}
                <h3 className="text-2xl md:text-3xl font-extrabold text-text-main font-headings mb-4">
                  {lightboxItem.title}
                </h3>
                {/* Detailed Description */}
                <p className="text-sm md:text-base text-text-muted leading-relaxed mb-6">
                  {lightboxItem.description || lightboxItem.caption}
                </p>

                {/* Key Features */}
                {lightboxItem.features && lightboxItem.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-wider text-text-main font-semibold font-headings mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {lightboxItem.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex gap-2 text-text-muted text-sm items-start">
                          <span className="text-accent-pink font-bold">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies used */}
                {lightboxItem.technologies && lightboxItem.technologies.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-wider text-text-main font-semibold font-headings mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {lightboxItem.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 bg-bg-primary/60 border border-glass-border text-xs text-text-main rounded-full font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a
                  href={lightboxItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-accent-pink to-accent-violet hover:from-accent-pink/90 hover:to-accent-violet/90 text-white py-3.5 px-6 rounded-2xl font-headings font-bold uppercase tracking-wider text-center text-xs transition-all duration-300 hover:shadow-[0_8px_25px_rgba(255,0,127,0.3)] hover:-translate-y-0.5 focus:outline-none flex items-center justify-center gap-2"
                >
                  <i className="fas fa-external-link-alt"></i>
                  <span>Live Preview</span>
                </a>
                {lightboxItem.github && (
                  <a
                    href={lightboxItem.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-glass-border hover:border-accent-pink hover:bg-accent-pink/5 text-text-main hover:text-accent-pink py-3.5 px-6 rounded-2xl font-headings font-bold uppercase tracking-wider text-center text-xs transition-all duration-300 hover:-translate-y-0.5 focus:outline-none flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-github"></i>
                    <span>View GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Works
