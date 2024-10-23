import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { SectionPage } from "../SectionPage/SectionPage"
import { SpanGradient } from "../ui/SpanGradient/SpanGradient"

import { TecnologiasImages } from "./TecnologiasSection"
import { Marquee } from "./Marquee"
import { companyIcons } from "@/utils/logosEmpresas"


const Logo = ({item}) => {
    return (<img src={item.image} alt="logo" className="w-[120px]" loading="lazy"/>)
}

const Logos = ({logosEmpresas}) => {
    return (
        <div className="flex items-center justify-start w-full overflow-x-hidden">
            <TecnologiasImages tecnologiasImages={logosEmpresas} time={8} />                       
        </div>
    )
}


export const CompaniasSection = () => {
    const sectionRef = useRef()

    useGSAP(()=>{
        const sectionElement = sectionRef.current

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionElement,
                start: "top top", // Comienza al llegar al tope
                end: "+=300%", // Aumenta la duración para que pin esté activo durante toda la animación
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
                scale: 0.9, // La sección empieza más pequeña
                borderRadius: "30px", // Bordes redondeados
            },
            {
                scale: 1, // Se expande a pantalla completa
                borderRadius: "0px", // Bordes rectos
                duration: 2, // Duración de la expansión
                ease: "power2.out",
            }
        )
        // .to(sectionElement, {
        //     scale: 0.9, // Se contrae de nuevo
        //     borderRadius: "30px", // Vuelven los bordes redondeados
        //     duration: 2, // Duración de la contracción
        //     ease: "power2.in",
        // })
    })

    return (
        <section  className="relative flex justify-start items-start w-full h-[400vh] text-white bg-transparent -z-0">
            <div 
                ref={sectionRef}
                className="flex flex-col justify-center items-center top-0 left-0 bg-white w-full h-screen px-[5%] py-[10%] overflow-hidden"
            >
                <h2 className="text-black text-center font-semibold mb-24">
                    Innovamos junto a <SpanGradient>marcas visionarias</SpanGradient> que no solo piensan en el futuro, lo construyen.
                </h2>
                <div className="flex flex-col items-center justify-center w-full h-screen">
                    <Marquee ELEMENTS={companyIcons} height={150} />
                </div>
                {/* <Logos logosEmpresas={logosEmpresas} /> */}
            </div>            
        </section>
    )
}
