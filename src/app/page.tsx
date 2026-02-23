import Image from "next/image"
import profilePic from "../imgs/perfil-cuadrado.jpg"
import githubLogo from "../imgs/github-logo.webp"
import linkedinLogo from "../imgs/LinkedIn-logo.webp"
import jsLogo from "../imgs/JS-logo.png"
import reactLogo from "../imgs/React-logo.png"
import nodeLogo from "../imgs/node-logo.png"
import nextLogo from "../imgs/next-logo.png"
import tailwindLogo from "../imgs/Tailwind-logo.png"
import sassLogo from "../imgs/sass-logo.png"

import Proyect from "../components/proyect"
import SmoothNav from "../components/SmoothNav"

export default function Home() {
  return (
    <>
      <header className="relative">
        <SmoothNav />
      </header>
      <main className="h-max divide-y divide-slate-400/25 scroll-smooth" id="start">
        <section className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-950 to-gray-800 px-4 md:px-16 lg:px-32 gap-y-12 md:gap-x-16 lg:gap-x-32 py-16 md:py-32 min-h-screen">
          <article className="flex max-w-5xl w-full md:w-auto items-start justify-around gap-5 font-roboto text-base flex-col text-center md:text-left">
            <h1 className="text-6xl font-bold leading-snug">
              <span className="text-purple-500">PATRICIO BONFIGLI</span>
            </h1>
            <p className="text-4xl">Desarrollador Front End</p>
            <div className="flex gap-x-6 justify-center md:justify-start">
              {[{
                href: "https://github.com/BonPato98",
                img: githubLogo,
                alt: "github logo",
                border: "border-gray-800 bg-gradient-to-b from-gray-700 to-gray-800"
              }, {
                href: "https://www.linkedin.com/in/bonfiglipatricio-1209/",
                img: linkedinLogo,
                alt: "linkedin logo",
                border: "border-transparent"
              }].map(({ href, img, alt, border }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border rounded shadow-md transition delay-100 duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-gray-900 ${border}`}
                >
                  <Image src={img} width={48} height={48} alt={alt} loading="eager"/>
                </a>
              ))}
            </div>
          </article>
          <Image src={profilePic} width={192} height={192} loading="eager" alt="imagen de perfil de Patricio Bonfigli" className="rounded-full mx-auto md:mx-0 w-40 h-40 md:w-64 md:h-64 object-cover" />
        </section>
        <section id="aboutme" className="flex flex-col md:flex-row items-center justify-center bg-gray-800 bg-gradient-to-b from-gray-800 to-gray-700 px-4 md:px-16 lg:px-32 gap-y-8 md:gap-x-12 py-16 md:py-32 min-h-screen">
          <article className="font-roboto text-base w-full md:w-1/2 lg:w-1/3 shrink text-center md:text-left">
            <h2 className="text-6xl font-bold">Sobre mí</h2>
            <br />
            <p className="text-2xs">
              Soy un desarrollador web Full Stack, con preferencia por el FrontEnd. Tengo experiencia de 1 año trabajando en proyectos web, utilizando principalmente Javascript, React y Node.
              Graduado de la escuela secundaria con un Bachiller en Artes Visuales. Poseo estudios en las carreras de Artes Digitales y Programación Informática en la Universidad Nacional de Quilmes.
              Me considero una persona autodidacta, con interés en el aprendizaje constante de nuevas cosas.
            </p>
          </article>
          <aside className="grid grid-cols-3 md:grid-cols-2 gap-4 justify-items-center w-full md:w-auto">
            {[
              { src: jsLogo, alt: "JavaScript logo" },
              { src: reactLogo, alt: "React.js logo" },
              { src: nodeLogo, alt: "Node.js logo" },
              { src: nextLogo, alt: "Next.js logo" },
              { src: tailwindLogo, alt: "Tailwind logo" },
              { src: sassLogo, alt: "Sass logo" },
            ].map(({ src, alt }) => (
              <Image key={alt} src={src} height={96} width={96} alt={alt} loading="eager" className="w-20 h-20 md:w-32 md:h-32 object-contain" />
            ))}
          </aside>
        </section>
        <section id="proyects" className="bg-gray-700 bg-gradient-to-b from-gray-700 to-gray-600 flex flex-col items-center justify-center py-16 md:py-32 px-4 md:px-16 lg:px-32 min-h-screen">
          <h2 className="font-bold text-4xl md:text-6xl mb-8 text-center">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl justify-items-center text-center">
            {["Pokedex - SoyHenry", "Auxie - SoyHenry"].map((title) => (
              <Proyect key={title} title={title} />
            ))}
          </div>
        </section>
        <section id="contact" className="bg-gray-600 flex flex-col items-center justify-center py-16 md:py-32 px-4 md:px-16 lg:px-32 min-h-screen">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Ponte en contacto conmigo</h2>
          <form className="w-full max-w-lg flex flex-col items-center">
            <fieldset className="border-2 border-white border-solid p-3 rounded-md w-full">
              <legend className="font-bold text-purple-400 px-1 text-center">Información personal</legend>
              <label className="text-center w-full">
                *Nombre:
                <input className="text-black w-full mt-1 p-2 rounded" type="text" id="name" name="name" placeholder="Tu nombre aquí" required />
              </label>
              <label className="text-center w-full">
                *Email:
                <input className="text-black w-full mt-1 p-2 rounded" type="email" id="email" name="email" placeholder="tuemail@gmail.com" required />
              </label>
              <label className="text-center w-full">
                Comentarios:
                <input className="text-black w-full mt-1 p-2 rounded" type="text" id="comments" name="comments" placeholder="Agrega información adicional" />
              </label>
              <button className="flex border-2 border-white border-solid rounded font-bold hover:border-purple-400 p-1 hover:text-purple-400 hover:bg-white mt-2 mx-auto" type="submit">Enviar</button>
            </fieldset>
          </form>
        </section>
      </main>
    </>
  );
}
