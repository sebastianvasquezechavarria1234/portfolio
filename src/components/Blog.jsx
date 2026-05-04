const BLOG_LINK = 'https://platzi.com/blog/10-trucos-de-css-que-te-van-a-sorprender/#:~:text=10%20trucos%20de%20CSS%20que%20te%20van%20a,Dibujar%20con%20%3Abefore%20y%20%3Aafter%20...%20M%C3%A1s%20elementos'

const topics = [
  'Filtro CSS',
  'Transformaciones CSS',
  '@keyframes CSS',
  '@media screen CSS',
  'SVG CSS',
  'SVG Path CSS',
  'SVG Path CSS GSAP',
]

const Blog = () => (
  <section id="blog" className="sec__blog">
    <img src="/img/emogi-7.webp" alt="emoji" />
    <img src="/img/emogi-megafono.webp" alt="emoji" />
    <img src="/img/emogi-corazon.png" alt="emoji" />
    <img src="/img/emogi-linea-blue.webp" alt="emoji" />
    <img src="/img/emogi-sonriendo.webp" alt="emoji" />
    <img src="/img/emogi-estrella.webp" alt="emoji" />

    <div className="linear__color">
      {Array.from({ length: 10 }).map((_, i) => <span key={i}></span>)}
    </div>

    <div className="sec__blog__tt">
      <p id="underline">Recursos de aprendizaje</p>
      <h3>Blogs y guías que me ayudaron a mejorar mis habilidades en front-end.</h3>
    </div>

    <div className="cardDarkProyect sec__blog__card">
      <img src="/img/emogi-confeti.webp" alt="emoji" />
      {topics.map((topic) => (
        <a key={topic} target="_blank" rel="noopener noreferrer" href={BLOG_LINK}>{topic}</a>
      ))}
      <div className="sec__blog__card__flex">
        <a className="blogBtn1" target="_blank" rel="noopener noreferrer" href={BLOG_LINK}>Ver más</a>
        <a className="blogBtn2" target="_blank" rel="noopener noreferrer" href={BLOG_LINK}>Descubrir más</a>
      </div>
    </div>

    <div className="sec__blog__circle1"></div>
    <div className="sec__blog__circle2"></div>
  </section>
)

export default Blog
