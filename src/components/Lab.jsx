const labCards = {
  left: [
    'La mejor manera de estructurar y optimizar su SVG para el rendimiento y la accesibilidad.',
    'Cómo utilizar los principios del diseño de movimiento para mejorar tus animaciones.',
    'Crear animaciones con personalidad: elegir la facilidad y el momento adecuados.',
  ],
  right: [
    'Utilizar una biblioteca de animaciones de JavaScript para animaciones más complejas: GSAP.',
    'Logrando efectos como animación de trazos y morphing con los plugins de GreenSock',
  ],
}

const Lab = () => (
  <section id="taller" className="sec__circle">
    <div className="sec__circle__tt">
      <p id="underline">Laboratorio de estudio</p>
      <h3>Espacio de práctica y experimentación durante mi proceso de aprendizaje.</h3>
    </div>

    <div className="sec__circle__flex">
      <div className="sec__circle__left">
        {labCards.left.map((text, i) => (
          <div key={i} className="sec__circle__card">
            <p>{text}</p>
          </div>
        ))}
      </div>

      <img src="/img/cicle-gradient.webp" alt="gradient" />
      <img src="/img/circle-gradient-responsive.webp" alt="gradient" />
      <img src="/img/emogi-1.webp" alt="emoji" id="cicle__gradient__emogi1" />
      <img src="/img/emogi-gafas.webp" alt="emoji" id="cicle__gradient__emogi2" />
      <img src="/img/emogi-linea-purple.webp" alt="emoji" id="cicle__gradient__emogi3" />
      <img src="/img/emogi-estrella.webp" alt="emoji" id="cicle__gradient__emogi4" />
      <img src="/img/emogi-circle-pink.webp" alt="emoji" id="cicle__gradient__emogi5" />
      <img src="/img/emogi-gatas.webp" alt="emoji" id="cicle__gradient__emogi6" />

      <div className="sec__circle__right">
        {labCards.right.map((text, i) => (
          <div key={i} className="sec__circle__card">
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="sec__circle__btn">
      <a target="_blank" rel="noopener noreferrer" className="tallerBtn" href="https://www.educaedu-colombia.com/cursos/diseno-web/medellin">
        Visitar Laboratorio de estudio
      </a>
    </div>
  </section>
)

export default Lab
