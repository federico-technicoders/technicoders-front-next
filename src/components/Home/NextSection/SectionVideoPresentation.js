'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useGsap } from '@gsap/react'
import { useGSAP } from '@gsap/react'


export const SectionVideoPresentation = () => {
    const sectionRef = useRef(null)   

    gsap.registerPlugin(ScrollTrigger,useGSAP)

    useGSAP(() => {              
        const sectionElement = sectionRef.current

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionElement,
                start: "top top", // Comienza al llegar al tope
                end: "+=400%", // Aumenta la duración para que pin esté activo durante toda la animación
                scrub: 1, // Anima con el scroll
                pin: true, // Fijar la sección durante la animación
                // anticipatePin: 1,
                // markers: true, // Quitar en producción
            },
        })

        // Primera animación: expandir
        tl.fromTo(
            sectionElement,
            {
                scale: 0.5, // La sección empieza más pequeña
                borderRadius: "30px", // Bordes redondeados
            },
            {
                scale: 1, // Se expande a pantalla completa
                borderRadius: "0px", // Bordes rectos
                duration: 2, // Duración de la expansión
                ease: "power2.out",
            }
        )
        .to(sectionElement, {
            scale: 0.9, // Se contrae de nuevo
            borderRadius: "30px", // Vuelven los bordes redondeados
            duration: 2, // Duración de la contracción
            ease: "power2.in",
        })   
    })

    return (
        <section  className="relative flex justify-start items-start w-full h-[500vh]  text-white bg-tranparent -z-0">
            <div
                ref={sectionRef}
                className="w-full h-screen bg-white flex items-center justify-center"
            >
                <h2 className="text-white text-2xl text-center">Segunda Sección</h2>
            </div>
        </section>
    )
}

