const NetworkSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-topology-star-3" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M6 12h4" /><path d="M14 12h4" /><path d="M15 7l-2 3" /><path d="M9 7l2 3" />
    <path d="M11 14l-2 3" /><path d="M13 14l2 3" />
  </svg>
)

const BrushSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brush" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
    <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
    <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
    <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
  </svg>
)

const SparklesSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sparkles" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
  </svg>
)

const Experience = () => (
  <section id="experiencia" className="sec__experience">
    <div className="sec__experience__tt">
      <p id="underline">Experiencia Laboral</p>
      <h2>Mi experiencia de +2 años como diseñador web</h2>
      <p>Desarrollo servicios web personalizados, enfocados en la eficiencia y usabilidad, utilizando diseños web y soluciones innovadoras.</p>
    </div>

    {/* Card 1 - Futuro Puertas */}
    <div className="sec__experience__card">
      <div className="sec__experience__card__left">
        <h4 id="experienceBg">
          <span><NetworkSvg /></span>
          <span>Futuro puertas</span>
        </h4>
      </div>
      <div className="sec__experience__card__right">
        <h4>
          <p>Enero 2023 - Noviembre 2023</p>
          <p>Diseñador web &amp; analista de datos</p>
        </h4>
        <p>I was responsible for the complete front-end development of the application, including UI creation, responsive design implementation, and general platform functionality. Developed using HTML, CSS, JavaScript, and modern front-end libraries to ensure a smooth, adaptable user experience across all devices. For visual planning, I utilized Figma and Photoshop to structure and prototype views before implementation.</p>
        <p>The project featured an innovative interactive section allowing users to visually customize doors on a blank canvas—modifying colors, adding images, and adjusting styles for an intuitive, personalized experience.</p>
        <p>Additionally, I implemented API integrations for data management and dynamic system features, ensuring seamless communication between the interface and the application's core data. This project strengthened my expertise in front-end development, UI design, and user experience integration.</p>
      </div>
    </div>

    {/* Card 2 - INGENIATEC */}
    <div className="sec__experience__card">
      <div className="sec__experience__card__left">
        <h4 id="experienceBg">
          <span><BrushSvg /></span>
          <span>INGENIATEC - Séptima muestra</span>
        </h4>
      </div>
      <div className="sec__experience__card__right">
        <h4>
          <p>Noviembre 2023</p>
          <p>Participante &amp; Desarrollador</p>
        </h4>
        <p>Participated in the 7th INGENIATEC exhibition due to the impact of my "Futuro Puertas" project, which stood out for its functional complexity and the practical application of my technical training.</p>
        <p>I presented and explained the project's architecture, the technologies used, and its core functionality to instructors and attendees, demonstrating the skills acquired during my development process.</p>
        <p>This experience allowed me to share my knowledge, receive professional feedback, and showcase my work within an institutional and academic environment.</p>
      </div>
    </div>

    {/* Card 3 - Guinness */}
    <div className="sec__experience__card">
      <div className="sec__experience__card__left">
        <h4 id="experienceBg">
          <span><SparklesSvg /></span>
          <span>Guinness World Record</span>
        </h4>
      </div>
      <div className="sec__experience__card__right">
        <h4>
          <p>Octubre 2022</p>
          <p>Participante</p>
        </h4>
        <p>Participated in a massive programming session in Medellín that achieved a Guinness World Record for the largest software class in the world. This initiative brought together thousands of participants to promote technology education and software development interest.</p>
        <p>During the event, I gained my first formal insights into programming, including basic logic concepts, software structure, and the significance of technology in the modern world. This initial spark motivated me to pursue self-taught learning and specialize in web development.</p>
        <p>Beyond the technical learning, participating in such a large-scale event allowed me to understand the impact of tech education and fueled my motivation to apply these skills in personal and academic projects.</p>
      </div>
    </div>
  </section>
)

export default Experience
