import { useEffect } from 'react'
import Lenis from 'lenis'
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

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    window.lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
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
