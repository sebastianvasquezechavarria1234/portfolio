import { SocialLinks } from './Icons'

const AwardSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-award-filled" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M19.496 13.983l1.966 3.406a1.001 1.001 0 0 1 -.705 1.488l-.113 .011l-.112 -.001l-2.933 -.19l-1.303 2.636a1.001 1.001 0 0 1 -1.608 .26l-.082 -.094l-.072 -.11l-1.968 -3.407a8.994 8.994 0 0 0 6.93 -3.999z" strokeWidth="0" fill="currentColor" />
    <path d="M11.43 17.982l-1.966 3.408a1.001 1.001 0 0 1 -1.622 .157l-.076 -.1l-.064 -.114l-1.304 -2.635l-2.931 .19a1.001 1.001 0 0 1 -1.022 -1.29l.04 -.107l.05 -.1l1.968 -3.409a8.994 8.994 0 0 0 6.927 4.001z" strokeWidth="0" fill="currentColor" />
    <path d="M12 2l.24 .004a7 7 0 0 1 6.76 6.996l-.003 .193l-.007 .192l-.018 .245l-.026 .242l-.024 .178a6.985 6.985 0 0 1 -.317 1.268l-.116 .308l-.153 .348a7.001 7.001 0 0 1 -12.688 -.028l-.13 -.297l-.052 -.133l-.08 -.217l-.095 -.294a6.96 6.96 0 0 1 -.093 -.344l-.06 -.271l-.049 -.271l-.02 -.139l-.039 -.323l-.024 -.365l-.006 -.292a7 7 0 0 1 6.76 -6.996l.24 -.004z" strokeWidth="0" fill="currentColor" />
  </svg>
)

const DownloadSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
    <path d="M7 11l5 5l5 -5" />
    <path d="M12 4l0 12" />
  </svg>
)

const Hero = () => (
  <section id="hero" className="sec__hero">
    <section className="sec__max__width">
      <div className="sec__hero__tt">
        <h1>Hola, soy Sebas. Tu diseñador web.</h1>
        <p>Me apasiona conceptualizar y diseñar experiencias digitales que no solo cautiven por su estética, sino que también sean plenamente accesibles y estén meticulosamente centradas en las necesidades del usuario.</p>

        <a href="#proyectos">
          Ver proyectos
          <AwardSvg />
        </a>

        <a download href="/img/Sebastián-CV.pdf">
          Ver CV
          <DownloadSvg />
        </a>

        <div className="sec__hero__tt__bottom">
          <ul>
            <SocialLinks />
          </ul>
        </div>
      </div>

      <picture>
        <img id="heroCircle" src="/img/hero.webp" alt="hero" />
        <div className="sec__hero__picture__card">
          <img src="/img/chino.webp" alt="text" />
          <img src="/img/letras-chinas.svg" alt="text" />
          <img src="/img/emogi-8.webp" alt="emoji" id="sec__hero__emogi3" />
          <img src="/img/emogi-corazon.png" alt="emoji" id="sec__hero__emogi4" />
        </div>
        <img src="/img/emogi-6.webp" alt="emoji" id="sec__hero__emogi1" />
        <img src="/img/emogi-5.webp" alt="emoji" id="sec__hero__emogi2" />
        <img src="/img/emogi-4.webp" alt="emoji" id="sec__hero__emogi5" />
      </picture>
    </section>
  </section>
)

export default Hero
