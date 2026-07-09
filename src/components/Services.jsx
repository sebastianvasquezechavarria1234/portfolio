import { ArrowSvg } from './Icons'

const services = [
  { icon: '/img/service-design.webp', title: 'Arquitectura de Sistemas Web Escalables', id: 'service-card-featured', wrapClass: 'card-dark-grid service-card', flex: false },
  { icon: '/img/service-code.webp', title: 'Despliegues Cloud de Escala', wrapClass: 'card-dark-grid service-card', flex: false },
  { icon: '/img/service-seo.webp', title: 'Diseño UI/UX de Élite', wrapClass: 'card-dark-grid service-card', flex: false },
  { icon: '/img/service-responsive.webp', title: 'Arquitectura de Sistemas de Datos', wrapClass: 'card-dark-grid service-card', flex: false },
  { icon: '/img/service-support.webp', title: 'Integración de Agentes de IA Web', wrapClass: 'card-dark-grid service-card', flex: false },
]

const ServiceCard = ({ icon, title }) => (
  <div className="service-card-content">
    <div className="service-card-row">
      <img src={icon} alt="iconos" />
      <h3>{title}</h3>
    </div>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234?tab=repositories">
      Mira el código
      <ArrowSvg />
    </a>
  </div>
)

const Services = () => (
  <section className="services">
    <div className="services-header">
      <p id="underline">Lo que puedo hacer por ti</p>
      <h2>Transformemos tus ideas en soluciones que realmente destaquen</h2>
    </div>

    {/* Card 1 - full width */}
    <div id="service-card-featured" className="card-dark-grid service-card">
      <div className="service-card-content">
        <div className="service-card-row">
          <img src="/img/sec-2-icon-1.webp" alt="iconos" />
          <h3>Sistemas Web que Crecen Contigo</h3>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234?tab=repositories">
          Mira el código
          <ArrowSvg />
        </a>
      </div>
      <p className="italic">Arquitectura sólida y escalable</p>
    </div>

    <div className="services-layout">
      {/* Card 2 - left column */}
      <div className="card-dark-grid service-card despliegues-card">
        <div className="service-card-content">
          <div className="service-card-row despliegues-flex">
            <img src="/img/sec-2-icon-2.webp" alt="iconos" className="despliegues-img" />
            <h3>Experiencias 3D que Atrapan</h3>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
            Mira el código
            <ArrowSvg />
          </a>
        </div>
        <p className="italic">Magia en el navegador</p>
      </div>

      {/* Cards 3, 4, 5 - right flexbox */}
      <div className="services-grid">
        <div className="card-dark-grid service-card">
          <div className="service-card-content">
            <div className="service-card-row">
              <img src="/img/sec-2-icon-3.webp" alt="iconos" />
              <h3>Diseño UI/UX que Enamora</h3>
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
              Mira el código
              <ArrowSvg />
            </a>
          </div>
          <p className="italic">Cada pixel cuenta</p>
        </div>

        <div className="card-dark-grid service-card">
          <div className="service-card-content">
            <img src="/img/sec-2-icon-4.webp" alt="iconos" />
            <h3>Datos Organizados y Seguros</h3>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
              Mira el código
              <ArrowSvg />
            </a>
          </div>
          <p className="italic">Infraestructura a prueba de todo</p>
        </div>

        <div className="card-dark-grid service-card">
          <div className="service-card-content">
            <img src="/img/sec-2-icon-5.webp" alt="iconos" />
            <h3>IA Integrada en tu Web</h3>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
              Mira el código
              <ArrowSvg />
            </a>
          </div>
          <p className="italic">El futuro, hoy</p>
        </div>
      </div>
    </div>
  </section>
)

export default Services
