import React, { useState, useEffect } from 'react'

function Testimonials() {
  const testimonials = [
    {
      text: '“Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure. simply dummy text of the printing and typesetting industry.”',
      name: 'Jay Shah',
      role: 'Founder at Icomatic Pvt Ltd',
      avatar: '/images/avatars/user-02.jpg'
    },
    {
      text: '“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure. simply dummy text of the printing and typesetting industry.”',
      name: 'Patrick Cary',
      role: 'Freelancer from USA',
      avatar: '/images/avatars/user-01.jpg'
    },
    {
      text: '“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.”',
      name: 'Dennis Jacques',
      role: 'Noon Inc',
      avatar: '/images/avatars/user-04.jpg'
    }
  ]

  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="bg-bg-secondary py-24 md:py-32 border-t border-b border-glass-border relative z-10">
      <div className="max-w-4xl w-[90%] mx-auto relative px-4 sm:px-12">
        {/* Navigation Arrows */}
        <button
          onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          className="absolute left-0 top-1/3 -translate-y-1/2 w-12 h-12 rounded-full bg-bg-secondary border border-glass-border hover:bg-accent-pink hover:border-accent-pink text-text-main hover:text-white flex items-center justify-center transition-all duration-300 z-20 focus:outline-none hidden sm:flex cursor-pointer"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left text-sm"></i>
        </button>
        <button
          onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
          className="absolute right-0 top-1/3 -translate-y-1/2 w-12 h-12 rounded-full bg-bg-secondary border border-glass-border hover:bg-accent-pink hover:border-accent-pink text-text-main hover:text-white flex items-center justify-center transition-all duration-300 z-20 focus:outline-none hidden sm:flex cursor-pointer"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right text-sm"></i>
        </button>

        {/* Carousel Container */}
        <div className="max-w-2xl mx-auto text-center overflow-hidden">
          {/* Carousel items sliding track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <div className="w-full shrink-0 px-2 sm:px-6" key={index}>
                <p className="text-lg sm:text-xl md:text-2xl text-text-main font-light leading-relaxed mb-10 font-body">
                  {item.text}
                </p>
                
                <div className="inline-flex items-center gap-5 text-left">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border-2 border-white/20"
                  />
                  <cite className="not-italic">
                    <strong className="block text-lg md:text-xl font-bold text-text-main font-headings leading-tight">
                      {item.name}
                    </strong>
                    <span className="text-xs text-text-muted mt-0.5 font-headings block">
                      {item.role}
                    </span>
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel indicator dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                index === active ? 'bg-accent-pink scale-125' : 'bg-white/25 hover:bg-white/50'
              }`}
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
