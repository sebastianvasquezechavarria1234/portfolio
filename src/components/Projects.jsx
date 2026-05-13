import { useState } from 'react'
import { ArrowSvg, HoverLinePath } from './Icons'

const projects = [
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/matter',
    img: '/img/matter.webp',
    num: '#001',
    title: 'Matter',
    desc: 'Viernes de comentario...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/Ford-Mustang',
    img: '/img/mustang.webp',
    num: '#002',
    title: 'Ford Mustang',
    desc: '¿Estás listo para tomar el...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/breef-version1.1',
    img: '/img/breef.webp',
    num: '#003',
    title: 'Breef',
    desc: '¿Quieres encontrar trabajo...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/ginebra',
    img: '/img/ginebra.webp',
    num: '#004',
    title: 'Ginebra',
    desc: 'Doce sabores diferentes...',
  },
]

const ProjectCard = ({ href, img, num, title, desc }) => (
  <a target="_blank" rel="noopener noreferrer" href={href} className="cardDarkProyect sec__3__card">
    <div className="sec__3__card__img">
      <img src={img} alt={`Captura del proyecto ${title}`} />
      <HoverLinePath />
    </div>
    <div className="sec__3__card__flex">
      <div className="sec__3__card__flex___number">
        <h5>{num}</h5>
      </div>
      <div className="sec__3__card__tt">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <span>
        <ArrowSvg />
      </span>
    </div>
  </a>
)

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(false)

  return (
    <section id="proyectos" className="sec__3">
      <div className="sec__3__tt">
        <p id="underline">Proyectos</p>
        <h2>Mis Proyectos más destacados</h2>
      </div>

      <div className="sec__3__controls">
        <div 
          className="control__active__bg" 
          style={{ 
            transform: activeSlide ? 'translateX(calc(100% + 3px))' : 'translateX(0)' 
          }}
        ></div>
        <p
          id="controls1"
          className={!activeSlide ? 'controlActive' : 'controlDesactive'}
          onClick={() => setActiveSlide(false)}
        >
          Mis Proyectos
        </p>
        <p
          id="controls2"
          className={activeSlide ? 'controlActive' : 'controlDesactive'}
          onClick={() => setActiveSlide(true)}
        >
          Proyectos Clonados
        </p>
      </div>

      <div className="sec__3__slider">
        <ul id="sliderProyect" className={activeSlide ? 'sliderProyectActive' : ''}>
          {/* Slide 1 - placeholders (commented in original) */}
          <li id="sliderProyectLi1" className={activeSlide ? 'opacity0' : ''}>
            <div className="sec__3__flexbox">
              {projects.map((p) => (
                <ProjectCard key={p.num} {...p} />
              ))}
            </div>
          </li>

          {/* Slide 2 - my projects */}
          <li id="sliderProyectLi2" className={activeSlide ? 'opacity1' : ''}>
            <div className="sec__3__flexbox">
              {projects.map((p) => (
                <ProjectCard key={p.num + '-2'} {...p} />
              ))}
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects
