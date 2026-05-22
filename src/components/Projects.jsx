import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowSvg, HoverLinePath, GithubSvg, ExternalSvg } from './Icons'

const myProjects = [
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/matter',
    img: '/img/project-matter.webp',
    num: '#001',
    title: 'Matter',
    desc: 'Viernes de comentario...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/Ford-Mustang',
    img: '/img/project-mustang.webp',
    num: '#002',
    title: 'Ford Mustang',
    desc: '¿Estás listo para tomar el...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/breef-version1.1',
    img: '/img/project-breef.webp',
    num: '#003',
    title: 'Breef',
    desc: '¿Quieres encontrar trabajo...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/ginebra',
    img: '/img/project-ginebra.webp',
    num: '#004',
    title: 'Ginebra',
    desc: 'Doce sabores diferentes...',
  },
]

const clonedProjects = [
  {
    href: '#',
    img: '/img/project-mustang.webp',
    num: '#005',
    title: 'Tesla Clone',
    desc: 'Réplica de la interfaz de Tesla...',
  },
  {
    href: '#',
    img: '/img/project-matter.webp',
    num: '#006',
    title: 'Apple Music Clone',
    desc: 'Experiencia musical inmersiva...',
  },
  {
    href: '#',
    img: '/img/project-ginebra.webp',
    num: '#007',
    title: 'Airbnb Clone',
    desc: 'Sistema de reservas dinámico...',
  },
  {
    href: '#',
    img: '/img/project-breef.webp',
    num: '#008',
    title: 'GitHub UI',
    desc: 'Rediseño de la interfaz de Git...',
  },
]

const uiuxComponents = [
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234',
    liveHref: 'https://example.com/botones',
    img: '/img/uiux-preview.webp',
    num: '#009',
    title: 'Botones Animados',
    desc: 'Sistema de botones con micro-interacciones y estados...',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234',
    liveHref: 'https://example.com/tarjetas',
    img: '/img/uiux-preview-2.webp',
    icon: '/img/uiux-icon-2.webp',
    num: '#010',
    title: 'Tarjetas de Producto',
    desc: 'Componentes de tarjeta con hover effects y transiciones...',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234',
    liveHref: 'https://example.com/formularios',
    img: '/img/uiux-preview.webp',
    num: '#011',
    title: 'Formularios UX',
    desc: 'Formularios con validación en tiempo real y feedback visual...',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234',
    liveHref: 'https://example.com/navegacion',
    img: '/img/uiux-preview.webp',
    num: '#012',
    title: 'Navegación Responsive',
    desc: 'Menús adaptativos con animaciones fluidas y accesibilidad...',
  },
]

const ProjectCard = ({ href, githubHref, liveHref, img, num, title, desc, icon }) => {
  const isUiux = githubHref && liveHref

  if (isUiux) {
    return (
      <div className="cardDarkProyect sec__3__card sec__3__card--uiux">
        <div className="sec__3__card__bg-deco"></div>
        <div className="sec__3__card__img">
          <img src={img} alt={`Captura del proyecto ${title}`} />
          <HoverLinePath />
        </div>
        <div className="sec__3__card__flex">
          <div className="flex items-center gap-3 w-[85%]">
            <div className="sec__3__card__flex___number">
              <h5 className="uiux-num">{num}</h5>
              <img className="uiux-icon" src={icon || '/img/uiux-icon.png'} alt={title} />
            </div>
            <div className="sec__3__card__tt">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </div>
          <div className="w-[15%] flex gap-2 items-center justify-end">
            <a href={liveHref} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center bg-white/[0.076] shadow-[4px_4px_20px_rgba(0,0,0,0.098)] rounded-lg" title="Ver página">
              <ExternalSvg className="w-5 h-5" />
            </a>
            <a href={githubHref} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center bg-white/[0.076] shadow-[4px_4px_20px_rgba(0,0,0,0.098)] rounded-lg" title="Ver código">
              <GithubSvg className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="cardDarkProyect sec__3__card"
    >
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
}

const Projects = () => {
  const [activeOption, setActiveOption] = useState('my')

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
            transform: activeOption === 'my'
              ? 'translateX(0)'
              : activeOption === 'cloned'
                ? 'translateX(calc(100% + 3px))'
                : 'translateX(calc(200% + 6px))'
          }}
        ></div>
        <p
          id="controls1"
          className={activeOption === 'my' ? 'controlActive' : 'controlDesactive'}
          onClick={() => setActiveOption('my')}
        >
          Mis Proyectos
        </p>
        <p
          id="controls2"
          className={activeOption === 'cloned' ? 'controlActive' : 'controlDesactive'}
          onClick={() => setActiveOption('cloned')}
        >
          Proyectos Clonados
        </p>
        <p
          id="controls3"
          className={activeOption === 'uiux' ? 'controlActive' : 'controlDesactive'}
          onClick={() => setActiveOption('uiux')}
        >
          Componentes UI-UX
        </p>
      </div>

      <div className="sec__3__slider" style={{ overflow: 'hidden', padding: '20px 0' }}>
        <motion.div
          style={{ display: 'flex', width: '300%' }}
          animate={{
            x: activeOption === 'my' ? '0%' : activeOption === 'cloned' ? '-33.333%' : '-66.666%',
          }}
          transition={{
            x: { type: 'spring', stiffness: 200, damping: 18 },
          }}
        >
          <motion.div
            className="sec__3__flexbox"
            style={{ width: '33.333%', margin: 0 }}
            animate={{ filter: activeOption !== 'my' ? 'blur(12px)' : 'blur(0px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {myProjects.map((p) => (
              <ProjectCard key={p.num} {...p} />
            ))}
          </motion.div>
          <motion.div
            className="sec__3__flexbox"
            style={{ width: '33.333%', margin: 0 }}
            animate={{ filter: activeOption !== 'cloned' ? 'blur(12px)' : 'blur(0px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {clonedProjects.map((p) => (
              <ProjectCard key={p.num} {...p} />
            ))}
          </motion.div>
          <motion.div
            className="sec__3__flexbox"
            style={{ width: '33.333%', margin: 0 }}
            animate={{ filter: activeOption !== 'uiux' ? 'blur(12px)' : 'blur(0px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {uiuxComponents.map((p) => (
              <ProjectCard key={p.num} {...p} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
