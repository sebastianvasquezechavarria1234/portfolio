import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useH2Animation = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const h2Elements = document.querySelectorAll('h2')

      h2Elements.forEach((h2) => {
        const text = h2.textContent
        h2.innerHTML = ''

        const chars = text.split('').map((char) => {
          const span = document.createElement('span')
          span.textContent = char === ' ' ? '\u00A0' : char
          span.style.display = 'inline-block'
          span.style.transformOrigin = 'center'
          span.style.fontFamily = "'Acorn', sans-serif"
          h2.appendChild(span)
          return span
        })

        gsap.set(chars, {
          scaleY: 1.8,
          opacity: 0,
          transformOrigin: 'center bottom'
        })

        gsap.to(chars, {
          scaleY: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.01,
          scrollTrigger: {
            trigger: h2,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}

export default useH2Animation
