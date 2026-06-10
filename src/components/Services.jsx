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
      Ir a Github
      <ArrowSvg />
    </a>
  </div>
)

const Services = () => (
  <section className="services">
    <div className="services-header">
      <p id="underline">Servicios</p>
      <h2>Transformemos tu empresa con mis soluciones de software</h2>
    </div>

    {/* Card 1 - full width */}
    <div id="service-card-featured" className="card-dark-grid service-card">
      <div className="service-card-content">
        <div className="service-card-row">
          <img src="/img/sec-2-icon-1.webp" alt="iconos" />
          <h3>Arquitectura de Sistemas Web Escalables</h3>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234?tab=repositories">
          Ir a Github
          <ArrowSvg />
        </a>
      </div>
      <p>Arquitectura</p>
    </div>

    <div className="services-layout">
      {/* Card 2 - left column */}
      <div className="card-dark-grid service-card despliegues-card">
        <div className="service-card-content">
          <div className="service-card-row despliegues-flex">
            <img src="/img/sec-2-icon-2.webp" alt="iconos" className="despliegues-img" />
            <h3>Despliegues Cloud de Escala</h3>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
            Ir a Github
            <ArrowSvg />
          </a>
        </div>
        <p>Cloud & devops</p>
      </div>

      {/* Cards 3, 4, 5 - right flexbox */}
      <div className="services-grid">
        <div className="card-dark-grid service-card">
          <div className="service-card-content">
            <div className="service-card-row">
              <img src="/img/sec-2-icon-3.webp" alt="iconos" />
              <h3>Diseño UI/UX de Élite</h3>
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
              Ir a Github
              <ArrowSvg />
            </a>
          </div>
          <p>Pixel perfect</p>
        </div>

        <div className="card-dark-grid service-card">
          <div className="service-card-content">
            <img src="/img/sec-2-icon-4.webp" alt="iconos" />
            <h3>Arquitectura de Sistemas de Datos</h3>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
              Ir a Github
              <ArrowSvg />
            </a>
          </div>
          <p>Infraestructura</p>
        </div>

        <div className="card-dark-grid service-card">
          <div className="service-card-content">
            <img src="/img/sec-2-icon-5.webp" alt="iconos" />
            <h3>Integración de Agentes de IA Web</h3>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
              Ir a Github
              <ArrowSvg />
            </a>
          </div>
          <p>Inteligencia artificial</p>
        </div>
      </div>
    </div>
  </section>
)

export default Services
