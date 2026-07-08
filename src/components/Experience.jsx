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
  const [showTooltip, setShowTooltip] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseEnter = () => {
    setIsTooltipVisible(true)
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
    setTimeout(() => setIsTooltipVisible(false), 300)
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
          <span>Futuro puertas</span>
        </h4>
      </div>
      <div className="experience-item-right">
        <h4>
          <p>Enero 2023 - Noviembre 2023</p>
          <p>Diseñador web &amp; analista de datos</p>
        </h4>
        <p>Fui responsable del desarrollo front-end completo de la aplicación, incluyendo la creación de la interfaz de usuario, la implementación de diseño responsivo y la funcionalidad general de la plataforma. Desarrollado utilizando HTML, CSS, JavaScript y librerías modernas de front-end para asegurar una experiencia de usuario fluida y adaptable en todos los dispositivos. Para la planificación visual, utilicé Figma y Photoshop para estructurar y prototipar las vistas antes de la implementación.</p>
        <p>El proyecto contó con una sección interactiva innovadora que permitía a los usuarios personalizar visualmente puertas en un lienzo en blanco, modificando colores, añadiendo imágenes y ajustando estilos para una experiencia intuitiva y personalizada.</p>
        <p>Además, implementé integraciones de API para la gestión de datos y funciones dinámicas del sistema, asegurando una comunicación fluida entre la interfaz y los datos centrales de la aplicación. Este proyecto fortaleció mi experiencia en desarrollo front-end, diseño de UI e integración de experiencia de usuario.</p>
        <div style={{ width: '100px', height: '55px', borderRadius: '5px', background: 'rgba(255, 255, 255, 0.1)', cursor: 'pointer', overflow: 'hidden' }}>
          <img src="/img/experience/genesis-pixel/hero.jpg" alt="Genesis Pixel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>    

    
    {/* Card 2 - INGENIATEC */}
    <div className="experience-item">
      <div className="experience-item-left">
        <h4 id="experience-bg">
          <span><SparklesSvg /></span>
          <span>Genesis Pixel</span>
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '15px' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
        {isTooltipVisible && (
          <div className={`genesis-pixel-tooltip ${showTooltip ? 'tooltip-show' : 'tooltip-hide'}`} style={{
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
          <span>Kaoticode</span>
        </h4>
      </div>
      <div className="experience-item-right">
        <h4>
          <p>Enero del 2023 - julio 2023</p>
          <p>Desarrollador Frontend UI-UX</p>
        </h4>
        <p>Participé como Desarrollador Frontend Freelance en el rediseño completo de la interfaz web de Kaoticode, enfocándome en mejorar la experiencia de usuario, la apariencia visual y la adaptabilidad en diferentes dispositivos.</p>
        <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.7' }}>Rediseñé la interfaz principal de la plataforma para lograr una experiencia más moderna e intuitiva, implementé mejoras en la navegación y la organización visual del contenido, optimicé el diseño responsive para dispositivos móviles, tabletas y computadoras, colaboré en la mejora de la experiencia de usuario (UX) y la interfaz de usuario (UI), apliqué buenas prácticas de desarrollo frontend para mejorar la usabilidad y el rendimiento del sitio web.</p>
       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '15px' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a href="https://kaoticode.vercel.app/" target="_blank" rel="noopener noreferrer" className="genesis-pixel-img">
            <img src="/img/experience/kaoticode/hero.jpg" alt="Hero" />
          </a>
          <a href="https://kaoticode.vercel.app/" target="_blank" rel="noopener noreferrer" className="genesis-pixel-img">
            <img src="/img/experience/kaoticode/info.jpg" alt="Info" />
          </a>
          <a href="https://kaoticode.vercel.app/" target="_blank" rel="noopener noreferrer" className="genesis-pixel-img">
            <img src="/img/experience/kaoticode/grid.jpg" alt="Grid" />
          </a>
          <a href="https://kaoticode.vercel.app/" target="_blank" rel="noopener noreferrer" className="genesis-pixel-img">
            <img src="/img/experience/kaoticode/proyects.jpg" alt="Projects" />
          </a>
          <a href="https://kaoticode.vercel.app/" target="_blank" rel="noopener noreferrer" className="genesis-pixel-img">
            <img src="/img/experience/kaoticode/services.jpg" alt="Services" />
          </a>
        </div>
        {isTooltipVisible && (
          <div className={`genesis-pixel-tooltip ${showTooltip ? 'tooltip-show' : 'tooltip-hide'}`} style={{
            position: 'fixed',
            left: mousePos.x + 15,
            top: mousePos.y + 15,
          }}>
            Redireccionar a Kaoticode
          </div>
        )}
      </div>
    </div>
  </section>
  )
}

export default Experience
