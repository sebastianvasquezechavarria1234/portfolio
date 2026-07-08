const labCards = {
  left: [
    'Capítulo 2: Transitions — De la brusquedad a la fluidez en un solo paso de código.',
    'Capítulo 3: Keyframes — Crea coreografías y dale verdadera vida a tus elementos.',
    'Capítulo 4: Interacciones — Detalles y micro-animaciones que enamoran al usuario.',
  ],
  right: [
    'Capítulo 5: Three.js — Tu primera puerta de entrada hacia mundos interactivos en 3D.',
    'Capítulo 6: Shaders — Matemáticas puras convertidas en efectos visuales increíbles.',
  ],
}

const Lab = () => (
  <section id="taller" className="sec__circle">
    <div className="sec__circle__tt">
      <p id="underline">Guías de Genesis Pixel</p>
      <h3>5 Capítulos diseñados para llevar tu nivel de desarrollo frontend al extremo.</h3>
    </div>

    <div className="sec__circle__flex">
      <div className="sec__circle__left">
        {labCards.left.map((text, i) => (
          <div key={i} className="sec__circle__card">
            <p>{text}</p>
          </div>
        ))}
      </div>

      <img src="/img/circle-gradient-big.webp" alt="gradient" />
      <img src="/img/circle-gradient-small.webp" alt="gradient" />
      <img src="/img/emoji-idea.webp" alt="emoji" id="cicle__gradient__emogi1" />
      <img src="/img/emoji-glasses.webp" alt="emoji" id="cicle__gradient__emogi2" />
      <img src="/img/emoji-line-purple.webp" alt="emoji" id="cicle__gradient__emogi3" />
      <img src="/img/emoji-star-outline.webp" alt="emoji" id="cicle__gradient__emogi4" />
      <img src="/img/emoji-circle-pink.webp" alt="emoji" id="cicle__gradient__emogi5" />
      <img src="/img/emoji-cat.webp" alt="emoji" id="cicle__gradient__emogi6" />

      <div className="sec__circle__right">
        {labCards.right.map((text, i) => (
          <div key={i} className="sec__circle__card">
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="sec__circle__btn">
      <a target="_blank" rel="noopener noreferrer" className="tallerBtn" href="https://genesis-pixel.vercel.app/">
        Explorar todos los capítulos
      </a>
    </div>
  </section>
)

export default Lab
