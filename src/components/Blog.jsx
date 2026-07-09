import React from 'react'

const ExternalLinkSvg = () => (
  <svg className="h-[17px] w-[17px] shrink-0 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const BLOG_LINK = 'https://platzi.com/blog/10-trucos-de-css-que-te-van-a-sorprender/#:~:text=10%20trucos%20de%20CSS%20que%20te%20van%20a,Dibujar%20con%20%3Abefore%20y%20%3Aafter%20...%20M%C3%A1s%20elementos'
const KEYFRAMES_LINK = 'https://genesis-pixel.vercel.app/keyframes/que-son'

const topics = [
  { text: 'El inicio de la magia', href: KEYFRAMES_LINK },
  { text: '- Qué elementos puedes cobrar vida', href: KEYFRAMES_LINK },
  { text: '- Creando coreografías paso a paso', href: KEYFRAMES_LINK },
  { text: '- Ponle nombre y ritmo a tu obra', href: KEYFRAMES_LINK },
  { text: '- Controla el tiempo y el sentido', href: KEYFRAMES_LINK },
  { text: '- La clave para movimientos suaves', href: KEYFRAMES_LINK },
  { text: '- Efectos visuales increíbles', href: KEYFRAMES_LINK },
]

const Blog = () => (
  <section id="blog" className="blog">
    <img src="/img/emoji-bulb.webp" alt="emoji" />
    <img src="/img/emoji-megaphone.webp" alt="emoji" />
    <img src="/img/emoji-heart.png" alt="emoji" />
    <img src="/img/emoji-line-blue.webp" alt="emoji" />
    <img src="/img/emoji-smile.webp" alt="emoji" />
    <img src="/img/emoji-star-outline.webp" alt="emoji" />

    <div className="linear-color">
      {Array.from({ length: 10 }).map((_, i) => <span key={i}></span>)}
    </div>

    <div className="blog-header">
      <p id="underline">Aprende conmigo en Genesis Pixel</p>
      <h3>Domina las animaciones web: desde lo más básico hasta crear pura magia con código.</h3>
    </div>

    <div className="card-dark blog-card">
      <img src="/img/emoji-confetti.webp" alt="emoji" />
      {topics.map((topic) => (
        <a key={topic.text} target="_blank" rel="noopener noreferrer" href={topic.href}>{topic.text}</a>
      ))}
      <div className="blog-card-actions">
        <a className="blogBtn1 hover:-translate-y-1 transition-transform duration-500" target="_blank" rel="noopener noreferrer" href="https://genesis-pixel.vercel.app/">Ir a la plataforma</a>
        <a className="blogBtn2 hover:-translate-y-1 transition-transform duration-500" target="_blank" rel="noopener noreferrer" href="https://genesis-pixel.vercel.app/transitions/que-son">Empieza a aprender</a>
      </div>
    </div>

    <div className="blog-circle-1"></div>
    <div className="blog-circle-2"></div>
  </section>
)

export default Blog
