import React, { useState } from 'react'

function Works() {
  const [lightboxItem, setLightboxItem] = useState(null)

  const projects = [
    {
      title: 'Sales-Management-System',
      category: 'Frontend Developer',
      img: '/images/portfolio/sales-management.jpg',
      galleryImg: '/images/portfolio/gallery/g-sales-management.jpg',
      link: 'https://faizul-gazi.github.io/Sales-Management-System/',
      caption: 'Improved an existing e-commerce system by solving navigation, filtering, and checkout issues while developing a responsive, modern UI and an enhanced admin panel.'
    },
    {
      title: 'Tagger-Report (Woodcraft)',
      category: 'Frontend Developer',
      img: '/images/portfolio/woodcraft.jpg',
      galleryImg: '/images/portfolio/gallery/g-woodcraft.jpg',
      link: 'https://tagger-report.vercel.app/',
      caption: 'A web analysis tool developed for a client to generate comprehensive reports on webpage elements and structure. This tool analyzes and reports on various webpage components to identify issues and ensure proper implementation.'
    },
    {
      title: 'Tagger-Report (Core)',
      category: 'Frontend Developer',
      img: '/images/portfolio/tagger-report.jpg',
      galleryImg: '/images/portfolio/gallery/g-tagger-report.jpg',
      link: 'https://tagger-report.vercel.app/',
      caption: 'Webpage semantic tag analyzing tool that parses elements, reports structure details, highlights missing SEO tags, and helps verify implementation compliance.'
    },
    {
      title: 'Bootstrap Project',
      category: 'Frontend Developer',
      img: '/images/portfolio/bootstrap-project.jpg',
      galleryImg: '/images/portfolio/gallery/g-bootstrap-project.jpg',
      link: 'https://faizul-gazi.github.io/bootstrap-project/',
      caption: 'A modern business consulting website built with Bootstrap 5, featuring a responsive design and interactive UI components. This project demonstrates the implementation of a professional business website with clean, maintainable code.'
    },
    {
      title: 'Lamp',
      category: 'Web Design',
      img: '/images/portfolio/lamp.jpg',
      galleryImg: '/images/portfolio/gallery/g-lamp.jpg',
      link: 'https://www.behance.net/',
      caption: 'Modern web interface layout design for a premium smart lighting company, emphasizing minimal layout shapes and custom shadows.'
    },
    {
      title: 'Fuji',
      category: 'Web Design',
      img: '/images/portfolio/fuji.jpg',
      galleryImg: '/images/portfolio/gallery/g-fuji.jpg',
      link: 'https://www.behance.net/',
      caption: 'Minimalist editorial interface layout design focusing on Japanese landscape photography, high negative space, and premium visual typography.'
    }
  ]

  const handleZoomClick = (e, project) => {
    e.preventDefault()
    setLightboxItem(project)
  }

  return (
    <section id="works" className="py-24 md:py-32 relative z-10 bg-bg-primary">
      {/* Heading */}
      <div className="max-w-6xl w-[90%] mx-auto text-center mb-16 md:mb-24">
        <h2 className="text-xs uppercase tracking-[0.3em] text-text-main font-semibold font-headings relative pl-0 pb-3 before:content-[''] before:block before:h-[2px] before:w-20 before:bg-gradient-to-r before:from-accent-pink before:to-accent-violet before:absolute before:bottom-0 before:left-1/2 before:ml-[-40px]">
          Portfolio
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-text-main font-headings mt-6">
          Some of my most recent projects
        </p>
      </div>

      {/* Grid List */}
      <div className="max-w-6xl w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <div
            className="bg-bg-secondary border border-glass-border hover:border-accent-cyan/40 rounded-3xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent-cyan/5 overflow-hidden group"
            key={index}
          >
            {/* Thumbnail */}
            <div className="rounded-2xl overflow-hidden relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
                <a
                  href="#zoom"
                  onClick={(e) => handleZoomClick(e, project)}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-accent-cyan text-white flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 focus:outline-none"
                  title="Enlarge Image"
                >
                  <i className="fas fa-search-plus"></i>
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-accent-cyan text-white flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 focus:outline-none"
                  title="Visit Project Link"
                >
                  <i className="fas fa-link"></i>
                </a>
              </div>
            </div>

            {/* Text description */}
            <div className="item-folio__text mt-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-text-main font-headings group-hover:text-accent-cyan transition-colors duration-300 mb-1">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-accent-cyan font-medium font-headings">
                {project.category}
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
