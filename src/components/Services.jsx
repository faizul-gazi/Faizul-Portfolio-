import React from 'react'

function Services() {
  const services = [
    {
      num: '01',
      title: 'React.js Front-End Development',
      desc: 'I build modern, interactive, and high-performing web interfaces using React.js. From dynamic components to API integration, I deliver clean, maintainable React projects.'
    },
    {
      num: '02',
      title: 'Figma/PSD to Pixel-Perfect Frontend Conversion',
      desc: 'I convert Figma, PSD, XD, and image files into responsive, pixel-perfect websites using HTML, CSS, Tailwind, Bootstrap, and React. Every section is clean, optimized, and mobile-friendly.'
    },
    {
      num: '03',
      title: 'Website Redesign & UI Improvement',
      desc: 'I improve outdated or poorly designed websites by enhancing UI/UX, navigation structure, speed, responsiveness, and overall user experience for better performance.'
    },
    {
      num: '04',
      title: 'Landing Page Design & Development',
      desc: 'I design and develop high-converting landing pages using HTML, CSS, Tailwind, and React. Perfect for marketing campaigns, product launches, and business promotion.'
    },
    {
      num: '05',
      title: 'Basic Digital Marketing Setup',
      desc: 'I help businesses set up their digital foundation—audience targeting, content direction, branding ideas, and essential optimization for better visibility and engagement.'
    },
    {
      num: '06',
      title: 'Machine Learning Model Development',
      desc: 'I build and train ML models (Regression, Classification, Clustering) using scikit-learn. I also evaluate, optimize, and deliver ready-to-use prediction systems or small web apps.'
    }
  ]

  return (
    <section id="services" className="py-24 md:py-32 relative z-10 bg-bg-primary">
      {/* Heading */}
      <div className="max-w-6xl w-[90%] mx-auto text-center mb-16 md:mb-24">
        <h2 className="text-xs uppercase tracking-[0.3em] text-text-main font-semibold font-headings relative pl-0 pb-3 before:content-[''] before:block before:h-[2px] before:w-20 before:bg-gradient-to-r before:from-accent-pink before:to-accent-violet before:absolute before:bottom-0 before:left-1/2 before:ml-[-40px]">
          What I Do?
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-text-main font-headings mt-6">
          How I can help your next project
        </p>
      </div>

      {/* Grid List */}
      <div className="max-w-6xl w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div
            className="bg-bg-secondary border border-glass-border hover:border-accent-pink/40 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent-pink/5 group flex flex-col justify-between"
            key={index}
          >
            <div className="item-service__content">
              <span className="text-4xl md:text-5xl font-extrabold font-headings bg-gradient-to-r from-accent-pink to-accent-violet bg-clip-text text-transparent mb-6 block">
                {service.num}.
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-text-main font-headings group-hover:text-accent-pink transition-colors duration-300 mb-4">
                {service.title}
              </h4>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
