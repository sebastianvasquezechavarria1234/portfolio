import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowSvg, HoverLinePath, GithubSvg, ExternalSvg } from './Icons'

const myProjects = [
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/matter',
    img: '/img/project-matter.webp',
    bg: '/img/projects/bg-project-matter.webp',
    num: '#001',
    title: 'Matter',
    desc: 'Viernes de comentario...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/Ford-Mustang',
    img: '/img/project-mustang.webp',
    bg: '/img/projects/bg-project-mustang.webp',
    num: '#002',
    title: 'Ford Mustang',
    desc: '¿Estás listo para tomar el...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/breef-version1.1',
    img: '/img/project-breef.webp',
    bg: '/img/projects/bg-project-breef.webp',
    num: '#003',
    title: 'Breef',
    desc: '¿Quieres encontrar trabajo...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/ginebra',
    img: '/img/project-ginebra.webp',
    bg: '/img/projects/bg-project-ginebra.webp',
    num: '#004',
    title: 'Ginebra',
    desc: 'Doce sabores diferentes...',
  },
]

const clonedProjects = [
  {
    href: '#',
    img: '/img/projects/clone/bicicleta.jpg',
    bg: '/img/projects/bg-project-matter.webp',
    num: '#005',
    title: 'Bicicleta Clone',
    desc: 'Réplica de interfaz de bicicleta...',
  },
  {
    href: '#',
    img: '/img/projects/clone/breef.jpg',
    bg: '/img/projects/bg-project-mustang.webp',
    num: '#006',
    title: 'Breef Clone',
    desc: 'Experiencia musical inmersiva...',
  },
  {
    href: '#',
    img: '/img/projects/clone/galletas.jpg',
    bg: '/img/projects/bg-project-breef.webp',
    num: '#007',
    title: 'Galletas Clone',
    desc: 'Sistema de reservas dinámico...',
  },
  {
    href: '#',
    img: '/img/projects/clone/ginebra.jpg',
    bg: '/img/projects/bg-project-ginebra.webp',
    num: '#008',
    title: 'Ginebra Clone',
    desc: 'Rediseño de la interfaz de Git...',
  },
]

const uiuxComponents = [
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/circular-gallery',
    liveHref: 'https://circular-gallery-beta.vercel.app/',
    img: '/img/projects/ui-ux/circular-gallery.jpg',
    bg: '/img/projects/bg-project-matter.webp',
    num: '#010',
    title: 'Circular Gallery',
    desc: 'Galería circular con efectos 3D y transiciones...',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/infinite-menu',
    liveHref: 'https://sebas-infinite-menu.vercel.app/',
    img: '/img/projects/ui-ux/infinite-menu.jpg',
    bg: '/img/projects/bg-project-mustang.webp',
    num: '#011',
    title: 'Infinite Menu',
    desc: 'Menú infinito con hover effects y transiciones...',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/evil-aye',
    liveHref: 'https://evil-aye-eov5.vercel.app/',
    img: '/img/projects/ui-ux/evil-eye.jpg',
    bg: '/img/projects/bg-project-breef.webp',
    num: '#012',
    title: 'Evil Eye',
    desc: 'Componente de ojo maligno con animaciones...',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/gallery-slider',
    liveHref: 'https://gallery-slider-one.vercel.app/',
    img: '/img/projects/ui-ux/gallery-slider.jpg',
    bg: '/img/projects/bg-project-ginebra.webp',
    num: '#009',
    title: 'Gallery Slider',
    desc: 'Slider de galería con micro-interacciones y estados...',
  },
]

const threeDProjects = [
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/cosmic-explorer',
    img: '/img/like-1.png',
    bg: '/img/projects/bg-project-matter.webp',
    num: '#013',
    title: 'Sinfonía Cósmica',
    desc: 'Planetario inmersivo y explorador cósmico en 3D...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/museo-del-cosmos',
    img: '/img/like-2.png',
    bg: '/img/projects/bg-project-mustang.webp',
    num: '#014',
    title: 'Museo del Cosmos',
    desc: 'Portafolio y biografía artística en un entorno 3D...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/three.js-tsl-sandbox',
    img: '/img/like-3.png',
    bg: '/img/projects/bg-project-breef.webp',
    num: '#015',
    title: 'Three.js Sandbox',
    desc: 'Laboratorio de pruebas y shaders con Three.js TSL...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/matter',
    img: '/img/like-4.png',
    bg: '/img/projects/bg-project-ginebra.webp',
    num: '#016',
    title: 'Experiencia Interactiva',
    desc: 'Renderizado en tiempo real de escenas en WebGL...',
  },
]

const ProjectCard = ({ href, githubHref, liveHref, img, bg, num, title, desc, icon }) => {
  const isUiux = githubHref && liveHref

  if (isUiux) {
    return (
      <div className="card-dark project-card project-card--uiux" style={{ backgroundImage: `url(${bg}), var(--linear-gradient-card-blur)` }}>
        <div className="project-card-image">
          <img src={img} alt={`Captura del proyecto ${title}`} />
          <HoverLinePath />
        </div>
        <div className="project-card-body">
          <div className="flex items-center gap-3 w-[85%]">
            <div className="project-card-number">
              <h5 className="uiux-number">{num}</h5>
              <img className="uiux-icon-img" src={icon || '/img/bg-uiux.webp'} alt={title} />
            </div>
            <div className="project-card-info">
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
      className="card-dark project-card"
      style={{ backgroundImage: `url(${bg}), var(--linear-gradient-card-blur)` }}
    >
      <div className="project-card-image">
        <img src={img} alt={`Captura del proyecto ${title}`} />
        <HoverLinePath />
      </div>
      <div className="project-card-body">
        <div className="project-card-number">
          <h5>{num}</h5>
        </div>
        <div className="project-card-info">
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
    <section id="proyectos" className="projects">
      <div className="projects-header">
        <p id="underline">Proyectos</p>
        <h2>Mis Proyectos más destacados</h2>
      </div>

      <div className={`projects-controls controls-${activeOption}`}>
        <div
          className="controls-active-bg"
          style={{
            transform: activeOption === 'my'
              ? 'translateX(0)'
              : activeOption === 'cloned'
                ? 'translateX(calc(100% + 3px))'
                : activeOption === 'uiux'
                  ? 'translateX(calc(200% + 6px))'
                  : 'translateX(calc(300% + 9px))'
          }}
        ></div>
        <p
          id="controls1"
          className={activeOption === 'my' ? 'tab-active' : 'tab-inactive'}
          onClick={() => setActiveOption('my')}
        >
          Propios
        </p>
        <p
          id="controls2"
          className={activeOption === 'cloned' ? 'tab-active' : 'tab-inactive'}
          onClick={() => setActiveOption('cloned')}
        >
          Clones
        </p>
        <p
          id="controls3"
          className={activeOption === 'uiux' ? 'tab-active' : 'tab-inactive'}
          onClick={() => setActiveOption('uiux')}
        >
          UI / UX
        </p>
        <p
          id="controls4"
          className={activeOption === 'threed' ? 'tab-active' : 'tab-inactive'}
          onClick={() => setActiveOption('threed')}
        >
          Web 3D
        </p>
      </div>

      <div className="projects-slider" style={{ overflow: 'hidden', padding: '20px 0' }}>
        <motion.div
          style={{ display: 'flex', width: '400%' }}
          animate={{
            x: activeOption === 'my' ? '0%' : activeOption === 'cloned' ? '-25%' : activeOption === 'uiux' ? '-50%' : '-75%',
          }}
          transition={{
            x: { type: 'spring', stiffness: 200, damping: 18 },
          }}
        >
          <motion.div
            className="projects-grid"
            style={{ width: '25%', margin: 0 }}
            animate={{ filter: activeOption !== 'my' ? 'blur(12px)' : 'blur(0px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {myProjects.map((p) => (
              <ProjectCard key={p.num} {...p} />
            ))}
          </motion.div>
          <motion.div
            className="projects-grid"
            style={{ width: '25%', margin: 0 }}
            animate={{ filter: activeOption !== 'cloned' ? 'blur(12px)' : 'blur(0px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {clonedProjects.map((p) => (
              <ProjectCard key={p.num} {...p} />
            ))}
          </motion.div>
          <motion.div
            className="projects-grid"
            style={{ width: '25%', margin: 0 }}
            animate={{ filter: activeOption !== 'uiux' ? 'blur(12px)' : 'blur(0px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {uiuxComponents.map((p) => (
              <ProjectCard key={p.num} {...p} />
            ))}
          </motion.div>
          <motion.div
            className="projects-grid"
            style={{ width: '25%', margin: 0 }}
            animate={{ filter: activeOption !== 'threed' ? 'blur(12px)' : 'blur(0px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {threeDProjects.map((p) => (
              <ProjectCard key={p.num} {...p} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
