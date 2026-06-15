import React, { useState } from 'react'

function Contact() {
  const [copied, setCopied] = useState(false)
  const emailAddress = 'faizul.thedeveloper@gmail.com'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10 bg-bg-primary text-center">
      {/* Heading */}
      <div className="max-w-6xl w-[90%] mx-auto mb-12 text-left">
        <h2 className="text-xs uppercase tracking-[0.3em] text-white font-semibold font-headings relative pl-0 pt-6 before:content-[''] before:block before:h-[2px] before:w-20 before:bg-gradient-to-r before:from-accent-pink before:to-accent-violet before:absolute before:top-0 before:left-0 mb-10">
          Get In Touch
        </h2>
      </div>

      <div className="max-w-4xl w-[90%] mx-auto relative px-4 md:px-0">
        {/* Glow effect behind the card */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/10 to-accent-cyan/10 blur-3xl -z-10 rounded-3xl" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-5xl mx-auto">
          {/* Email Card */}
          <div className="bg-bg-secondary border border-glass-border backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-md hover:border-accent-violet/30 transition-all duration-500 flex flex-col justify-between items-center relative overflow-hidden group">
            {/* Hover card border shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 via-transparent to-accent-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col items-center w-full">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-accent-pink/10 to-accent-cyan/10 border border-glass-border text-accent-cyan text-2xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              
              <h3 className="text-2xl font-bold text-text-main font-headings mb-3">
                Email Me
              </h3>
              <p className="text-sm text-text-muted max-w-xs mx-auto leading-relaxed mb-8">
                Drop me a line for inquiries, project proposals, or just to say hello.
              </p>
            </div>

            <div className="w-full mt-auto relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-bg-primary/55 border border-glass-border rounded-2xl p-2.5 backdrop-blur-md">
                <span className="font-headings text-sm sm:text-base font-bold text-text-main tracking-wide truncate max-w-full px-2 text-center sm:text-left w-full sm:w-auto">
                  {emailAddress}
                </span>
                
                <div className="flex items-center gap-1.5 w-full sm:w-auto shrink-0 justify-center">
                  <button
                    onClick={copyToClipboard}
                    className="flex-1 sm:flex-initial px-3.5 py-2 bg-bg-secondary hover:bg-bg-primary text-text-main rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 border border-glass-border focus:outline-none"
                  >
                    {copied ? (
                      <>
                        <i className="fas fa-check text-emerald-500"></i>
                        <span className="text-emerald-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <i className="far fa-copy text-text-muted"></i>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  
                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex-1 sm:flex-initial px-4 py-2 bg-gradient-to-r from-accent-pink to-accent-violet hover:from-accent-pink/90 hover:to-accent-violet/90 text-white rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 hover:shadow-[0_4px_15px_rgba(255,0,127,0.25)] focus:outline-none"
                  >
                    <i className="fas fa-paper-plane"></i>
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-bg-secondary border border-glass-border backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-md hover:border-emerald-500/30 transition-all duration-500 flex flex-col justify-between items-center relative overflow-hidden group">
            {/* Hover card border shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-center w-full">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-glass-border text-emerald-500 text-2xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <i className="fab fa-whatsapp"></i>
              </div>
              
              <h3 className="text-2xl font-bold text-text-main font-headings mb-3">
                WhatsApp Message
              </h3>
              <p className="text-sm text-text-muted max-w-xs mx-auto leading-relaxed mb-8">
                Start a conversation directly on WhatsApp for quick replies and project queries.
              </p>
            </div>

            <div className="w-full mt-auto relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-bg-primary/55 border border-glass-border rounded-2xl p-2.5 backdrop-blur-md">
                <span className="font-headings text-sm sm:text-base font-bold text-text-main tracking-wide truncate max-w-full px-2 text-center sm:text-left w-full sm:w-auto">
                  +8801776277198
                </span>
                
                <a
                  href="https://wa.me/8801776277198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-500/90 hover:to-teal-500/90 text-white rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 hover:shadow-[0_4px_15px_rgba(16,185,129,0.25)] focus:outline-none"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>Message Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info details */}
      <div className="max-w-6xl w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 mt-20 border-t border-glass-border pt-12">
        {/* WhatsApp details */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xs text-text-muted uppercase tracking-widest font-semibold font-headings mb-2">
            WhatsApp
          </h4>
          <a
            href="https://wa.me/8801776277198"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl md:text-3xl font-headings font-bold text-text-main hover:text-emerald-500 transition-colors duration-300 flex items-center gap-2.5"
          >
            <i className="fab fa-whatsapp text-emerald-500"></i>
            <span>+8801776277198</span>
          </a>
        </div>

        {/* Social details */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xs text-text-muted uppercase tracking-widest font-semibold font-headings mb-2">
            Social
          </h4>
          <ul className="flex items-center gap-4 text-xl sm:text-2xl md:text-3xl font-headings font-bold text-text-main">
            <li>
              <a
                href="https://www.linkedin.com/in/faizul-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-pink transition-colors duration-300"
              >
                Linkedin
              </a>
            </li>
            <li className="text-text-muted/30 select-none text-base">/</li>
            <li>
              <a
                href="https://www.github.com/faizul-gazi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-pink transition-colors duration-300"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
