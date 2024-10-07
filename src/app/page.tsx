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

export default function Home() {
  return (
    <>
    <header className="relative">
    <nav className="fixed top-0 left-0 right-0 flex justify-center items-center bg-gray-900 h-16"> 
      <a href="#start" className="mx-2">Inicio</a>
      <a href="#aboutme" className="mx-2">Sobre mí</a>
      <a href="#proyects" className="mx-2">Projectos</a>
      <a href="#contact" className="mx-2">Contacto</a>
    </nav>
    </header>
    <main className="h-max divide-y divide-slate-400/25" id="start">
      <section className="flex items-center justify-center bg-gradient-to-b from-gray-950 to-gray-800 p-32 gap-x-32 h-screen">
      <article className="flex max-w-5xl w-auto items-start justify-around gap-5 font-roboto text-base flex-col">
        <h1 className="text-6xl font-bold leading-snug">Hola, me llamo <br /> <span className="text-purple-500">PATRICIO BONFIGLI</span></h1>
        <p className="text-4xl">Soy un Desarrollador Front End</p>
        <div className="flex gap-x-6">
          <a href="https://github.com/BonPato98" target="_blank">
            <Image src={githubLogo} width={48} height={48} alt="github logo"/>
          </a>
          <a href="https://www.linkedin.com/in/bonfiglipatricio-1209/" target="_blank">
            <Image src={linkedinLogo} width={48} height={48} alt="linkedin logo"/>
          </a>
        </div>
      </article>
      <Image src={profilePic} width={256} height={256} alt="imagen de perfil de Patricio Bonfigli" className="rounded-full"/>
      </section>
      <section id="aboutme" className="flex items-center justify-center bg-gray-800 bg-gradient-to-b from-gray-800 to-gray-700 p-32 gap-x-12 h-screen">
        <article className="h-1/2 font-roboto text-base w-1/3 shrink">
          <h2 className="text-6xl font-bold ">Sobre mí</h2>
          <br/>
          <p className="text-2xs">
            Soy un desarrollador web Full Stack, con preferencia por el FrontEnd. Tengo experiencia de 1 año trabajando en proyectos web, utilizando principalmente Javascript, React y Node.
            Graduado de la escuela secundaria con un Bachiller en Artes Visuales. Poseo estudios en las carreras de Artes Digitales y Programación Informática en la Universidad Nacional de Quilmes.
            Me considero una persona autodidacta, con interés en el aprendizaje constante de nuevas cosas.
          </p>
        </article>
        <aside className="grid grid-cols-2 gap-4 justify-items-center">
          {/* <p className="text-4xl font-bold">Tecnologías</p> */}
          {/* <div className="grid grid-cols-2 gap-3"> */}
          <Image src={jsLogo} height={128} alt="JavaScript logo"/>
          <Image src={reactLogo} height={128} alt="React.js logo"/>
          <Image src={nodeLogo} height={128} alt="Node.js logo"/>
          <Image src={nextLogo} height={128} alt="Next.js logo"/>
          <Image src={tailwindLogo} height={128} alt="Tailwind logo"/>
          <Image src={sassLogo} height={128} alt="Sass logo"/>
          {/* </div> */}
        </aside>
      </section>
      <section id="proyects"  className="bg-gray-700 bg-gradient-to-b from-gray-700 to-gray-600 flex flex-col items-start justify-evenly p-32 h-screen">
        <h2>Proyectos</h2>
        <div className="grid grid-cols-3 gap-4">
        <Proyect title="Pokedex - SoyHenry"/>
        <Proyect title="Auxie - SoyHenry"/>
        </div>
      </section>
      <section id="contact"  className="bg-gray-600 flex flex-col items-start justify-between p-32 h-screen">
        <h2>Ponte en contacto conmigo</h2>
        <form>
          <fieldset className="border-2 border-white border-solid p-3">
            <legend className="font-bold text-purple-400 px-1">Información personal</legend>
            <label className="block m-3">
              *Nombre:
              <input className="text-black" type="text" id="name" name="name" placeholder="Tu nombre aquí" required/>
            </label>
            <label className="block m-3">
              *Email:
              <input className="text-black" type="email" id="email" name="email" placeholder="tuemail@gmail.com" required/>
            </label>
            <label className="block m-3">
              Comentarios: <br />
              <input className="text-black" type="text" id="comments" name="comments" placeholder="Agrega información adicional"/>
            </label>
            <button className="flex border-2 border-white border-solid rounded font-bold hover:border-purple-400 p-1 hover:text-purple-400 hover:bg-white" type="submit">Enviar</button>
          </fieldset>
        </form>
      </section>
    </main>
    </>
  )
}
