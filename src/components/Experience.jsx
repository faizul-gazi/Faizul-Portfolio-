import React, { useState } from 'react'

function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  const experienceData = [
    {
      company: 'QuickTutor',
      role: 'Frontend Developer',
      timeframe: 'Jan 2024 - Present',
      bullets: [
        'Developed and shipped highly interactive, responsive web applications for QuickTutor learning platform.',
        'Built and shipped student-tutor dashboards and a custom React admin panel for learning material control.',
        'Collaborated closely with UX designers to convert Figma mockups into pixel-perfect Tailwind layouts.'
      ]
    },
    {
      company: 'Gadget Shop',
      role: 'Frontend Developer',
      timeframe: 'Jul 2023 - Dec 2023',
      bullets: [
        'Improved existing gadget e-commerce systems by solving navigation bottlenecks, filter bugs, and cart issues.',
        'Optimized core web vitals and bundle performance, resulting in faster load times and page responsiveness.',
        'Designed and integrated modern administrative controls for inventory management.'
      ]
    },
    {
      company: 'Predictive ML',
      role: 'ML & Web Developer',
      timeframe: 'Jan 2023 - Jun 2023',
      bullets: [
        'Performed exploratory data analysis and data preprocessing on 54K entry diamond datasets using Python.',
        'Built and optimized a machine learning regression model to predict diamond prices based on cut and clarity.',
        'Developed a clean Flask web interface backend and React frontend for price prediction tools.'
      ]
    }
  ]

  const skillsData = [
    {
      category: 'Web Design',
      items: [
        { name: 'UI/UX Design', icon: 'fas fa-palette text-accent-pink' },
        { name: 'Responsive Design', icon: 'fas fa-desktop text-accent-violet' },
        { name: 'Wireframing', icon: 'fas fa-drafting-compass text-accent-cyan' },
        { name: 'User Research', icon: 'fas fa-search text-accent-pink' }
      ]
    },
    {
      category: 'Frontend',
      items: [
        { name: 'JavaScript', icon: 'fab fa-js text-amber-400' },
        { name: 'ReactJS', icon: 'fab fa-react text-sky-400' },
        { name: 'NextJS', icon: 'svg-next' },
        { name: 'CSS3', icon: 'fab fa-css3-alt text-blue-500' },
        { name: 'Tailwind CSS', icon: 'fas fa-wind text-teal-400' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'NodeJS', icon: 'fab fa-node-js text-emerald-500' },
        { name: 'MongoDB', icon: 'fas fa-database text-green-500' },
        { name: 'ExpressJS', icon: 'fas fa-server text-indigo-400' }
      ]
    },
    {
      category: 'Soft Skills',
      items: [
        { name: 'Effective communication', icon: 'fas fa-comments text-accent-pink' },
        { name: 'Collaboration', icon: 'fas fa-users text-accent-violet' },
        { name: 'Commitment', icon: 'fas fa-shield-alt text-accent-cyan' },
        { name: 'Leadership', icon: 'fas fa-crown text-amber-500' }
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
              {experienceData[activeTab].role} <span className="text-accent-pink">@ {experienceData[activeTab].company}</span>
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
