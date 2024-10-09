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
                markers: true, // Quitar en producción
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
    }, [sectionRef])

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

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: sectionRef.current,
//         start: 'top center', // Inicia cuando el section esté en el centro
//         end: '+=50%', // Define el rango del scroll
//         scrub: 1.5,
//         pin: true,
//         pinSpacing: false
//         // markers: true, // Descomenta para depurar
//     }
// })

// // Fase 1: Subir y expandir
// tl.fromTo(
//     boxRef.current,
//     { scale: 0.5, borderRadius: '26px' }, // Estado inicial (pequeño y redondeado)
//     {
//         scale: 1, // Expande
//         borderRadius: '0px', // Bordes cuadrados
//         duration: 1.5 // Tiempo de expansión
//     }
// )

// // Pausa para que se quede ampliado
// tl.to(boxRef.current, { scale: 1, duration: 2, ease: "none" })// Mantiene el estado ampliado durante 1 segundo

// // Fase 2: Contraer de nuevo
// tl.fromTo(
//     boxRef.current,
//     { scale: 1 }, // Estado expandido
//     {
//         scale: 0.5, // Se contrae
//         borderRadius: '26px', // Vuelve a los bordes redondeados si lo deseas
//         duration: 1.5 // Tiempo de contracción
//     }
// )