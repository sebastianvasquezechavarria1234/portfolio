import { useState, useEffect, useRef } from 'react'
import { WavySvg, DropdownSvg, SocialLinks, ScrollTopSvg } from './Icons'
import GradualBlur from './GradualBlur'

const navItems = [
  { id: 'exp', href: '#experiencia', label: 'Experiencia' },
  { id: 'blog', href: '#blog', label: 'Aprende conmigo' },
  { id: 'taller', href: '#taller', label: 'Guías' },
  { id: 'sobre', href: '#sobre-mí', label: 'Conóceme' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollBtn, setShowScrollBtn] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [wavyStates, setWavyStates] = useState(() =>
    Object.fromEntries(navItems.map(item => [item.id, { key: 0, anim: '' }]))
  )

  const prevHovered = useRef(null)

  const handleWavyEnter = (id) => {
    const prevId = prevHovered.current
    prevHovered.current = id
    setWavyStates(prev => {
      const next = { ...prev }
      next[id] = { key: (prev[id]?.key || 0) + 1, anim: 'wavy-draw' }
      if (prevId && prevId !== id) {
        next[prevId] = { key: (prev[prevId]?.key || 0) + 1, anim: 'wavy-undraw' }
      }
      return next
    })
  }

  const handleWavyLeave = () => {
    const prevId = prevHovered.current
    if (prevId) {
      setWavyStates(prev => ({
        ...prev,
        [prevId]: { key: (prev[prevId]?.key || 0) + 1, anim: 'wavy-undraw' }
      }))
    }
    prevHovered.current = null
  }

  useEffect(() => {
    const handleScroll = () => {
      const scroll = document.documentElement.scrollTop
      setIsScrolled(scroll > 10)
      setShowScrollBtn(scroll > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMobileToggle = () => setMobileOpen(prev => !prev)

  const closeMobile = () => setMobileOpen(false)

  const scrollToTop = (e) => {
    if (e) e.preventDefault()
    if (window.lenis) {
      window.lenis.scrollTo(0)
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Fixed back-to-top button */}
      <div className="fixed-button">
        <ul>
          <li id="btnTop" onClick={scrollToTop} style={{ transform: showScrollBtn ? 'scale(1)' : 'scale(0)', cursor: 'pointer' }}>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <ScrollTopSvg />
            </a>
          </li>
        </ul>
      </div>

      <header>
        <GradualBlur
          target="parent"
          position="top"
          height="100%"
          strength={3}
          divCount={isMobile ? 2 : 10}
          curve="ease-out"
          opacity={isScrolled ? 1 : 0}
          zIndex={-1}
          style={{ transition: 'opacity 0.3s' }}
        />
        <nav>
          <ul>
            <li>
              <a href="#"><img src="/img/favicon.webp" alt="logo" />Sebas</a>
            </li>
            <li key={navItems[0].id}>
              <a href={navItems[0].href}
                onMouseEnter={() => handleWavyEnter(navItems[0].id)}
                onMouseLeave={handleWavyLeave}
              >
                {navItems[0].label}
                <WavySvg key={`${navItems[0].id}-${wavyStates[navItems[0].id]?.key || 0}`} animClass={wavyStates[navItems[0].id]?.anim || ''} />
              </a>
            </li>
            <li>
              <a href="#proyectos"
                onMouseEnter={() => handleWavyEnter('mitrabajo')}
                onMouseLeave={handleWavyLeave}
              >
                Mi trabajo
                <WavySvg key={`mitrabajo-${wavyStates['mitrabajo']?.key || 0}`} animClass={wavyStates['mitrabajo']?.anim || ''} />
              </a>
            </li>
            {navItems.slice(1).map(item => (
              <li key={item.id}>
                <a href={item.href}
                  onMouseEnter={() => handleWavyEnter(item.id)}
                  onMouseLeave={handleWavyLeave}
                >
                  {item.label}
                  <WavySvg key={`${item.id}-${wavyStates[item.id]?.key || 0}`} animClass={wavyStates[item.id]?.anim || ''} />
                </a>
              </li>
            ))}
            <li></li>
          </ul>

          <ul>
            <li>
              <a id="header-btn-right" className={isScrolled ? 'header-btn-active' : ''} href="#contacto">
                Hablemos
              </a>
            </li>
            <li></li>
            <li>
              <div className="hamburger" onClick={handleMobileToggle}>
                <span className={`hamburger-line${mobileOpen ? ' hamburger-open-0' : ''}`}></span>
                <span className={`hamburger-line${mobileOpen ? ' hamburger-open-1' : ''}`}></span>
                <span className={`hamburger-line${mobileOpen ? ' hamburger-open-2' : ''}`}></span>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile menu */}
      <section className={`mobile-menu${mobileOpen ? ' mobile-menu-active' : ''}`}>
        <div className="mobile-menu-close" onClick={closeMobile}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <ul className={`mobile-menu-list${mobileOpen ? ' mobile-menu-list-active' : ''}`}>
          <li><a href="#experiencia" onClick={closeMobile}>Experiencia</a></li>
          <li>
            <a href="#proyectos" onClick={closeMobile}>Mi trabajo</a>
            <ul className="mobile-menu-info">
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/matter">Matter</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/Ford-Mustang">Ford Mustang</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/breef-version1.1">Breef</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/ginebra">Ginebra</a></li>
            </ul>
          </li>
          <li><a href="#blog" onClick={closeMobile}>Aprende conmigo</a></li>
          <li><a href="#taller" onClick={closeMobile}>Guías</a></li>
          <li><a href="#sobre-mí" onClick={closeMobile}>Conóceme</a></li>
          <li><a id="mobile-menu-cta" href="#contacto" onClick={closeMobile}>Hablemos</a></li>

          <div className="hero-social">
            <ul>
              <SocialLinks />
            </ul>
          </div>
          <div className="copyright">
            <p>Diseñado y escrito en código por Sebastián Vásquez Echavarría © 2023 - 2026.</p>
          </div>
        </ul>
      </section>
    </>
  )
}

export default Header
