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
        <p id="underline">Lo que he vivido</p>
        <h2>4 años construyendo cosas que me enorgullecen — y contando</h2>
        <p>Cada proyecto que tomo es una oportunidad de hacer algo que realmente se sienta diferente — funcional, bonito y pensado para las personas que lo van a usar.</p>
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
            <p>Dándole inteligencia al backend — Python & IA</p>
          </h4>
          <p style={{ marginBottom: 0 }}>Trabajo como desarrollador Backend especializado en Python e IA, construyendo una plataforma donde la inteligencia artificial cobra vida. El sistema cuenta con dos módulos clave: uno para gestionar agentes inteligentes — donde puedes adjuntar archivos y conectar APIs para darles contexto — y otro para conversar directamente con ellos y obtener respuestas basadas en esa información.</p>
          <p style={{ marginBottom: 0 }}>También colaboro en la integración con el frontend, asegurando que todo fluya de forma coherente entre los servicios y la experiencia del usuario. Me apasiona construir sistemas que sean inteligentes, escalables y, sobre todo, que realmente funcionen bien.</p>
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
            <p>Agosto del 2023 - Actualidad</p>
            <p>El que tuvo la idea, la construyó y sigue haciéndola crecer</p>
          </h4>
          <p>GenesisPixel es mi proyecto propio: una plataforma educativa que nació de las ganas de enseñar y compartir todo lo que he aprendido sobre el desarrollo web moderno. Aquí, la teoría se convierte en práctica con ejemplos visuales, animaciones reales y proyectos que puedes tocar y experimentar.</p>
          <p>Estoy construyendo rutas de aprendizaje completas sobre tecnologías como CSS Animations, GSAP, Three.js y WebGL — las herramientas que hacen que la web se vea y se sienta increíble. Todo acompañado de documentación clara, demos interactivas y buenas prácticas pensadas para que cualquier desarrollador pueda crecer al ritmo que quiera.</p>
          <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.7' }}>El objetivo es simple: que aprender a crear experiencias web visualmente poderosas sea accesible, divertido y, sobre todo, inspirador. GenesisPixel es la comunidad que me hubiera encantado tener cuando empecé.</p>
          <div className="experience-images" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '15px' }} onMouseEnter={handleMouseEnterGP} onMouseLeave={handleMouseLeaveGP}>
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
            <p>Enero del 2023 - Julio 2023</p>
            <p>Le di una nueva cara a Kaoticode — Frontend & UI/UX</p>
          </h4>
          <p>En Kaoticode tuve la oportunidad de llevar un rediseño completo de su plataforma web, transformando una interfaz existente en algo más moderno, limpio y fácil de usar. Un proyecto donde cada decisión de diseño tenía un propósito claro: mejorar la experiencia de quien navega.</p>
          <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.7' }}>Rediseñé la interfaz principal dándole una identidad visual más fresca e intuitiva, reorganicé la navegación y el contenido para que todo fuera más fácil de encontrar, y optimicé el diseño para que se viera impecable en cualquier dispositivo — desde el móvil hasta el escritorio. Siempre con foco en la usabilidad, el rendimiento y esas buenas prácticas que hacen la diferencia en el resultado final.</p>
          <div className="experience-images" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '15px' }}>
            <div className="genesis-pixel-img" style={{ opacity: 0.5, cursor: 'default' }}>
              <img src="/img/experience/kaoticode/hero.jpg" alt="Hero" />
            </div>
            <div className="genesis-pixel-img" style={{ opacity: 0.5, cursor: 'default' }}>
              <img src="/img/experience/kaoticode/info.jpg" alt="Info" />
            </div>
            <div className="genesis-pixel-img" style={{ opacity: 0.5, cursor: 'default' }}>
              <img src="/img/experience/kaoticode/grid.jpg" alt="Grid" />
            </div>
            <div className="genesis-pixel-img" style={{ opacity: 0.5, cursor: 'default' }}>
              <img src="/img/experience/kaoticode/proyects.jpg" alt="Projects" />
            </div>
            <div className="genesis-pixel-img" style={{ opacity: 0.5, cursor: 'default' }}>
              <img src="/img/experience/kaoticode/services.jpg" alt="Services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
