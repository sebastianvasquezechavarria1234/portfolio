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
  <div className="about-card">
    <div className="about-card-bg"></div>
    <QuoteSvg />
    <div className="about-card-content">
      {text && <p>{text}</p>}
      {texts && texts.map((t, i) => <p key={i}>{t}</p>)}
      <p><span></span>{author}</p>
    </div>
  </div>
)

const About = () => (
  <section id="sobre-mí" className="about">
    <div className="about-header flex max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-[30px]">

      <div className="about-container-face w-[35%] max-[900px]:w-[400px] max-[900px]:flex max-[900px]:justify-center relative">
        <picture className='w-[300px] h-[300px] max-[900px]:w-[200px] max-[900px]:h-[200px] relative overflow-hidden'>
          <img src="/img/face-about.jpg" alt="Sebastian Vasquez" width="100%" height="100%" style={{ borderRadius: '9999px 9999px 0 0' }} />
        <img src="/img/emoji-spark.webp" alt="emoji" className="absolute w-[80px] max-[900px]:w-[60px] left-[-7%] bottom-[10%] max-[900px]:bottom-[-30px] animate-[emogi2_6s_infinite_reverse]" />
        </picture>
        <img src="/img/emoji-scale.webp" alt="emoji" className="absolute w-[130px] max-[900px]:w-[90px] right-[-0%] top-[4%] max-[900px]:top-[14%] animate-[emogi1_6s_infinite]" />
        <img src="/img/emoji-star.webp" alt="emoji" className="absolute w-[100px] max-[900px]:w-[70px] right-[18%] bottom-[15%] max-[900px]:bottom-[-15%] animate-[emogi2_6s_infinite]" />
        <img src="/img/emoji-heart.png" alt="emoji" className="absolute w-[30px] max-[900px]:w-[20px] left-[11%] top-[30%] max-[900px]:top-[70%] animate-[emogi2_6s_infinite_reverse]" />
      </div>
      <div className="w-[65%] max-[900px]:w-full">
        <p id="underline">Conóceme un poco más</p>
        <h2>Soy un desarrollador obsesionado con crear experiencias web que la gente realmente disfrute usar.</h2>
        <p>Hola, soy Sebastián. Desde que escribí mi primera línea de código, supe que quería dedicarme a construir cosas increíbles en internet. A lo largo del tiempo, he tenido la suerte de colaborar con equipos llenos de talento y darle vida a proyectos muy especiales.</p>
        <p>Más allá de programar, me considero un creador todoterreno. Disfruto diseñando interfaces web visualmente espectaculares y creando <a href="https://cosmos-museum.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ fontStyle: 'italic', textDecoration: 'underline' }}>experiencias en 3D</a>, pero también me apasiona la arquitectura profunda: construir el backend, gestionar bases de datos e integrar potentes <a href="https://zenith-gpt.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ fontStyle: 'italic', textDecoration: 'underline' }}>agentes de Inteligencia Artificial</a>. Me encanta dominar todo el proceso para que cada proyecto no solo se vea increíble, sino que sea inteligente y robusto "bajo el capó".</p>
      </div>
    </div>

    <div className="about-references">
      {/* Column 1 with heading */}
      <div className="about-reference-item">
        <div className="about-reference-header">
          <h4>Lo que dicen de mí</h4>
        </div>
        <RefCard {...references[0]} />
      </div>

      {/* Columns 2, 3, 4 */}
      {references.slice(1).map((ref, i) => (
        <div key={i} className="about-reference-item">
          <RefCard {...ref} />
        </div>
      ))}
    </div>
  </section>
)

export default About
