import React from 'react'

function Services() {
  const services = [
    {
      num: '01',
      title: 'Full-Stack MERN Development',
      desc: 'I develop highly functional, secure, and scalable web applications using MongoDB, Express.js, React.js, and Node.js. I design clean backend architectures and integrate robust APIs.'
    },
    {
      num: '02',
      title: 'Next.js & SEO Optimization',
      desc: 'I create highly optimized, server-side rendered (SSR), and SEO-friendly web applications using Next.js. I focus on core web vitals, speed performance, and modern web standards.'
    },
    {
      num: '03',
      title: 'Pixel-Perfect Frontend Conversion',
      desc: 'I specialize in turning Figma and UI/UX designs into responsive, pixel-perfect frontends. I implement clean layouts with React.js, Tailwind CSS, and Bootstrap.'
    },
    {
      num: '04',
      title: 'Machine Learning & AI Integration',
      desc: 'Leveraging my academic research background, I build and integrate ML and AI prediction systems into web applications, creating intelligent and data-driven user experiences.'
    },
    {
      num: '05',
      title: 'UI/UX & Performance Tuning',
      desc: 'I improve existing web platforms by fixing user flows, solving navigation bottlenecks, and optimizing overall speed and responsiveness to ensure a premium user experience.'
    },
    {
      num: '06',
      title: 'Digital Marketing & Strategy',
      desc: 'Combining technical skills with digital marketing insight, I analyze user behavior to optimize product positioning, search discoverability, and strategic user engagement.'
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
