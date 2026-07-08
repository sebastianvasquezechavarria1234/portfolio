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
    desc: 'Museo cósmico inmersivo con...',
  },
  {
    githubHref: 'https://github.com/GenesisPixel/genesis-pixel-website',
    liveHref: 'https://genesis-pixel.vercel.app/',
    img: '/img/projects/me/genesis-pixel.jpg',
    bg: '/img/projects/bg-project-mustang.webp',
    num: '#002',
    title: 'Genesis Pixel',
    desc: 'Sitio web de agencia creativa...',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/myke-towers',
    liveHref: 'https://myke-towers.vercel.app/',
    img: '/img/projects/me/myke-towers.jpg',
    bg: '/img/projects/bg-project-ginebra.webp',
    num: '#003',
    title: 'Myke Towers',
    desc: 'Página web dedicada al artista...',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/zenith-gpt',
    liveHref: 'https://zenith-gpt.vercel.app/',
    img: '/img/projects/me/zenith-gpt.jpg',
    bg: '/img/projects/bg-project-breef.webp',
    num: '#004',
    title: 'Zenith GPT',
    desc: 'Aplicación de inteligencia artificial...',
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
    desc: 'Réplica de interfaz de...',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/ginebra',
    liveHref: 'https://ginebra.vercel.app/',
    img: '/img/projects/clone/ginebra.jpg',
    bg: '/img/projects/bg-project-mustang.webp',
    num: '#002',
    title: 'Ginebra Clone',
    desc: 'Réplica de interfaz de...',
  },
  {
    githubHref: '#',
    liveHref: '#',
    img: '/img/projects/clone/galletas.jpg',
    bg: '/img/projects/bg-project-breef.webp',
    num: '#003',
    title: 'Ginebra Clone',
    desc: 'Rediseño de la interfaz de Git...',
  },
  {
    githubHref: '#',
    liveHref: '#',
    img: '/img/projects/clone/breef.jpg',
    bg: '/img/projects/bg-project-ginebra.webp',
    num: '#004',
    title: 'Breef Clone',
    desc: 'Experiencia musical inmersiva...',
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
    desc: 'Menú de mosaicos de imágenes con hover effects...',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/full-screen-clip-effect',
    liveHref: 'https://full-screen-clip-effect.vercel.app/',
    img: '/img/projects/ui-ux/full-screen-clip-effect.jpg',
    bg: '/img/projects/bg-project-mustang.webp',
    num: '#002',
    title: 'Full Screen Clip Effect',
    desc: 'Efecto de clip a pantalla completa con transiciones...',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/webgl-slider-effects',
    liveHref: 'https://webgl-slider-effects.vercel.app/',
    img: '/img/projects/ui-ux/webgl-slider-effects.jpg',
    bg: '/img/projects/bg-project-breef.webp',
    num: '#003',
    title: 'WebGL Slider Effects',
    desc: 'Slider de galería con efectos WebGL y transiciones...',
  },
  {
    githubHref: 'https://github.com/sebastianvasquezechavarria1234/parallax-depth',
    liveHref: 'https://parallax-depth-sigma.vercel.app/',
    img: '/img/projects/ui-ux/parallax-depth.jpg',
    bg: '/img/projects/bg-project-ginebra.webp',
    num: '#004',
    title: 'Parallax Depth',
    desc: 'Efecto de profundidad parallax con animaciones fluidas...',
  },
]

const threeDProjects = [
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/cosmic-explorer',
    img: '/img/projects/3d/bunny-flight.jpg',
    bg: '/img/projects/bg-project-matter.webp',
    num: '#001',
    title: 'Sinfonía Cósmica',
    desc: 'Planetario inmersivo y explorador cósmico en 3D...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/museo-del-cosmos',
    img: '/img/projects/3d/jellyfish.jpg',
    bg: '/img/projects/bg-project-mustang.webp',
    num: '#002',
    title: 'Museo del Cosmos',
    desc: 'Portafolio y biografía artística en un entorno 3D...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/three.js-tsl-sandbox',
    img: '/img/projects/3d/space-balloon.jpg',
    bg: '/img/projects/bg-project-breef.webp',
    num: '#003',
    title: 'Three.js Sandbox',
    desc: 'Laboratorio de pruebas y shaders con Three.js TSL...',
  },
  {
    href: 'https://github.com/sebastianvasquezechavarria1234/matter',
    img: '/img/projects/3d/drive-simulation-3d.jpg',
    bg: '/img/projects/bg-project-ginebra.webp',
    num: '#004',
    title: 'Experiencia Interactiva',
    desc: 'Renderizado en tiempo real de escenas en WebGL...',
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
