import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Services from './components/Services'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Lab from './components/Lab'
import About from './components/About'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // ── Lenis smooth scroll ──────────────────────────────────────
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    window.lenis = lenis

    // Connect Lenis RAF with GSAP ticker for perfect sync
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    // ── Scroll-triggered animations ──────────────────────────────

    // Headings: slide up + fade
    gsap.utils.toArray('h2, h3').forEach((el) => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          }
        }
      )
    })

    // Section labels (#underline p tags): slide in from left
    gsap.utils.toArray('p#underline').forEach((el) => {
      gsap.fromTo(el,
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          }
        }
      )
    })

    // Cards: staggered fade-up
    const cardSelectors = [
      '.sec__2__card',
      '.sec__3__card',
      '.sec__experience__card',
      '.sec__sobre__card',
      '.blog__card',
    ]

    cardSelectors.forEach((selector) => {
      const cards = gsap.utils.toArray(selector)
      if (!cards.length) return
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.8,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            }
          }
        )
      })
    })

    // Hero text: entrance from bottom on load
    gsap.fromTo('.sec__hero__tt',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 3.1 }
    )

    gsap.fromTo('#heroCircle',
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 3.3 }
    )

    // Footer: fade in
    gsap.fromTo('footer',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 95%',
          toggleActions: 'play none none none',
        }
      }
    )

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
      gsap.ticker.remove()
    }
  }, [])

  return (
    <>
      {/* Intro animation */}
      <LoadingScreen />

      {/* Empty spacer (original: section.nex) */}
      <section className="nex"></section>

      {/* Header + mobile menu + fixed button (all inside Header component) */}
      <Header />

      {/* Background gradient */}
      <section className="sec_gradient">
        <div className="sec__gradient__box"></div>
      </section>

      {/* Hero */}
      <Hero />

      {/* Main content wrapper */}
      <section className="sec__max__width sec__max__width2">

        <Experience />

        <Services />

        <Projects />

        <Blog />

        <Lab />

        {/* Linear color separator */}
        <div className="linear__color">
          {Array.from({ length: 10 }).map((_, i) => <span key={i}></span>)}
        </div>

        <About />

        <Footer />

      </section>
    </>
  )
}

export default App

