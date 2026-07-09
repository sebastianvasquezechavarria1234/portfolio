import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowSvg, HoverLinePath, GithubSvg, ExternalSvg } from './Icons'

const myProjects = [
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/cosmos-museum',
    liveHref: 'https://cosmos-museum.vercel.app/',
    img: '/img/projects/me/s.png',
    bg: '/img/projects/bg-project-matter.webp',
    num: '#001',
    title: 'Cosmos Museum',
    desc: 'Un museo digital para explorar el cosmos desde tu pantalla.',
  },
  {
    githubHref: 'https://github.com/GenesisPixel/genesis-pixel-website',
    liveHref: 'https://genesis-pixel.vercel.app/',
    img: '/img/projects/me/genesis-pixel.jpg',
    bg: '/img/projects/bg-project-mustang.webp',
    num: '#002',
    title: 'Genesis Pixel',
    desc: 'Mi propia plataforma educativa de desarrollo web.',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/myke-towers',
    liveHref: 'https://myke-towers.vercel.app/',
    img: '/img/projects/me/myke-towers.jpg',
    bg: '/img/projects/bg-project-ginebra.webp',
    num: '#003',
    title: 'Myke Towers',
    desc: 'El sitio oficial diseñado para capturar la vibra del artista.',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/zenith-gpt',
    liveHref: 'https://zenith-gpt.vercel.app/',
    img: '/img/projects/me/zenith-gpt.jpg',
    bg: '/img/projects/bg-project-breef.webp',
    num: '#004',
    title: 'Zenith GPT',
    desc: 'Una interfaz de IA con la que puedes hablar de forma natural.',
  },
]

const clonedProjects = [
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/alfoart-clone',
    liveHref: 'https://alfoart-clone.vercel.app/',
    img: '/img/projects/clone/alfoart.jpg',
    bg: '/img/projects/bg-project-matter.webp',
    num: '#001',
    title: 'Alfoart Clone',
    desc: 'Un reto de código: recreando la magia visual de la original.',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/ginebra',
    liveHref: 'https://ginebra.vercel.app/',
    img: '/img/projects/clone/ginebra.jpg',
    bg: '/img/projects/bg-project-mustang.webp',
    num: '#002',
    title: 'Ginebra Clone',
    desc: 'Clonando píxel a píxel para entender cómo está hecha.',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/artisan-crumb',
    liveHref: 'https://galletas-artesanales.vercel.app/',
    img: '/img/projects/clone/artisan-crumb.jpg',
    bg: '/img/projects/bg-project-breef.webp',
    num: '#003',
    title: 'Artisan Crumb Clone',
    desc: 'El diseño de esta panadería merecía ser programado a mano.',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/ford-mustang',
    liveHref: 'https://ford-mustang-blond.vercel.app/',
    img: '/img/projects/clone/ford-mustang.jpg',
    bg: '/img/projects/bg-project-ginebra.webp',
    num: '#004',
    title: 'Ford Mustang Clone',
    desc: 'Llevando la adrenalina del Mustang al código puro.',
  },
]

const uiuxComponents = [
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/image-tiles-menu',
    liveHref: 'https://image-tiles-menu.vercel.app/',
    img: '/img/projects/ui-ux/image-tiles-menu.jpg',
    bg: '/img/projects/bg-project-matter.webp',
    num: '#001',
    title: 'Image Tiles Menu',
    desc: 'Un menú interactivo que responde al movimiento del cursor.',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/full-screen-clip-effect',
    liveHref: 'https://full-screen-clip-effect.vercel.app/',
    img: '/img/projects/ui-ux/full-screen-clip-effect.jpg',
    bg: '/img/projects/bg-project-mustang.webp',
    num: '#002',
    title: 'Full Screen Clip Effect',
    desc: 'Transiciones a pantalla completa tan suaves que atrapan.',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/webgl-slider-effects',
    liveHref: 'https://webgl-slider-effects.vercel.app/',
    img: '/img/projects/ui-ux/webgl-slider-effects.jpg',
    bg: '/img/projects/bg-project-breef.webp',
    num: '#003',
    title: 'WebGL Slider Effects',
    desc: 'Dándole vida a galerías de imágenes con efectos WebGL.',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/parallax-depth',
    liveHref: 'https://parallax-depth-sigma.vercel.app/',
    img: '/img/projects/ui-ux/parallax-depth.jpg',
    bg: '/img/projects/bg-project-ginebra.webp',
    num: '#004',
    title: 'Parallax Depth',
    desc: 'El efecto parallax llevado al siguiente nivel de profundidad.',
  },
]

const threeDProjects = [
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/bunny-flight-three.js',
    liveHref: 'https://bunny-flight-three-js.vercel.app/',
    img: '/img/projects/3d/bunny-flight.jpg',
    bg: '/img/projects/bg-project-matter.webp',
    num: '#001',
    title: 'Bunny Flight',
    desc: 'Toma el control y vuela libremente por este mundo 3D.',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/jellyfish-three.js',
    liveHref: 'https://jellyfish-sage.vercel.app/',
    img: '/img/projects/3d/jellyfish.jpg',
    bg: '/img/projects/bg-project-mustang.webp',
    num: '#002',
    title: 'Jellyfish',
    desc: 'Medusas flotando en tu navegador, casi como si estuvieran vivas.',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/space-balloon-three.js',
    liveHref: 'https://space-balloon-three-js.vercel.app/',
    img: '/img/projects/3d/space-balloon.jpg',
    bg: '/img/projects/bg-project-breef.webp',
    num: '#003',
    title: 'Space Balloon',
    desc: 'Un pequeño globo explorando el espacio estrellado.',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/drive-simulator-3d-thre.js',
    liveHref: 'https://drive-simulator-3d-thre-js.vercel.app/',
    img: '/img/projects/3d/drive-simulation-3d.jpg',
    bg: '/img/projects/bg-project-ginebra.webp',
    num: '#004',
    title: 'Drive Simulator 3D',
    desc: 'Enciende motores y maneja directamente en la web.',
  },
]

const ProjectCard = ({ href, githubHref, liveHref, img, bg, num, title, desc, icon }) => {
  const isUiux = githubHref && liveHref
  const liveUrl = liveHref || href
  const githubUrl = githubHref || href

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={liveUrl}
      className="card-dark project-card project-card--uiux"
      style={{ backgroundImage: `url(${bg}), var(--linear-gradient-card-blur)` }}
    >
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
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center bg-white/[0.076] shadow-[4px_4px_20px_rgba(0,0,0,0.098)] rounded-lg" title="Ver página" onClick={(e) => e.stopPropagation()}>
            <ExternalSvg className="w-[15px] h-[15px]" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center bg-white/[0.076] shadow-[4px_4px_20px_rgba(0,0,0,0.098)] rounded-lg" title="Ver código" onClick={(e) => e.stopPropagation()}>
            <GithubSvg className="w-[15px] h-[15px]" />
          </a>
        </div>
      </div>
    </a>
  )
}

const Projects = () => {
  const [activeOption, setActiveOption] = useState('my')

  return (
    <section id="proyectos" className="projects">
      <div className="projects-header">
        <p id="underline">Lo que he construido</p>
        <h2>Proyectos de los que me siento orgulloso</h2>
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
