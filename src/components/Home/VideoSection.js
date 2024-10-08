import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SectionPage } from "../SectionPage/SectionPage"


const video = {
    poster: '/assets/images/image2.webp',
    source: '/assets/videos/intro-factoria-video.mp4'
}

gsap.registerPlugin(ScrollTrigger)

const VideoWraper = ({video}) => {
    return (
        <video 
            autoPlay={true} 
            playsInline={true} 
            muted={true} 
            loop={true} 
            preload="auto" 
            poster={video.poster} 
            className="top-0 left-0 w-full min-w-full h-screen object-cover -z-10"
        >
            <source src={video.source} type="video/mp4" />
        </video>
    )
}

export const VideoSection = () => {
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
                markers: true, // Quitar en producción
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
        <section  
            
            className="relative flex justify-start items-start w-full h-[400vh] text-white bg-transparent -z-0"
        >
            <video 
                ref={sectionRef}
                autoPlay={true} 
                playsInline={true} 
                muted={true} 
                loop={true} 
                preload="auto" 
                poster={video.poster} 
                className="top-0 left-0 w-full min-w-full h-screen object-cover -z-10"
            >
                <source src={video.source} type="video/mp4" />
            </video>
        </section>
    )
}
