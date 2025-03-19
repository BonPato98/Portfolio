import React from "react"
import Image from "next/image"
import DefaultPreview from "../imgs/image-not-found.jpg"

interface ProyectProps {
    title: string,
    preview?: string
}

export default function Proyect ({title, preview} : ProyectProps) : JSX.Element {

    return (
        <article className="bg-gray-800 rounded grid grid-cols-2 justify-items-center max-h-lg max-w-lg">
            <Image className="aspect-16/9 object-cover" src={preview || DefaultPreview} alt="preview of the proyect"/>
            <main className="p-6 overflow-hidden">
                <header className="font-bold text-purple-400 pb-6">
                    {title}
                </header>
                    Soy una card para el proyecto {title}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, laborum beatae provident sunt velit voluptatem ratione, esse nisi suscipit voluptate ad reiciendis rerum consequatur rem facilis repellendus eveniet, doloremque aperiam.
            </main>
        </article>
    )
}