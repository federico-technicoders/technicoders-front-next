'use client'
import { useRef } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"

import { SectionPage } from "../SectionPage/SectionPage"
import { ButtonCto } from "../ui/ButtonCto/ButtonCto"

gsap.registerPlugin(ScrollTrigger)


export const CoheteSection = () => {
    const choeteSectionRef = useRef()
    // useGSAP(()=>{
    //     let eventos = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: choeteSectionRef.current,
    //             // markers: true,
    //             scrub: 8,
    //             pin: true,
    //             end: 'bottom top',
    //             pinSpacing: false,
    //         },
    //     })

    // })

    return (
        <section 
            ref={choeteSectionRef}
            className="cohete-section relative flex justify-start items-start w-full  text-white bg-[#0E1629]"
        >
            <div  className="relative px-[5%] py-[10%] w-full">
                <div className="flex flex-col justify-start items-start gap-8">
                    <h2 className="text-[90px] text-white leading-none font-semibold mt-16">
                        Programa {' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                            despegue
                        </span><br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                            empresarial
                        </span> 
                    </h2>
                    <p className="text-xl">
                        Texto provisional. Contenido de esta descripción: resumen de todo el programa + oferta<br /> 
                        irresistible. ¿Sientes que tu negocio está estancado y no logras los resultados que esperabas?<br/>
                        ¿Tienes una idea de negocio pero no sabes por dónde empezar? Muchos emprendedores y<br/>
                        empresarios enfrentan estas frustraciones: la falta de crecimiento, la incertidumbre y el miedo al
                    </p>
                    <p className="font-semibold">
                        + de 100 empresas despegadas
                    </p>
                    <p className="font-semibold">
                        + de 150 campañas de SEO exitosas
                    </p>
                    <p className="font-semibold">
                        + de 150% de visibilidad online
                    </p>
                    <p className="font-semibold">
                        + de 95% de sastifacción de clientes
                    </p>
                    <ButtonCto>
                        Saber más
                    </ButtonCto>
                </div>
                <img src="/assets/images/cohete.webp" alt="logo" className="absolute right-0 -bottom-24 z-0" data-scroll data-scroll-speed='.3' loading="lazy"/>
            </div>
        </section>
    )
}
