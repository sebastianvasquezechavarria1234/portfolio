import { ArrowSvg } from './Icons'

const services = [
  { icon: '/img/icono-diseno-web.webp', title: 'Diseño web profesional', id: 'sec__2__card__1', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/icono-responsive.webp', title: 'Responsive Web Design', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/icono-despliegue.webp', title: 'Subir sitios web a Internet', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/icono-animacion.webp', title: 'Animación web interactiva con SVG', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/icono-optimizacion.webp', title: 'Optimización de imágenes y videos', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
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
          <img src="/img/icono-diseno-web.webp" alt="iconos" />
          <h3>Diseño web profesional</h3>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234?tab=repositories">
          Ir a Github
          <ArrowSvg />
        </a>
      </div>
      <p>2024</p>
    </div>

    <div className="sec__2__flex">
      {/* Card 2 - left column */}
      <div className="cardDarkGrid sec__2__card">
        <div className="sec__2__card__ctn__img__tt">
          <img src="/img/icono-responsive.webp" alt="iconos" />
          <h3>Responsive Web Design</h3>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
            Ir a Github
            <ArrowSvg />
          </a>
        </div>
        <p>2024</p>
      </div>

      {/* Cards 3, 4, 5 - right flexbox */}
      <div className="sec__2__flex__flexbox">
        <div className="cardDarkGrid sec__2__card">
          <div className="sec__2__card__ctn__img__tt">
            <div className="sec__2__card__flex">
              <img src="/img/icono-despliegue.webp" alt="iconos" />
              <h3>Subir sitios web a Internet</h3>
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
              Ir a Github
              <ArrowSvg />
            </a>
          </div>
          <p>2024</p>
        </div>

        <div className="cardDarkGrid sec__2__card">
          <div className="sec__2__card__ctn__img__tt">
            <img src="/img/icono-animacion.webp" alt="iconos" />
            <h3>Animación web interactiva con SVG</h3>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
              Ir a Github
              <ArrowSvg />
            </a>
          </div>
          <p>2024</p>
        </div>

        <div className="cardDarkGrid sec__2__card">
          <div className="sec__2__card__ctn__img__tt">
            <img src="/img/icono-optimizacion.webp" alt="iconos" />
            <h3>Optimización de imágenes y videos</h3>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
              Ir a Github
              <ArrowSvg />
            </a>
          </div>
          <p>2024</p>
        </div>
      </div>
    </div>
  </section>
)

export default Services
