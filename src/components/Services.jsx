import { ArrowSvg } from './Icons'

const services = [
  { icon: '/img/66937aa4ded16a33900a120093a9875b-removebg-preview.webp', title: 'Arquitectura de Sistemas Web Escalables', id: 'sec__2__card__1', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/161ffac7279465cda56f45b52584be63-removebg-preview.webp', title: 'Despliegues Cloud de Escala', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/0a2228676ecc6efc845e105bb8f317e1-removebg-preview.webp', title: 'Diseño UI/UX de Élite', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/3f939c3223b1945290bbfd78ac10b303-removebg-preview.webp', title: 'Arquitectura de Sistemas de Datos', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/725acc2b7723d42a91605796d7afde81-removebg-preview.webp', title: 'Integración de Agentes de IA Web', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
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
          <img src="/img/66937aa4ded16a33900a120093a9875b-removebg-preview.webp" alt="iconos" />
          <h3>Arquitectura de Sistemas Web Escalables</h3>
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
          <div className="sec__2__card__flex" style={{ gap: '5px' }}>
            <img src="/img/161ffac7279465cda56f45b52584be63-removebg-preview.webp" alt="iconos" />
            <h3>Despliegues Cloud de Escala</h3>
          </div>
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
              <img src="/img/0a2228676ecc6efc845e105bb8f317e1-removebg-preview.webp" alt="iconos" />
              <h3>Diseño UI/UX de Élite</h3>
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
            <img src="/img/3f939c3223b1945290bbfd78ac10b303-removebg-preview.webp" alt="iconos" />
            <h3>Arquitectura de Sistemas de Datos</h3>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sebastianvasquezechavarria1234">
              Ir a Github
              <ArrowSvg />
            </a>
          </div>
          <p>2024</p>
        </div>

        <div className="cardDarkGrid sec__2__card">
          <div className="sec__2__card__ctn__img__tt">
            <img src="/img/725acc2b7723d42a91605796d7afde81-removebg-preview.webp" alt="iconos" />
            <h3>Integración de Agentes de IA Web</h3>
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
