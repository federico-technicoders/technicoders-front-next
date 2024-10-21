'use client'
import { useRef }  from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { motion } from 'framer-motion'
import { SectionPage } from "../SectionPage/SectionPage"
import { SpanGradient } from "../ui/SpanGradient/SpanGradient"
import { TitleSection } from "../ui/TitleSection/TitleSection"
import { tecnologias1, tecnologias2 } from "@/utils/tecnologias"

const TecnologiaIcon = ({icon}) => {
    return (    
        <img src={icon.image} className="w-auto" alt="logo"  loading="lazy"/>       
    )
}

export const TecnologiasImages = ({tecnologiasImages, time}) => {
    
    return (
        <>
            <motion.span 
                initial={{ x: "0" }} 
                animate={{ x: '-100%'}} 
                transition={{repeat: Infinity,ease: 'linear', duration: time}} 
                className="flex justify-between space-x-4 min-w-full"
            >            
                {tecnologiasImages.map((item, index) =>  <TecnologiaIcon key={index} icon={item} />)}
                {/* {tecnologiasImages.map((item, index) =>  <TecnologiaIcon key={index} icon={item} />)} */}
                
            </motion.span>
           
            <motion.div 
                initial={{ x: "0" }} 
                animate={{ x: '-100%'}} 
                transition={{repeat: Infinity,ease: 'linear', duration: time}} 
                className="flex justify-between space-x-4 min-w-full"
            >            
                {tecnologiasImages.map((item, index) =>  <TecnologiaIcon key={index} icon={item} />)}
                
            </motion.div>

        </>
    )
}

// const IconInfinityParallaxHorizontal = ({IconImages}) => {
//     return (
//         <div className="flex items-start justify-start w-full h-auto overflow-hidden">
//             <TecnologiasImages tecnologiasImages={tecnologiasImages} />                    
//         </div>  
//     )
// }

export const TecnologiasSection = () => {
    const sectionRef = useRef(null)

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
        .to(sectionElement, {
            scale: 0.9, // Se contrae de nuevo
            borderRadius: "30px", // Vuelven los bordes redondeados
            duration: 2, // Duración de la contracción
            ease: "power2.in",
        })
    })

    return (
        <section  className="relative flex justify-start items-start w-full h-[400vh]  text-white bg-[#0E1629] -z-0">
            <div 
                ref={sectionRef}
                className="flex flex-col gap-32 items-center justify-center w-full h-screen px-[5%] py-[10%] bg-[#FFF] -z-10 text-black"
            >
                <TitleSection><SpanGradient>Partners</SpanGradient> tecnológicos</TitleSection> 
                <div className="w-full">
                    <div className="flex items-center justify-start w-full h-auto overflow-hidden">
                        <TecnologiasImages tecnologiasImages={tecnologias1} time={15}/>                    
                    </div>  
                    <div className="flex items-center justify-start w-full h-auto overflow-hidden">
                        <TecnologiasImages tecnologiasImages={tecnologias2} time={8} />                    
                    </div>  
                </div> 
               
            </div>
        </section>
    )
}
