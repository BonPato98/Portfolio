import React from "react"
import Image from "next/image"
import DefaultPreview from "../imgs/image-not-found.jpg"

interface ProyectProps {
    title: string,
    preview?: string
}

export default function Proyect ({title, preview} : ProyectProps) : JSX.Element {

    return (
        <article className="p-4 bg-purple-800 rounded">
            <header className="text-xl font-bold">
                {title}
            </header>
            <Image src={preview || DefaultPreview} height={264} alt="preview of the proyect"/>
            <main className="">
                Soy una card para el proyecto {title}
            </main>
        </article>
    )
}