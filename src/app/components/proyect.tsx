import React from "react";

export default function Proyect (title: string) {

    return (
        <>
        <header>{title}</header>
        <main className="flex justify-center items-center size-64 bg-purple-400">
            Soy un proyecto
        </main>
        </>
    )
}