import React, { useState } from 'react'

function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  const experienceData = [
    {
      company: 'GoInnovior Limited',
      role: 'Software Project Development Intern',
      timeframe: 'Feb 2026 - Present',
      url: 'https://www.goinnovior.com/',
      bullets: [
        'Building and maintaining web applications.',
        'Working with frontend and backend technologies.',
        'Collaborating in real-world development projects.'
      ]
    },
    {
      company: 'Freelance & Projects',
      role: 'MERN Stack Developer',
      timeframe: '2023 - 2026',
      url: '',
      bullets: [
        'Built and shipped highly responsive, pixel-perfect web applications using React.js and Next.js.',
        'Developed scalable full-stack applications with Node.js, Express.js, and MongoDB databases.',
        'Researched and integrated Machine Learning & AI techniques into modern web layouts.'
      ]
    }
  ]

  const skillsData = [
    {
      category: 'Core Languages',
      items: [
        { name: 'JavaScript', icon: 'fab fa-js text-amber-400' },
        { name: 'TypeScript', icon: 'fas fa-code text-blue-400' },
        { name: 'HTML5 & CSS3', icon: 'fab fa-html5 text-orange-500' }
      ]
    },
    {
      category: 'Libraries & Styles',
      items: [
        { name: 'React.js', icon: 'fab fa-react text-sky-400' },
        { name: 'Next.js', icon: 'svg-next' },
        { name: 'Tailwind CSS', icon: 'fas fa-wind text-teal-400' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap text-purple-500' }
      ]
    },
    {
      category: 'Backend & DB',
      items: [
        { name: 'Node.js', icon: 'fab fa-node-js text-emerald-500' },
        { name: 'Express.js', icon: 'fas fa-server text-indigo-400' },
        { name: 'MongoDB', icon: 'fas fa-database text-green-500' },
        { name: 'REST APIs', icon: 'fas fa-project-diagram text-cyan-400' }
      ]
    },
    {
      category: 'Tools & Details',
      items: [
        { name: 'Git & GitHub', icon: 'fab fa-github text-text-main' },
        { name: 'Responsive Design', icon: 'fas fa-desktop text-accent-violet' },
        { name: 'English & Bangla', icon: 'fas fa-language text-accent-pink' }
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 md:py-32 bg-bg-primary relative z-10">
      <div className="max-w-5xl w-[90%] mx-auto">
        
        {/* Experience Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-main font-headings mb-12 flex items-center">
          Experience<span className="text-accent-pink">.</span>
        </h2>

        {/* Experience Layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start min-h-[300px] mb-24">
          {/* Vertical Tabs Left */}
          <div className="flex md:flex-col flex-row overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-glass-border w-full md:w-48 shrink-0 pb-2 md:pb-0 scrollbar-none">
            {experienceData.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-3.5 px-5 text-left font-headings text-sm md:text-base font-semibold transition-all duration-300 focus:outline-none whitespace-nowrap md:border-l-3 border-b-3 md:border-b-0 -mb-[3px] md:-mb-0 md:-ml-[3px] cursor-pointer ${
                  activeTab === index
                    ? 'border-accent-pink text-accent-pink bg-accent-pink/5 font-bold shadow-[inset_1px_0_0_rgba(217,70,239,0.1)]'
                    : 'border-transparent text-text-muted hover:text-text-main hover:bg-bg-secondary/40'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Details Right - Premium card container with fadeInUp transition */}
          <div
            key={activeTab}
            className="flex-1 w-full animate-fade-in-up bg-bg-secondary/40 border border-glass-border rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden group hover:shadow-md hover:border-accent-pink/20 transition-all duration-500"
          >
            {/* Subtle Ambient Radial Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-pink/5 via-transparent to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h3 className="text-xl md:text-2xl font-bold text-text-main font-headings relative z-10">
              {experienceData[activeTab].role}{' '}
              {experienceData[activeTab].url ? (
                <a
                  href={experienceData[activeTab].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-pink hover:underline transition-all duration-300"
                >
                  @ {experienceData[activeTab].company}
                </a>
              ) : (
                <span className="text-accent-pink">@ {experienceData[activeTab].company}</span>
              )}
            </h3>
            <span className="text-xs text-text-muted font-headings font-semibold mt-1.5 block tracking-wider uppercase relative z-10">
              {experienceData[activeTab].timeframe}
            </span>

            <ul className="mt-8 space-y-4 relative z-10">
              {experienceData[activeTab].bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-3 text-text-muted text-sm md:text-base leading-relaxed group/bullet">
                  <span className="text-accent-pink group-hover/bullet:scale-125 transition-transform duration-300 text-lg shrink-0 mt-0.5 select-none font-bold">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-main font-headings mb-12 flex items-center">
          Skills<span className="text-accent-pink">.</span>
        </h2>

        {/* Skills Columns - Beautiful hover card containers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {skillsData.map((col, index) => (
            <div
              key={index}
              className="flex flex-col bg-bg-secondary/40 border border-glass-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-bg-secondary/80 hover:border-accent-pink/20 group/skillcol"
            >
              <h4 className="text-base md:text-lg font-bold text-text-main font-headings mb-5 pb-2 border-b border-glass-border flex items-center justify-between">
                <span>{col.category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-pink group-hover/skillcol:scale-125 transition-transform duration-300" />
              </h4>
              <ul className="space-y-3">
                {col.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm md:text-base text-text-muted transition-colors duration-300 hover:text-text-main flex items-center gap-3 group/skillitem"
                  >
                    <span className="w-5 h-5 flex items-center justify-center text-sm group-hover/skillitem:scale-115 transition-transform duration-300 shrink-0">
                      {item.icon === 'svg-next' ? (
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="90" cy="90" r="90" fill="#0f172a" />
                          <path d="M149.508 157.52L86.1349 76H73v52h10.8901V90.4132L138.846 160.77C142.593 159.813 146.163 158.724 149.508 157.52Z" fill="#ffffff" />
                          <path d="M115 76h11v52h-11z" fill="#ffffff" />
                        </svg>
                      ) : (
                        <i className={`${item.icon} text-base`}></i>
                      )}
                    </span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
