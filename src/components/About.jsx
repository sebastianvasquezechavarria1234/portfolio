import { QuoteSvg } from './Icons'

const references = [
  {
    text: 'Sebas es uno de los primeros colaboradores de Futuro puertas, ha demostrado un crecimiento muy importante en sus capacidades de planeamiento, investigación y desarrollo de software, con total compromiso y proactividad; un gran referente de la Empresa como persona y como profesional. Es muy gratificante que forme parte de este equipo de trabajo.',
    author: 'Alejandro Sánchez',
  },
  {
    text: 'He visto el trabajo de Sebastián impecable, siempre bien ejecutado y responsable, lo recomendaría siempre por su gran sentido de responsabilidad y compromiso.',
    author: 'María Camila Cardona',
  },
  {
    text: 'Trabajé en algunos proyectos laborales y académicos con Sebastián, de lo cual puedo recomendar su trabajo por detalle su compromiso y responsabilidad con los deadlines-tiempos de entrega, así como su búsqueda de innovación en cada etapa de desarrollo de software.',
    author: 'Samuel Velásquez',
  },
  {
    texts: [
      'Conozco a Sebastián desde hace 10 meses; forma parte del equipo de desarrolladores para la aplicación Shapepap.',
      'Sebastián ha demostrado tener una gran capacidad de entendimiento del negocio y su trabajo en la parte técnica es excelente. La proactividad y la motivación hacia la búsqueda de soluciones son características que lo definen como persona.',
    ],
    author: 'Johana García',
  },
]

const RefCard = ({ text, texts, author }) => (
  <div className="sec__sobre__card">
    <div className="sec__sobre__card__bg"></div>
    <QuoteSvg />
    <div className="sec__sobre__card__tt">
      {text && <p>{text}</p>}
      {texts && texts.map((t, i) => <p key={i}>{t}</p>)}
      <p><span></span>{author}</p>
    </div>
  </div>
)

const About = () => (
  <section id="sobre-mí" className="sec__sobre">
    <div className="sec__sobre__tt">
      <p id="underline">Sobre mí</p>
      <h2>Soy desarrollador web en constante formación, con pasión por el aprendizaje autónomo y la mejora continua.</h2>
      <p>Me llamo Sebastián Vásquez Echavarría. Desde que comencé mi viaje como <span>diseñador,</span> he trabajado y colaborado en varios proyectos con personas talentosas.</p>
      <p>Siempre he buscado oportunidades y desafíos que sean significativos para mí. Como <span>diseñador web,</span> disfruto usando mi atención obsesiva al detalle y mi amor por hacer las cosas de la mejor manera para lograr los mejores resultados.</p>
      <img src="/img/emogi-escale.webp" alt="emoji" />
      <img src="/img/emogi-8.webp" alt="emoji" />
      <img src="/img/emogi-corazon.png" alt="emoji" />
    </div>

    <div className="sec__sobre__ctn__refent">
      {/* Column 1 with heading */}
      <div className="sec__sobre__refent">
        <div className="sec__sobre__refent__tt">
          <h4>Referencias personales</h4>
        </div>
        <RefCard {...references[0]} />
      </div>

      {/* Columns 2, 3, 4 */}
      {references.slice(1).map((ref, i) => (
        <div key={i} className="sec__sobre__refent">
          <RefCard {...ref} />
        </div>
      ))}
    </div>
  </section>
)

export default About
