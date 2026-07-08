import { useState } from 'react'

const NetworkSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-topology-star-3" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M6 12h4" /><path d="M14 12h4" /><path d="M15 7l-2 3" /><path d="M9 7l2 3" />
    <path d="M11 14l-2 3" /><path d="M13 14l2 3" />
  </svg>
)

const BrushSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brush" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
    <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
    <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
    <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
  </svg>
)

const SparklesSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sparkles" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
  </svg>
)

const Experience = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [showTooltipGP, setShowTooltipGP] = useState(false)
  const [isTooltipVisibleGP, setIsTooltipVisibleGP] = useState(false)
  const [showTooltipKT, setShowTooltipKT] = useState(false)
  const [isTooltipVisibleKT, setIsTooltipVisibleKT] = useState(false)

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseEnterGP = () => {
    setIsTooltipVisibleGP(true)
    setShowTooltipGP(true)
  }

  const handleMouseLeaveGP = () => {
    setShowTooltipGP(false)
    setTimeout(() => setIsTooltipVisibleGP(false), 300)
  }

  const handleMouseEnterKT = () => {
    setIsTooltipVisibleKT(true)
    setShowTooltipKT(true)
  }

  const handleMouseLeaveKT = () => {
    setShowTooltipKT(false)
    setTimeout(() => setIsTooltipVisibleKT(false), 300)
  }

  return (
    <section id="experiencia" className="experience" onMouseMove={handleMouseMove}>
      <div className="experience-header">
        <p id="underline">Experiencia Laboral</p>
        <h2>Mi experiencia de +4 años como diseñador web</h2>
        <p>Desarrollo servicios web personalizados enfocados en la eficiencia y la usabilidad, integrando diseños vanguardistas y soluciones innovadoras para crear experiencias digitales de alto impacto.</p>
      </div>

      {/* Card 1 - Futuro Puertas */}
      <div className="experience-item">
        <div className="experience-item-left">
          <h4 id="experience-bg">
            <span><NetworkSvg /></span>
            <span>
              AlmavivA Experience
              <p className=' h-[20px] w-[20px]'></p>
              <p className='italic'>Medellin, Antioquia</p>
              <p className='italic'>Presencial</p>
            </span>
          </h4>
        </div>
        <div className="experience-item-right">
          <h4>
            <p>Abril 2026 - Octubre 2026</p>
            <p>Desarrollador Backend especializado en Python e Inteligencia Artificial</p>
          </h4>
          <p style={{ marginBottom: 0 }}>Especializado en Python, enfocado en el diseño e implementación de sistemas basados en inteligencia artificial. Participo en el desarrollo de una plataforma que integra dos módulos principales tipo CRUD: uno orientado a la gestión de agentes inteligentes, donde es posible adjuntar archivos y conectar APIs para enriquecer su contexto, y otro enfocado en conversaciones, que permite interactuar con estos agentes para obtener respuestas basadas en la información previamente cargada.</p>
          <p style={{ marginBottom: 0 }}>Además, colaboro en la integración con el frontend, asegurando la comunicación eficiente entre los servicios y la experiencia del usuario. Mi enfoque está en construir sistemas escalables, inteligentes y funcionales que permitan la interacción fluida entre datos, APIs y modelos de IA.</p>
        </div>
      </div>


      {/* Card 2 - INGENIATEC */}
      <div className="experience-item">
        <div className="experience-item-left">
          <h4 id="experience-bg">
            <span><SparklesSvg /></span>
            <span>
              Genesis Pixel
              <p className=' h-[20px] w-[20px]'></p>
              <p className='italic'>Medellin, Antioquia</p>
              <p className='italic'>Autonomo</p></span>
          </h4>
        </div>

        <div className="experience-item-right">
          <h4>
            <p>Agosto del 2023 - actualidad</p>
            <p>Fundador y desarrollador web creativo</p>
          </h4>
          <p>GenesisPixel es una plataforma en desarrollo enfocada en la enseñanza y exploración de tecnologías modernas para la creación de experiencias web interactivas.</p>
          <p>Actualmente trabajo en la planificación, diseño y desarrollo de contenido educativo, ejemplos prácticos y demostraciones visuales para ayudar a desarrolladores a aprender tecnologías utilizadas en la web moderna. Entre los objetivos de la plataforma se encuentran:</p>
          <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.7' }}>Crear rutas de aprendizaje completas sobre CSS Animations, GSAP, Three.js, WebGL y desarrollo frontend moderno, desarrollar ejemplos interactivos y proyectos prácticos para facilitar el aprendizaje, publicar documentación clara y estructurada para cada tecnología, construir experiencias visuales enfocadas en animaciones, gráficos 3D e interfaces modernas, investigar y compartir buenas prácticas de desarrollo web, rendimiento y experiencia de usuario, desarrollar una biblioteca de recursos y demostraciones para la comunidad de desarrolladores.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '15px' }} onMouseEnter={handleMouseEnterGP} onMouseLeave={handleMouseLeaveGP}>
            <a href="https://genesis-pixel.vercel.app/" target="_blank" rel="noopener noreferrer" className="genesis-pixel-img">
              <img src="/img/experience/genesis-pixel/hero.jpg" alt="Hero" />
            </a>
            <a href="https://genesis-pixel.vercel.app/" target="_blank" rel="noopener noreferrer" className="genesis-pixel-img">
              <img src="/img/experience/genesis-pixel/grid-1.jpg" alt="Grid 1" />
            </a>
            <a href="https://genesis-pixel.vercel.app/" target="_blank" rel="noopener noreferrer" className="genesis-pixel-img">
              <img src="/img/experience/genesis-pixel/grid-2.jpg" alt="Grid 2" />
            </a>
            <a href="https://genesis-pixel.vercel.app/" target="_blank" rel="noopener noreferrer" className="genesis-pixel-img">
              <img src="/img/experience/genesis-pixel/transitions.jpg" alt="Transitions" />
            </a>
            <a href="https://genesis-pixel.vercel.app/" target="_blank" rel="noopener noreferrer" className="genesis-pixel-img">
              <img src="/img/experience/genesis-pixel/transform.jpg" alt="Transform" />
            </a>
            <a href="https://genesis-pixel.vercel.app/" target="_blank" rel="noopener noreferrer" className="genesis-pixel-img">
              <img src="/img/experience/genesis-pixel/keyframes.jpg" alt="Keyframes" />
            </a>
            <a href="https://genesis-pixel.vercel.app/" target="_blank" rel="noopener noreferrer" className="genesis-pixel-img">
              <img src="/img/experience/genesis-pixel/interacitions.jpg" alt="Interactions" />
            </a>
          </div>
          {isTooltipVisibleGP && (
            <div className={`genesis-pixel-tooltip ${showTooltipGP ? 'tooltip-show' : 'tooltip-hide'}`} style={{
              position: 'fixed',
              left: mousePos.x + 15,
              top: mousePos.y + 15,
            }}>
              Redireccionar a Genesis Pixel
            </div>
          )}
        </div>
      </div>

      {/* Card 3 - Guinness */}
      <div className="experience-item">
        <div className="experience-item-left">
          <h4 id="experience-bg">
            <span><BrushSvg /></span>
            <span>
              Kaoticode
              <p className=' h-[20px] w-[20px]'></p>
              <p className='italic'>Medellin, Antioquia</p>
              <p className='italic'>Remoto</p></span>
          </h4>
        </div>
        <div className="experience-item-right">
          <h4>
            <p>Enero del 2023 - julio 2023</p>
            <p>Desarrollador Frontend UI-UX</p>
          </h4>
          <p>Participé como Desarrollador Frontend Freelance en el rediseño completo de la interfaz web de Kaoticode, enfocándome en mejorar la experiencia de usuario, la apariencia visual y la adaptabilidad en diferentes dispositivos.</p>
          <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.7' }}>Rediseñé la interfaz principal de la plataforma para lograr una experiencia más moderna e intuitiva, implementé mejoras en la navegación y la organización visual del contenido, optimicé el diseño responsive para dispositivos móviles, tabletas y computadoras, colaboré en la mejora de la experiencia de usuario (UX) y la interfaz de usuario (UI), apliqué buenas prácticas de desarrollo frontend para mejorar la usabilidad y el rendimiento del sitio web.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '15px' }}>
            <div className="genesis-pixel-img" style={{ opacity: 0.5 }}>
              <img src="/img/experience/kaoticode/hero.jpg" alt="Hero" />
            </div>
            <div className="genesis-pixel-img" style={{ opacity: 0.5 }}>
              <img src="/img/experience/kaoticode/info.jpg" alt="Info" />
            </div>
            <div className="genesis-pixel-img" style={{ opacity: 0.5 }}>
              <img src="/img/experience/kaoticode/grid.jpg" alt="Grid" />
            </div>
            <div className="genesis-pixel-img" style={{ opacity: 0.5 }}>
              <img src="/img/experience/kaoticode/proyects.jpg" alt="Projects" />
            </div>
            <div className="genesis-pixel-img" style={{ opacity: 0.5 }}>
              <img src="/img/experience/kaoticode/services.jpg" alt="Services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
