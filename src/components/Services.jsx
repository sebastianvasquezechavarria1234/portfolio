import { ArrowSvg } from './Icons'

const services = [
  { icon: '/img/66937aa4ded16a33900a120093a9875b-removebg-preview.webp', title: 'Diseño web profesional', id: 'sec__2__card__1', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/5ac702ae36c9fd20f45061a194e2b006-removebg-preview.webp', title: 'Responsive Web Design', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/0a2228676ecc6efc845e105bb8f317e1-removebg-preview.webp', title: 'Subir sitios web a Internet', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/3f939c3223b1945290bbfd78ac10b303-removebg-preview.webp', title: 'Animación web interactiva con SVG', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
  { icon: '/img/725acc2b7723d42a91605796d7afde81-removebg-preview.webp', title: 'Optimización de imágenes y videos', wrapClass: 'cardDarkGrid sec__2__card', flex: false },
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
          <img src="/img/5ac702ae36c9fd20f45061a194e2b006-removebg-preview.webp" alt="iconos" />
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
              <img src="/img/0a2228676ecc6efc845e105bb8f317e1-removebg-preview.webp" alt="iconos" />
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
            <img src="/img/3f939c3223b1945290bbfd78ac10b303-removebg-preview.webp" alt="iconos" />
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
            <img src="/img/725acc2b7723d42a91605796d7afde81-removebg-preview.webp" alt="iconos" />
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
