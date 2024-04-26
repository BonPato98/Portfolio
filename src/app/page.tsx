

export default function Home() {
  return (
    <>
    <header className="relative">
    <nav className="fixed top-0 left-0 right-0 flex justify-center items-center bg-gray-900 h-16"> 
      <a href="#start" className="mx-2">Inicio</a>
      <a href="#experience" className="mx-2">Experiencia</a>
      <a href="#proyects" className="mx-2">Projectos</a>
      <a href="#contact" className="mx-2">Contacto</a>
    </nav>
    </header>
    <main className="h-max" id="start">
      <section className="flex flex-col items-start justify-center bg-gray-950 px-32 h-screen">
      <article className="flex max-w-5xl w-auto items-start justify-around gap-5 font-roboto text-base flex-col">
        <h1 className="text-6xl font-bold leading-snug">Hola, me llamo <br /> <span className="text-purple-500">PATRICIO BONFIGLI</span></h1>
        <p className="text-4xl">Soy un Desarrollador Front End</p>
      </article>
      </section>
      <section id="experience" className="bg-gray-800 flex flex-col items-start justify-between p-24">
        <h2>Experiencia</h2>
        <article>
          <header>Sobre mí</header>
          <p>lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum</p>
        </article>
        <aside>
          <p>Tecnologías</p>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Next.js</li>
          </ul>
        </aside>
      </section>
      <section id="proyects"  className="bg-gray-700 flex flex-col items-start justify-between p-24">
        <h2>Proyectos</h2>
        <article>
          <header>Pokedex - SoyHenry</header>
        </article>
        <article>
          <header>Auxie - SoyHenry</header>
        </article>
      </section>
      <section id="contact"  className="bg-gray-600 flex flex-col items-start justify-between p-24">
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
