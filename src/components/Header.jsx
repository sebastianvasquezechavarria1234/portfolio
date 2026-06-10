import { useState, useEffect } from 'react'
import { WavySvg, DropdownSvg, SocialLinks, ScrollTopSvg } from './Icons'
import GradualBlur from './GradualBlur'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollBtn, setShowScrollBtn] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

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
            <li>
              <a href="#experiencia">
                Experiencia
                <WavySvg />
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#proyectos">
                Proyectos
                <DropdownSvg />
              </a>
              <ul className="header-dropdown">
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/matter">Matter</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/Ford-Mustang">Ford Mustang</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/breef-version1.1">Breef</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/ginebra">Ginebra</a></li>
              </ul>
            </li>
            <li>
              <a href="#blog">
                Recursos de aprendizaje
                <WavySvg />
              </a>
            </li>
            <li>
              <a href="#taller">
                Laboratorio de estudio
                <WavySvg />
              </a>
            </li>
            <li>
              <a href="#sobre-mí">
                Sobre mí
                <WavySvg />
              </a>
            </li>
            <li></li>
          </ul>

          <ul>
            <li>
              <a id="header-btn-right" className={isScrolled ? 'header-btn-active' : ''} href="#contacto">
                Contacto
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
            <a href="#proyectos" onClick={closeMobile}>Proyectos</a>
            <ul className="mobile-menu-info">
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/matter">Matter</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/Ford-Mustang">Ford Mustang</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/breef-version1.1">Breef</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/ginebra">Ginebra</a></li>
            </ul>
          </li>
          <li><a href="#blog" onClick={closeMobile}>Recursos de aprendizaje</a></li>
          <li><a href="#taller" onClick={closeMobile}>Laboratorio de estudio</a></li>
          <li><a href="#sobre-mí" onClick={closeMobile}>Sobre mí</a></li>
          <li><a id="mobile-menu-cta" href="#contacto" onClick={closeMobile}>Contacto</a></li>

          <div className="hero-social">
            <ul>
              <SocialLinks />
            </ul>
          </div>
          <div className="copyright">
            <p>© 2024 Diseñado por Sebastián Vásquez Echavarría. Todos los copyright reservados.</p>
          </div>
        </ul>
      </section>
    </>
  )
}

export default Header
