import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowSvg, HoverLinePath } from './Icons'

const myProjects = [
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

const clonedProjects = [
  {
    href: '#',
    img: '/img/mustang.webp',
    num: '#005',
    title: 'Tesla Clone',
    desc: 'Réplica de la interfaz de Tesla...',
  },
  {
    href: '#',
    img: '/img/matter.webp',
    num: '#006',
    title: 'Apple Music Clone',
    desc: 'Experiencia musical inmersiva...',
  },
  {
    href: '#',
    img: '/img/ginebra.webp',
    num: '#007',
    title: 'Airbnb Clone',
    desc: 'Sistema de reservas dinámico...',
  },
  {
    href: '#',
    img: '/img/breef.webp',
    num: '#008',
    title: 'GitHub UI',
    desc: 'Rediseño de la interfaz de Git...',
  },
]

const cardVariants = {
  hidden: { 
    opacity: 0, 
    filter: 'blur(20px)',
  },
  visible: (i) => ({
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: "easeOut",
    }
  }),
  exit: {
    opacity: 0,
    filter: 'blur(15px)',
    transition: { 
      duration: 0.3,
      ease: "easeIn"
    }
  }
}

const ProjectCard = ({ href, img, num, title, desc, index }) => (
  <motion.a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className="cardDarkProyect sec__3__card"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    custom={index}
  >
    <motion.div 
      className="sec__3__card__img"
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <img src={img} alt={`Captura del proyecto ${title}`} />
      <HoverLinePath />
    </motion.div>
    <div className="sec__3__card__flex">
      <div className="sec__3__card__flex___number">
        <h5>{num}</h5>
      </div>
      <motion.div 
        className="sec__3__card__tt"
        initial={{ opacity: 0, filter: 'blur(5px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ delay: index * 0.05 + 0.1 }}
      >
        <h4>{title}</h4>
        <p>{desc}</p>
      </motion.div>
      <span>
        <ArrowSvg />
      </span>
    </div>
  </motion.a>
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

      <div className="sec__3__slider" style={{ overflow: 'hidden', padding: '20px 0' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide ? 'cloned' : 'mine'}
            className="sec__3__flexbox"
          >
            {(activeSlide ? clonedProjects : myProjects).map((p, i) => (
              <ProjectCard 
                key={p.num} 
                {...p} 
                index={i} 
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
