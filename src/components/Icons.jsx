// Wavy underline SVG used in nav links
export const WavySvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="53" height="4" viewBox="0 0 53 4" fill="none">
    <g clipPath="url(#clip0)">
      <path
        d="M51.9 3C49 3 49 1 46.2 1c-2.8 0-2.8 2-5.7 2-2.8 0-2.8-2-5.7-2C32 1 32 3 29.1 3c-2.8 0-2.8-2-5.7-2-2.8 0-2.8 2-5.6 2S15 1 12.1 1C9.5 1 9.5 3 6.7 3 3.8 3 3.8 1 1 1"
        stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="52.9" height="4" fill="#404040" />
      </clipPath>
    </defs>
  </svg>
)

// Arrow right SVG used in cards/buttons
export const ArrowSvg = () => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="01_desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="00_home" transform="translate(-637.000000, -3540.000000)">
        <g id="02_platforms" transform="translate(0.000000, 2936.000000)">
          <g id="Group-23" transform="translate(165.000000, 260.000000)">
            <g id="Group-21" transform="translate(24.000000, 324.000000)">
              <g id="Group-20" transform="translate(436.000000, 8.000000)">
                <g id="arrow_right" transform="translate(12.000000, 12.000000)">
                  <rect id="frame" x="0" y="0" width="24" height="24" />
                  <path id="shape" d="M13.3632812,18.5078125 C13.6132812,18.5078125 13.8554688,18.40625 14.0664062,18.1953125 L19.1914062,13.0859375 C19.3867188,12.890625 19.5039062,12.6171875 19.5039062,12.34375 C19.5039062,12.0703125 19.3867188,11.7890625 19.1914062,11.6015625 L14.0820312,6.4921875 C13.8632812,6.2734375 13.6132812,6.171875 13.3632812,6.171875 C12.7851562,6.171875 12.3789062,6.5859375 12.3789062,7.125 C12.3789062,7.421875 12.5039062,7.65625 12.6835938,7.84375 L14.4570312,9.625 L16.4335938,11.4375 L14.6757812,11.34375 L5.52734375,11.34375 C4.91015625,11.34375 4.49609375,11.75 4.49609375,12.34375 C4.49609375,12.9375 4.91015625,13.34375 5.52734375,13.34375 L14.6757812,13.34375 L16.4335938,13.2421875 L14.4570312,15.0625 L12.6835938,16.8359375 C12.5039062,17.0234375 12.3789062,17.2578125 12.3789062,17.5546875 C12.3789062,18.1015625 12.7851562,18.5078125 13.3632812,18.5078125 Z" fill="#FFFFFF" fillRule="nonzero" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

// Dropdown arrow SVG for Projects nav
export const DropdownSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M11.996 16.75C12.332 16.75 12.621 16.617 12.879 16.36L18.73 10.36C18.934 10.156 19.043 9.90599 19.043 9.60999C19.043 8.99999 18.559 8.51599 17.957 8.51599C17.66 8.51599 17.379 8.63299 17.16 8.85199L12.004 14.164L6.84003 8.85199C6.62103 8.64099 6.34803 8.51599 6.04303 8.51599C5.44103 8.51599 4.95703 8.99999 4.95703 9.60899C4.95703 9.90599 5.06703 10.156 5.27003 10.367L11.121 16.359C11.395 16.625 11.668 16.75 11.996 16.75Z" fill="#E0E0FF" fillOpacity="1" />
  </svg>
)

// Social icons
export const GithubSvg = ({ color = '#ffffff' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
)

export const LinkedinSvg = ({ color = '#ffffff' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M8 11l0 5" />
    <path d="M8 8l0 .01" />
    <path d="M12 16l0 -5" />
    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
  </svg>
)

export const MailSvg = ({ color = '#ffffff' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
    <path d="M3 7l9 6l9 -6" />
  </svg>
)

export const InstagramSvg = ({ color = '#ffffff' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M16.5 7.5l0 .01" />
  </svg>
)

export const QuoteSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 975.036 975.036" width="100%">
    <path fill="var(--color-lilac)" d="m925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50z" />
    <path fill="" d="m106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2s30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
  </svg>
)

export const SocialLinks = ({ btnClass = 'btnClick' }) => (
  <>
    <li>
      <a className={btnClass} target="_blank" rel="noopener noreferrer" id="hero__flex__btn" href="https://github.com/sebastianvasquezechavarria1234?tab=repositories">
        <GithubSvg />
      </a>
    </li>
    <li>
      <a className={btnClass} target="_blank" rel="noopener noreferrer" id="hero__flex__btn" href="https://www.linkedin.com/in/sebastian-vasquez-echavarria-839923302/">
        <LinkedinSvg />
      </a>
    </li>
    <li>
      <a
        className={btnClass}
        id="hero__flex__btn"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=sebasvasquez1314@gmail.com&su=Contacto%20desde%20la%20web&body=Hola%20Sebasti%C3%A1n%2C%0A%0A"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Redactar correo en Gmail a Sebastián"
      >
        <MailSvg />
      </a>
    </li>
    <li>
      <a className={btnClass} target="_blank" rel="noopener noreferrer" id="hero__flex__btn" href="https://www.instagram.com/sebastianechavarria1314/">
        <InstagramSvg />
      </a>
    </li>
  </>
)

export const HoverLinePath = () => (
  <svg className="svg-hover-lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 441.31 249.44">
    <path
      className="linePath-hover"
      d="M49.21,193.1c-7.62-14.96-10.07-32.02-7.67-48.44,2.63-16.56,10.13-31.33,19.71-44.14,9.63-12.79,21.4-23.51,33.85-32.93,6.21-4.72,12.68-9.07,19.24-13.18l4.89-3.12c1.66-1.01,3.34-1.93,5.02-2.92,3.37-1.89,6.66-3.95,10.09-5.73C174.19,21.19,218.87,8.82,264.1,6.41c22.62-1.16,45.36.11,67.71,3.89,11.18,1.72,22.31,4.31,33.31,7.86,10.96,3.6,21.74,8.36,31.65,14.86,17.84,11.62,32.33,29.7,37.13,51.5,2.38,10.84,1.75,22.58-1.79,33.06-1.61,5.33-4.15,10.25-6.84,14.97-2.85,4.64-6,9.03-9.5,13.02-14.02,16.05-31.55,27.59-49.01,37.56-17.5,10.12-35.71,19.03-54.42,26.71-17.55,7.3-35.63,13.25-53.96,18.22-18.35,4.91-36.99,8.9-55.84,11.38-18.85,2.53-37.87,3.88-56.91,4l-14.29-.16-14.28-.74c-9.55-.55-19.23-1.68-28.8-3.48-16.48-3.2-33.17-8.37-47.99-18.17-14.76-9.63-27.1-24.7-31.7-42.41-4.78-17.56-2.54-36.01,4.05-52.17,3.33-8.1,7.8-15.76,13.4-22.51,5.53-6.72,11.93-12.63,18.89-17.69,6.52-4.78,14.1-9.47,22.31-13.3"
      fill="none" stroke="#ff3b00" strokeMiterlimit="10" strokeWidth="12"
    />
  </svg>
)
