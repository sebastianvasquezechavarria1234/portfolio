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

const Experience = () => (
  <section id="experiencia" className="sec__experience">
    <div className="sec__experience__tt">
      <p id="underline">Experiencia Laboral</p>
      <h2>Mi experiencia de +2 años como diseñador web</h2>
      <p>Desarrollo servicios web personalizados, enfocados en la eficiencia y usabilidad, utilizando diseños web y soluciones innovadoras.</p>
    </div>

    {/* Card 1 - Futuro Puertas */}
    <div className="sec__experience__card">
      <div className="sec__experience__card__left">
        <h4 id="experienceBg">
          <span><NetworkSvg /></span>
          <span>Futuro puertas</span>
        </h4>
      </div>
      <div className="sec__experience__card__right">
        <h4>
          <p>Enero 2023 - Noviembre 2023</p>
          <p>Diseñador web &amp; analista de datos</p>
        </h4>
        <p>Fui responsable del desarrollo front-end completo de la aplicación, incluyendo la creación de la interfaz de usuario, la implementación de diseño responsivo y la funcionalidad general de la plataforma. Desarrollado utilizando HTML, CSS, JavaScript y librerías modernas de front-end para asegurar una experiencia de usuario fluida y adaptable en todos los dispositivos. Para la planificación visual, utilicé Figma y Photoshop para estructurar y prototipar las vistas antes de la implementación.</p>
        <p>El proyecto contó con una sección interactiva innovadora que permitía a los usuarios personalizar visualmente puertas en un lienzo en blanco, modificando colores, añadiendo imágenes y ajustando estilos para una experiencia intuitiva y personalizada.</p>
        <p>Además, implementé integraciones de API para la gestión de datos y funciones dinámicas del sistema, asegurando una comunicación fluida entre la interfaz y los datos centrales de la aplicación. Este proyecto fortaleció mi experiencia en desarrollo front-end, diseño de UI e integración de experiencia de usuario.</p>
      </div>
    </div>

    {/* Card 2 - INGENIATEC */}
    <div className="sec__experience__card">
      <div className="sec__experience__card__left">
        <h4 id="experienceBg">
          <span><BrushSvg /></span>
          <span>INGENIATEC - Séptima muestra</span>
        </h4>
      </div>
      <div className="sec__experience__card__right">
        <h4>
          <p>Noviembre 2023</p>
          <p>Participante &amp; Desarrollador</p>
        </h4>
        <p>Participé en la 7ª muestra de INGENIATEC debido al impacto de mi proyecto "Futuro Puertas", el cual destacó por su complejidad funcional y la aplicación práctica de mi formación técnica.</p>
        <p>Presenté y expliqué la arquitectura del proyecto, las tecnologías utilizadas y su funcionalidad principal a instructores y asistentes, demostrando las habilidades adquiridas durante mi proceso de desarrollo.</p>
        <p>Esta experiencia me permitió compartir mis conocimientos, recibir retroalimentación profesional y mostrar mi trabajo dentro de un entorno institucional y académico.</p>
      </div>
    </div>

    {/* Card 3 - Guinness */}
    <div className="sec__experience__card">
      <div className="sec__experience__card__left">
        <h4 id="experienceBg">
          <span><SparklesSvg /></span>
          <span>Guinness World Record</span>
        </h4>
      </div>
      <div className="sec__experience__card__right">
        <h4>
          <p>Octubre 2022</p>
          <p>Participante</p>
        </h4>
        <p>Participé en una sesión masiva de programación en Medellín que logró un Récord Guinness por la clase de software más grande del mundo. Esta iniciativa reunió a miles de participantes para promover la educación tecnológica y el interés por el desarrollo de software.</p>
        <p>Durante el evento, obtuve mis primeros conocimientos formales sobre programación, incluyendo conceptos de lógica básica, estructura de software y la importancia de la tecnología en el mundo moderno. Esta chispa inicial me motivó a seguir un aprendizaje autodidacta y a especializarme en el desarrollo web.</p>
        <p>Más allá del aprendizaje técnico, participar en un evento de tal magnitud me permitió comprender el impacto de la educación tecnológica e impulsó mi motivación para aplicar estas habilidades en proyectos personales y académicos.</p>
      </div>
    </div>
  </section>
)

export default Experience
