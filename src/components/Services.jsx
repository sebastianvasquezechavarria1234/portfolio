import { ArrowSvg } from './Icons'

const services = [
  { icon: '/img/service-design.webp', title: 'Arquitectura de Sistemas Web Escalables', id: 'sec__2__card__1', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/service-code.webp', title: 'Despliegues Cloud de Escala', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/service-seo.webp', title: 'Diseño UI/UX de Élite', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/service-responsive.webp', title: 'Arquitectura de Sistemas de Datos', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/service-support.webp', title: 'Integración de Agentes de IA Web', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
]

const ServiceCard = ({ icon, title }) => (
  <div className="sec__2__card__ctn__img__tt">
    <div className="sec__2__card__flex">
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
  <section className="sec__2">
    <div className="sec__2__tt">
      <p id="underline">Servicios</p>
      <h2>Transformemos tu empresa con mis soluciones de software</h2>
    </div>

    {/* Card 1 - full width */}
    <div id="sec__2__card__1" className="cardDarkGrid sec__2__card">
      <div className="sec__2__card__ctn__img__tt">
        <div className="sec__2__card__flex">
          <img src="/img/service-design.webp" alt="iconos" />
          <h3>Arquitectura de Sistemas Web Escalables</h3>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234?tab=repositories">
          Ir a Github
          <ArrowSvg />
        </a>
      </div>
      <p>Arquitectura</p>
    </div>

    <div className="sec__2__flex">
      {/* Card 2 - left column */}
      <div className="cardDarkGrid sec__2__card despliegues-card">
        <div className="sec__2__card__ctn__img__tt">
          <div className="sec__2__card__flex despliegues-flex">
            <img src="/img/service-code.webp" alt="iconos" className="despliegues-img" />
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
      <div className="sec__2__flex__flexbox">
        <div className="cardDarkGrid sec__2__card">
          <div className="sec__2__card__ctn__img__tt">
            <div className="sec__2__card__flex">
              <img src="/img/service-seo.webp" alt="iconos" />
              <h3>Diseño UI/UX de Élite</h3>
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
              Ir a Github
              <ArrowSvg />
            </a>
          </div>
          <p>Pixel perfect</p>
        </div>

        <div className="cardDarkGrid sec__2__card">
          <div className="sec__2__card__ctn__img__tt">
            <img src="/img/service-responsive.webp" alt="iconos" />
            <h3>Arquitectura de Sistemas de Datos</h3>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
              Ir a Github
              <ArrowSvg />
            </a>
          </div>
          <p>Infraestructura</p>
        </div>

        <div className="cardDarkGrid sec__2__card">
          <div className="sec__2__card__ctn__img__tt">
            <img src="/img/service-support.webp" alt="iconos" />
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
