import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { iconosRedes } from "@/utils/iconosRedes"
import { SpanGradient } from "../ui/SpanGradient/SpanGradient"



export const Footer = () => {
    const sectionRef = useRef(null)
    const footerRef = useRef(null)



    useGSAP(() => {
        const sectionElement = sectionRef.current
        const footerElement = footerRef.current

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerElement, // Sincronizar con el footer
                start: "bottom bottom", // Empieza al llegar al final del footer
                end: "bottom bottom", // Añadir desplazamiento para controlar cuánto se despliega la sección
                scrub: 3, // Anima con el scroll
                markers: true, // Quitar en producción
            }
        })

        // Animación para que la sección aparezca detrás del footer y se despliegue hacia abajo
        tl.fromTo(
            sectionElement,
            {
                y: "-100%", // Posicionar detrás del footer al inicio
                zIndex: -20, // Posicionar detrás del footer
            },
            {
                y: "0%", // Desplegar hasta su posición normal
                zIndex: -20, // Posicionar detrás del footer
                // delay: 1, // Duración de la animación
                ease: "power2.out"
            }
        )
    }, [])

    return (
        <>
            <footer 
                // data-scroll 
                // data-scroll-speed='-.4' 
                ref={footerRef}
                className="relative flex flex-col justify-start items-start w-full px-[5%] mt-32 bg-[#0E1629] rounded-b-2xl z-0 pb-24"
            >
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex justify-start items-center gap-5 mb-8">
                            {iconosRedes.map((item, index) => (
                                <img key={index} src={item.image} alt="icono redes sociales"  />
                            ))}
                        </div>
                        <p>Copyright © 2024 Technincoders</p>
                        <div className="flex gap-x-10 justify-around items-center">
                            <p>Política de Privacidad</p>
                            <p>Términos y Condiciones</p>
                            <p>Política de Cookies</p>
                            <p>Aviso Legal</p>
                            
                        </div>
                    </div>
                    <div>
                        <p>Barcelona</p>
                        <p>Calle Vilamarí 81, 7º - 3ª, Eixample</p>
                        <p>+34 123 456 789</p>
                    </div>
                </div>            
            </footer>
            
            <div
               ref={sectionRef}
                className="relative flex justify-center items-center w-full bg-[#06D5B9] -z-20 -mt-9 px-[5%] py-[5%] font-bold"
            >
                <h2 className="text-[160px] text-center leading-none uppercase">
                    Comienza tu futuro digital
                </h2>
            </div>       
           
        </>
    )
}
