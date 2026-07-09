import { useState, useEffect } from 'react'

const fontUrls = [
  'https://fonts.googleapis.com/css2?family=Acorn:wght@300;400;500;900&display=swap',
  'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap',
]

const heroImages = [
  '/img/hero-portrait.webp',
  '/img/chinese-text.webp',
  '/img/chinese-letters.svg',
  '/img/emoji-star.webp',
  '/img/emoji-heart.png',
  '/img/emoji-spark.webp',
  '/img/emoji-fire.webp',
  '/img/emoji-rocket.webp',
  '/img/face.jpg',
]

const experienceImages = [
  '/img/kaoticode.webp',
  '/img/experience/genesis-pixel/hero.jpg',
  '/img/experience/genesis-pixel/grid-1.jpg',
  '/img/experience/genesis-pixel/grid-2.jpg',
  '/img/experience/genesis-pixel/transitions.jpg',
  '/img/experience/genesis-pixel/transform.jpg',
  '/img/experience/genesis-pixel/keyframes.jpg',
  '/img/experience/genesis-pixel/interacitions.jpg',
  '/img/experience/kaoticode/hero.jpg',
]

const servicesImages = [
  '/img/service-design.webp',
  '/img/service-code.webp',
  '/img/service-seo.webp',
  '/img/service-responsive.webp',
  '/img/service-support.webp',
  '/img/sec-2-icon-1.webp',
  '/img/sec-2-icon-2.webp',
  '/img/sec-2-icon-3.webp',
  '/img/sec-2-icon-4.webp',
  '/img/sec-2-icon-5.webp',
]

const projectsImages = [
  '/img/projects/me/genesis-pixel.jpg',
  '/img/projects/me/kaoticode.jpg',
  '/img/projects/me/shapepap.jpg',
  '/img/projects/cloned/matter.jpg',
  '/img/projects/cloned/ford-mustang.jpg',
  '/img/projects/cloned/breef.jpg',
  '/img/projects/cloned/ginebra.jpg',
  '/img/bg-uiux.webp',
]

const blogImages = [
  '/img/emoji-bulb.webp',
  '/img/emoji-megaphone.webp',
  '/img/emoji-confetti.webp',
  '/img/emoji-line-blue.webp',
  '/img/emoji-smile.webp',
  '/img/emoji-star-outline.webp',
]

const aboutImages = [
  '/img/face-about.jpg',
  '/img/emoji-scale.webp',
]

const otherImages = [
  '/img/gallery-4.webp',
  '/img/berrio.jpg',
  '/img/circle-gradient-big.webp',
  '/img/circle-gradient-small.webp',
  '/img/emoji-idea.webp',
  '/img/emoji-glasses.webp',
  '/img/emoji-line-purple.webp',
  '/img/emoji-circle-pink.webp',
  '/img/emoji-cat.webp',
  '/img/favicon.webp',
]

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = resolve
    img.onerror = resolve
    img.src = src
  })
}

function loadFont(url) {
  return new Promise((resolve) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    link.onload = resolve
    link.onerror = resolve
    document.head.appendChild(link)
  })
}

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('Cargando tipografía...')
  const [exiting, setExiting] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let current = 0
    const total =
      fontUrls.length +
      heroImages.length +
      experienceImages.length +
      servicesImages.length +
      projectsImages.length +
      blogImages.length +
      aboutImages.length +
      otherImages.length

    const update = (count) => {
      current += count
      setProgress(Math.min(Math.round((current / total) * 100), 100))
    }

    const run = async () => {
      setPhase('Cargando tipografía...')
      await Promise.all(fontUrls.map(loadFont))
      update(fontUrls.length)

      setPhase('Cargando hero...')
      await Promise.all(heroImages.map(loadImage))
      update(heroImages.length)

      setPhase('Cargando experiencia...')
      await Promise.all(experienceImages.map(loadImage))
      update(experienceImages.length)

      setPhase('Cargando servicios...')
      await Promise.all(servicesImages.map(loadImage))
      update(servicesImages.length)

      setPhase('Cargando proyectos...')
      await Promise.all(projectsImages.map(loadImage))
      update(projectsImages.length)

      setPhase('Cargando blog...')
      await Promise.all(blogImages.map(loadImage))
      update(blogImages.length)

      setPhase('Cargando sobre mí...')
      await Promise.all(aboutImages.map(loadImage))
      update(aboutImages.length)

      setPhase('Cargando...')
      await Promise.all(otherImages.map(loadImage))
      update(otherImages.length)

      setPhase('¡Listo!')
      setTimeout(() => {
        setExiting(true)
        setTimeout(() => {
          setHidden(true)
        }, 800)
      }, 400)
    }

    run()
  }, [])

  if (hidden) return null

  return (
    <section className={`preloader ${exiting ? 'preloader-exit' : ''}`} style={{ top: 0 }}>
      <div className="preloader-content" style={{ opacity: 1 }}>
        <div className="preloader-number">{progress}</div>
        <p className="preloader-phase">{phase}</p>
        <div className="preloader-line">
          <span style={{ width: `${progress}%`, transition: 'width 0.3s' }}></span>
        </div>
      </div>
    </section>
  )
}

export default LoadingScreen
