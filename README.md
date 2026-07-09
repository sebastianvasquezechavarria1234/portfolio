<div align="center">

  <img src="public/img/face.jpg" alt="Sebastián Vásquez" width="110" style="border-radius: 50%; border: 3px solid #0fa;" />

  <h1> ✨💼Portafolio de Sebastián Vásquez</h1>

  <p><em>Donde otros ven tecnología, yo veo posibilidades infinitas.</em></p>

  <br />

  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-E8556D?style=flat-square&logo=framermotion&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock" alt="GSAP" />
  <img src="https://img.shields.io/badge/Lenis-1-FFFFFF?style=flat-square" alt="Lenis" />

  <br /><br />

  <img src="public/img/preview.jpg" alt="Preview del portafolio" width="100%" />

</div>

---

<br />

## Índice

- [Sobre el proyecto](#-sobre-el-proyecto)
- [Diseño y filosofía](#-diseño-y-filosofía)
- [Características](#-características)
- [Stack tecnológico](#-stack-tecnológico)
- [Arquitectura del proyecto](#-arquitectura-del-proyecto)
- [Flujo de la aplicación](#-flujo-de-la-aplicación)
- [Componentes principales](#-componentes-principales)
- [Getting Started](#-getting-started)
- [Scripts disponibles](#-scripts-disponibles)
- [Rendimiento y optimizaciones](#-rendimiento-y-optimizaciones)
- [Responsive Design](#-responsive-design)
- [Contacto](#-contacto)
- [Licencia](#-licencia)

---

<br />

## Sobre el proyecto

Este portafolio es una aplicación de una sola página construida con **React 19**, **Vite 8** y **Tailwind CSS 4**. Nació de un sitio estático y fue migrado a una arquitectura moderna con un único objetivo: **transmitir calidad desde el primer pixel**.

Cada sección está diseñada como una pieza editorial independiente. No es solo un sitio web con información — es una **experiencia visual** que acompaña al visitante desde el momento en que carga hasta que cierra la pestaña.

> El proyecto no utiliza backend. Es un SPA estático desplegado en **Vitoria**.

---

<br />

## Diseño y filosofía

La estética del portafolio sigue un estilo **editorial de alto nivel**. Cada decisión visual fue tomada con intención:

| Principio | Implementación |
|---|---|
| **Tipografía de alto impacto** | Fuente personalizada *Acorn* para títulos, *Bricolage Grotesque* para subtítulos, *Google Sans Flex* para cuerpo |
| **Espacios que respiran** | Layout limpio con jerarquía clara entre secciones |
| **Efectos avanzados** | Gradual Blur Header estilo Apple, glassmorphism en tarjetas, cursor personalizado |
| **Movimiento con propósito** | Animaciones en scroll, transiciones suaves, micro-interacciones en hover |
| **Coherencia visual** | Paleta unificada (verde → azul → púrpura), gradientes consistentes, sombras cuidadas |

> *La elegancia siempre debe estar por encima de la cantidad.*

---

<br />

## Características

### Navegación fluida
Impulsada por [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis), cada scroll se siente como una experiencia premium con una curva de easing personalizada.

### Gradual Blur Header
Un efecto de blur progresivo inspirado en Apple. El header se difumina gradualmente a medida que el usuario navega, añadiendo profundidad y elegancia sin distracciones.

### Pantalla de carga inteligente
No es un fake timer. El preloader **carga assets reales** en 7 fases (fuentes → hero → experiencia → servicios → proyectos → blog → about → otros) y muestra el progreso real. Cuando termina, se desliza hacia arriba revelando el contenido.

### Proyectos con slider animado
Categorías de proyectos (*Propios*, *Clones*, *UI/UX*, *Web 3D*) con un slider animado usando **Framer Motion** con transiciones spring y efectos de blur entre paneles.

### Bento Grid para servicios
Layout tipo bento con tarjetas glassmorphic que incluyen blobs de color como fondo decorativo. Cada servicio tiene su propia paleta de gradientes.

### Cursor personalizado
Un punto de 8px con un anillo seguidor de 40px, ambos con `mix-blend-mode: difference`. Se oculta automáticamente en dispositivos táctiles.

### Contenido entry animation
Todo el contenido aparece con una transición coordinada de `opacity` + `translateY`, sincronizada con la salida del preloader.

---

<br />

## Stack tecnológico

### Núcleo

| Tecnología | Versión | Uso |
|---|---|---|
| **React** | 19.2.5 | Framework UI |
| **Vite** | 8.0.10 | Build tool y dev server |
| **Tailwind CSS** | 4.2.4 | Utility-first styling |

### Animación y UX

| Librería | Versión | Uso |
|---|---|---|
| **Framer Motion** | 12.38.0 | Animaciones React (slider de proyectos) |
| **GSAP** | 3.15.0 | Animaciones avanzadas de alto rendimiento |
| **Lenis** | 1.3.23 | Smooth scrolling |
| **OverlayScrollbars** | 2.15.1 | Scrollbar personalizado |

### Fuentes

| Fuente | Uso |
|---|---|
| **Acorn** | Títulos de alto impacto (display font) |
| **Bricolage Grotesque** | Subtítulos secundarios (300/600/800) |
| **Google Sans Flex** | Texto de cuerpo (400-800) |

---

<br />

## Arquitectura del proyecto

```
portfolio/
├── index.html                 # Punto de entrada HTML (lang="es")
├── package.json               # Dependencias y scripts
├── vite.config.js             # Configuración de Vite
│
├── src/
│   ├── main.jsx               # Entry point de React
│   ├── App.jsx                # Orquestador principal (loading, scroll, layout)
│   ├── index.css              # Estilos globales (3040 líneas)
│   │
│   └── components/
│       ├── LoadingScreen.jsx  # Preloader con carga real de assets
│       ├── Header.jsx         # Nav sticky con blur gradual + menú móvil
│       ├── Hero.jsx           # Sección principal con retrato y CTAs
│       ├── Experience.jsx     # Timeline de experiencia profesional
│       ├── Services.jsx       # Bento grid de servicios
│       ├── Projects.jsx       # Slider animado con 4 categorías
│       ├── Blog.jsx           # Sección de aprendizaje
│       ├── Lab.jsx            # Capítulos de Genesis Pixel
│       ├── About.jsx          # Bio personal + testimonios
│       ├── Footer.jsx         # Galería de fotos + redes sociales
│       ├── Icons.jsx          # Biblioteca de iconos SVG
│       └── GradualBlur.jsx    # Componente de blur progresivo (estilo Apple)
│
├── css/
│   └── estilos.css            # CSS legacy del sitio estático original
│
└── public/
    ├── fonts/                 # 8 archivos de fuentes
    └── img/                   # 70+ imágenes (perfiles, proyectos, emojis, decoraciones)
```

---

<br />

## Flujo de la aplicación

```
1. El HTML carga → React monta <App /> en StrictMode
          ↓
2. LoadingScreen monta y comienza la precarga:
   → Fuentes (2 URLs de Google Fonts)
   → Imágenes por fases: hero, experiencia, servicios,
     proyectos, blog, about, otros (~55 imágenes)
   → Barra de progreso + porcentaje + texto de fase
          ↓
3. Todos los assets cargados:
   → Preloader dispara animación de salida (slide-up)
   → onComplete → setIsLoading(false)
          ↓
4. Revele del contenido:
   → Doble requestAnimationFrame garantiza DOM listo
   → contentState cambia a 'enter' → fade-in + translateY (0.8s)
   → Después de 0.8s → headerReady = true → header aparece
          ↓
5. El usuario navega con Lenis smooth scroll activo
```

> El hero tiene una entrada separada del resto del contenido. El header aparece después de que el contenido se ha revelado completamente.

---

<br />

## Componentes principales

### `App.jsx`
El orquestador. Controla el estado de carga, inicializa Lenis, gestiona la secuencia de revelado del contenido y renderiza todas las secciones en orden.

### `LoadingScreen.jsx`
Preloader completo que carga assets reales en 7 fases. Muestra porcentaje de progreso, texto de fase y avatar del perfil. Se desliza hacia arriba con una transición CSS al completar.

### `Header.jsx`
Nav sticky con blur gradual usando el componente `GradualBlur`. Incluye:
- Navegación desktop con underline SVG animado en hover
- Botón "Hablemos" que enlaza a WhatsApp
- Menú móvil full-screen con animación `scaleY`
- Botón scroll-to-top que aparece después de 400px

### `Hero.jsx`
La primera impresión. Retrato del perfil, heading principal, dos CTAs (*"Mira lo que he hecho"* y *"Descarga mi CV"*), redes sociales y un retrato con tarjeta glassmorphic y emojis flotantes animados.

### `Experience.jsx`
Timeline vertical con 3 experiencias profesionales. Incluye screenshot grid interactivo con tooltips basados en portales de React.

### `Projects.jsx`
Slider animado con 4 categorías y 16 proyectos. Cada categoría tiene su propio fondo. Las transiciones usan spring physics de Framer Motion.

### `GradualBlur.jsx`
Componente reutilizable de blur progresivo inspirado en Apple. Soporta presets, curvas, Intersection Observer y modo responsive.

---

<br />

## Getting Started

**1. Clonar el repositorio**

```bash
git clone https://github.com/sebastianvasquezechavarria1234/portfolio.git
cd portfolio
```

**2. Instalar dependencias**

```bash
npm install
```

**3. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

> Se abrirá automáticamente en `http://localhost:5173`.

---

<br />

## Scripts disponibles

| Script | Comando | Descripción |
|---|---|---|
| **Desarrollo** | `npm run dev` | Inicia el dev server de Vite |
| **Build** | `npm run build` | Genera el bundle de producción en `dist/` |
| **Preview** | `npm run preview` | Previsualiza la versión de producción |
| **Lint** | `npm run lint` | Ejecuta ESLint para detectar errores |

---

<br />

## Rendimiento y optimizaciones

- **Precarga inteligente**: El preloader carga assets reales por fases, no usa timers falsos
- **Smooth scrolling optimizado**: Lenis con `smoothTouch: false` en móvil para preservar rendimiento
- **Imágenes en WebP**: La mayoría de assets usan formato WebP para menor peso
- **CSS personalizado**: Variables CSS para colores, gradientes y sombras reutilizables
- **Componentes memoizados**: `GradualBlur` usa `React.memo` para evitar re-renders innecesarios
- **Bundle optimizado**: Vite genera un solo JS y un solo CSS para producción
- **Scroll-to-top lazy**: El botón solo aparece después de 400px de scroll

---

<br />

## Responsive Design

El portafolio se adapta desde ultra-wide hasta móviles con **12 breakpoints**:

| Breakpoint | Comportamiento |
|---|---|
| `1380px` | Ajustes de padding y layout |
| `1280px` | Container overflow visible |
| `1180px` | Grid de proyectos a 2 columnas |
| `1065px` | Reducción de tamaños de fuente |
| `975px` | Layout de servicios ajustado |
| `900px` | About section cambia a `flex-col` |
| `800px` | Menú móvil activado, hamburger visible |
| `768px` | Navegación desktop oculta, menú overlay |
| `600px` | Hero gradient a 100% width, 400px height |
| `500px` | Tamaños de fuente reducidos |
| `480px` | Ajustes finales para móviles pequeños |

---

<br />






<br />

## Licencia

Este proyecto es de uso personal. Casi todos los derechos reservados.

<p align="center">
  <strong>© 2023 — 2026 Sebastián Vásquez Echavarría</strong><br />
  <em>Diseñado y escrito en código con dedicación y precisión.</em>
  </br>
  Made with ❤️ by <a href="https://sebas-dev.vercel.app/" target="_blank" rel="noopener noreferrer">Sebastián V</a>

</p>



<div align="center">

  <a href="https://wa.me/573015857417" target="_blank">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=flat-square&logo=whatsapp&logoColor=white" alt="WhatsApp" />
  </a>
  <a href="https://www.linkedin.com/in/sebastian-vasquez-echavarria-839923302/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/sebastianvasquezechavarria1234" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://instagram.com/sebastianechavarria1314/" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram" />
  </a>
  <a href="mailto:sebasvasquez1314@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
  </a>

</div>