import { SocialLinks } from './Icons'

const Gallery = () => (
  <section className="sec__galery">
    <div className="sec__galery__card">
      <img src="/img/glery-4.webp" alt="Colombia" />
      <div className="sec__galery__card__tt">
        <p>Medellín, Colombia</p>
      </div>
    </div>
    <div className="sec__galery__card">
      <img src="/img/glery-2.webp" alt="Colombia" />
      <div className="sec__galery__card__tt">
        <p>Medellín, Colombia</p>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <>
    <Gallery />

    <footer id="contacto">
      <p>© 2023 - 2026 Desarrollado por Sebastián Vásquez Echavarría. Casi todos los derechos reservados.</p>

      <div className="sec__hero__tt__bottom">
        <ul>
          <li>
            <a target="_blank" rel="noopener noreferrer" className="btnClickFooter" id="hero__flex__btn" href="https://github.com/sebastianvasquezechavarria1234">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" className="btnClickFooter" id="hero__flex__btn" href="https://www.linkedin.com/in/sebastian-vasquez-echavarria-839923302/">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" /><path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank" rel="noopener noreferrer" className="btnClick" id="hero__flex__btn"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sebasvasquez1314@gmail.com&su=Contacto%20desde%20la%20web&body=Hola%20Sebasti%C3%A1n%2C%0A%0A"
              aria-label="Redactar correo en Gmail a Sebastián"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" className="btnClickFooter" id="hero__flex__btn" href="https://www.instagram.com/sebastianechavarria1314/">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </>
)

export default Footer
