import React from "react"
import Image from "next/image"
import DefaultPreview from "../imgs/image-not-found.jpg"

interface ProyectProps {
    title: string,
    preview?: string
}

export default function Proyect ({title, preview} : ProyectProps) : JSX.Element {
    return (
        <article className="bg-gray-800 rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 justify-items-center max-w-full md:max-w-lg w-full">
            <div className="w-full h-40 md:h-auto flex items-center justify-center">
                <Image 
                    className="object-cover w-full h-full aspect-video" 
                    src={preview || DefaultPreview} 
                    alt="preview of the proyect" 
                    width={320} 
                    height={180}
                    sizes="(max-width: 768px) 100vw, 320px"
                    loading="eager"
                />
            </div>
            <main className="p-4 md:p-6 overflow-hidden flex flex-col justify-center w-full">
                <header className="font-bold text-purple-400 pb-4 md:pb-6 text-lg md:text-xl text-center md:text-left">
                    {title}
                </header>
                <p className="text-xs md:text-base text-gray-200">
                    Soy una card para el proyecto {title}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </main>
        </article>
    )
}