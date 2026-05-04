import { useState, useEffect } from 'react'
import { WavySvg, DropdownSvg, SocialLinks } from './Icons'
import GradualBlur from './GradualBlur'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scroll = document.documentElement.scrollTop
      setIsScrolled(scroll > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileToggle = () => setMobileOpen(prev => !prev)

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      {/* Fixed back-to-top button */}
      <div className="fixed__button">
        <ul>
          <li id="btnTop" style={{ transform: isScrolled ? 'scale(1)' : 'scale(0)' }}>
            <a href="#"></a>
          </li>
        </ul>
      </div>

      <header>
        <GradualBlur
          target="parent"
          position="top"
          height="100%"
          strength={3}
          divCount={10}
          curve="ease-out"
          opacity={isScrolled ? 1 : 0}
          zIndex={-1}
          style={{ transition: 'opacity 0.3s' }}
        />
        <nav>
          <ul>
            <li>
              <a href="#"><img src="/img/favicon-s.webp" alt="logo" />Sebas</a>
            </li>
            <li>
              <a href="#experiencia">
                Experiencia
                <WavySvg />
              </a>
            </li>
            <li className="header__li">
              <a href="#proyectos">
                Proyectos
                <DropdownSvg />
              </a>
              <ul className="header__info">
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
              <a id="header__btn__right" className={isScrolled ? 'headerBtnRightActive' : ''} href="#contacto">
                Contacto
              </a>
            </li>
            <li></li>
            <li>
              <div className="icon__mn" onClick={handleMobileToggle}>
                <span className={`icon__mn__span${mobileOpen ? ' iconMnSpanActive0' : ''}`}></span>
                <span className={`icon__mn__span${mobileOpen ? ' iconMnSpanActive1' : ''}`}></span>
                <span className={`icon__mn__span${mobileOpen ? ' iconMnSpanActive2' : ''}`}></span>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile menu */}
      <section className={`sec__mn__responsive${mobileOpen ? ' secMnResponsiveActive' : ''}`}>
        <ul className={`sec__mn__responsiveUl${mobileOpen ? ' secMnResponsiveUlActive' : ''}`}>
          <li><a href="#experiencia" onClick={closeMobile}>Experiencia</a></li>
          <li>
            <a href="#proyectos" onClick={closeMobile}>Proyectos</a>
            <ul className="sec__mn__responsive__info">
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/matter">Matter</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/Ford-Mustang">Ford Mustang</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/breef-version1.1">Breef</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234/ginebra">Ginebra</a></li>
            </ul>
          </li>
          <li><a href="#blog" onClick={closeMobile}>Recursos de aprendizaje</a></li>
          <li><a href="#taller" onClick={closeMobile}>Laboratorio de estudio</a></li>
          <li><a href="#sobre-mí" onClick={closeMobile}>Sobre mí</a></li>
          <li><a id="mnResponsiveBtnLinear" href="#contacto" onClick={closeMobile}>Contacto</a></li>

          <div className="sec__hero__tt__bottom">
            <ul>
              <SocialLinks />
            </ul>
          </div>
          <div className="derechos">
            <p>© 2024 Diseñado por Sebastián Vásquez Echavarría. Todos los derechos reservados.</p>
          </div>
        </ul>
      </section>
    </>
  )
}

export default Header
