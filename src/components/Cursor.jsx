import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    const hide = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(0)'
        cursorRef.current.style.filter = 'blur(8px)'
      }
    }

    const show = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
        cursorRef.current.style.filter = 'blur(0px)'
      }
    }

    const addHoverListeners = () => {
      const els = document.querySelectorAll('a, button, .hamburger, .mobile-menu-close, .genesis-pixel-img, .projects-controls p, .fixed-button ul li')
      els.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    const down = () => setIsClicking(true)
    const up = () => setIsClicking(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    const timeout = setTimeout(addHoverListeners, 1000)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: '27px',
        height: '27px',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, filter 0.3s ease',
      }}
    >
      <img
        src={isClicking ? '/img/cursor.png' : (isHovering ? '/img/cursor-hover.png' : '/img/cursor.png')}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  )
}
