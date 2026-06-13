import React, { useState } from 'react'

function Works() {
  const [lightboxItem, setLightboxItem] = useState(null)

  const projects = [
    {
      title: 'SalesTracker',
      category: 'Frontend Developer',
      img: '/images/portfolio/sales-management.jpg',
      galleryImg: '/images/portfolio/gallery/g-sales-management.jpg',
      link: 'https://faizul-gazi.github.io/Sales-Management-System/',
      caption: 'An advanced sales monitoring and reporting system featuring user dashboards, product analytics, and clean management controls.'
    },
    {
      title: 'TaggerReport (Client)',
      category: 'Frontend Developer',
      img: '/images/portfolio/woodcraft.jpg',
      galleryImg: '/images/portfolio/gallery/g-woodcraft.jpg',
      link: 'https://tagger-report.vercel.app/',
      caption: 'A professional web scanning tool custom developed to audit DOM structures, meta properties, and element parameters.'
    },
    {
      title: 'TaggerReport (Core)',
      category: 'Frontend Developer',
      img: '/images/portfolio/tagger-report.jpg',
      galleryImg: '/images/portfolio/gallery/g-tagger-report.jpg',
      link: 'https://tagger-report.vercel.app/',
      caption: 'Semantic tag auditor analyzing document outline compliance, reporting structural details, and checking search engine optimization factors.'
    },
    {
      title: 'ConsultCo',
      category: 'Frontend Developer',
      img: '/images/portfolio/bootstrap-project.jpg',
      galleryImg: '/images/portfolio/gallery/g-bootstrap-project.jpg',
      link: 'https://faizul-gazi.github.io/bootstrap-project/',
      caption: 'A modern, responsive business consulting landing page created using Bootstrap 5 to deliver responsive consulting grids.'
    },
    {
      title: 'Luminique',
      category: 'Web Design',
      img: '/images/portfolio/lamp.jpg',
      galleryImg: '/images/portfolio/gallery/g-lamp.jpg',
      link: 'https://www.behance.net/',
      caption: 'Creative design mockup for smart lighting interfaces, combining glassmorphic surfaces, shadows, and smooth controls.'
    },
    {
      title: 'FujiPhoto',
      category: 'Web Design',
      img: '/images/portfolio/fuji.jpg',
      galleryImg: '/images/portfolio/gallery/g-fuji.jpg',
      link: 'https://www.behance.net/',
      caption: 'Clean, photojournalistic gallery layouts focusing on high negative space, Japanese nature landscapes, and elegant typography.'
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
            <div className="bg-slate-200/90 dark:bg-slate-800/40 rounded-2xl p-4 md:p-6 aspect-[16/10] flex items-center justify-center relative overflow-hidden mb-6 border border-slate-300/40 dark:border-slate-700/30 shadow-inner">
              
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
                <div className="cursor-zoom-in overflow-hidden relative" onClick={(e) => handleZoomClick(e, project)}>
                  <img src={project.img} alt={project.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent-pink transition-colors duration-300 flex items-center gap-1.5 group/link">
                  {project.title}
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-glass-border group-hover/link:border-accent-pink group-hover/link:bg-accent-pink/10 text-text-muted group-hover/link:text-accent-pink text-xs transition-all duration-300 ml-1 shrink-0">
                    <span className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300 font-light text-sm">↗</span>
                  </span>
                </a>
              </h3>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                {project.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* React Lightbox Modal Overlay */}
      {lightboxItem && (
        <div
          className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center backdrop-blur-sm p-4"
          onClick={() => setLightboxItem(null)}
        >
          <button
            className="absolute top-6 right-8 text-white hover:text-accent-pink text-4xl bg-transparent border-none focus:outline-none transition-all duration-300 hover:rotate-90"
            onClick={() => setLightboxItem(null)}
            aria-label="Close Lightbox"
          >
            &times;
          </button>
          
          <div
            className="max-w-4xl w-full flex flex-col items-center animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxItem.galleryImg}
              alt={lightboxItem.title}
              className="max-w-full max-h-[70vh] object-contain rounded-xl border border-glass-border shadow-2xl"
            />
            <div className="mt-6 text-center text-white px-4">
              <h4 className="text-2xl md:text-3xl font-bold font-headings mb-2">
                {lightboxItem.title}
              </h4>
              <p className="text-sm md:text-base text-text-muted max-w-xl mx-auto leading-relaxed">
                {lightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Works
