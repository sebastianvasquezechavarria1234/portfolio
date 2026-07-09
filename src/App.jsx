import { useState, useEffect } from 'react'
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
  const [isLoading, setIsLoading] = useState(true)
  const [contentState, setContentState] = useState('hidden')

  useEffect(() => {
    if (contentState === 'hidden') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [contentState])

  useEffect(() => {
    if (!isLoading && contentState === 'hidden') {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setContentState('enter')
        })
      })
    }
  }, [isLoading, contentState])

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
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Empty spacer (original: section.nex) */}
      <section className="nex"></section>

      {/* Header: solo opacity, sin transform para no romper sticky/fixed */}
      <Header isReady={contentState === 'enter'} />

      {/* Background gradient */}
      <section className="gradient-bg">
        <div className="gradient-overlay"></div>
      </section>

      {/* Hero */}
      <div className={contentState === 'enter' ? 'content-enter content-enter-hero' : 'content-hidden'}>
        <Hero />
      </div>

      {/* Main content wrapper */}
      <section className={`container container2 ${contentState === 'enter' ? 'content-enter content-enter-sections' : 'content-hidden'}`}>


        <Experience />
        <Services />
        <Projects />


        <Blog />

        <Lab />

        {/* Linear color separator */}
        <div className="linear-color">
          {Array.from({ length: 10 }).map((_, i) => <span key={i}></span>)}
        </div>

        <About />

        <Footer />

      </section>
    </>
  )
}

export default App
