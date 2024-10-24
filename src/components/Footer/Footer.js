import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { iconosRedes } from "@/utils/iconosRedes"
import { SpanGradient } from "../ui/SpanGradient/SpanGradient"

gsap.registerPlugin(ScrollTrigger)


export const Footer = () => {
    const footerRef = useRef(null)
    const sectionRef = useRef(null)

    useGSAP(() => {
        const footerRefCurrent = footerRef.current
        const sectionRefCurrent = sectionRef.current

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRefCurrent,
                start: 'top center',
                // end: '+=30%',
                scrub: true,
            // pin: true,
                markers: true                
            }
        })

        tl.from(sectionRefCurrent, 
            {
               yPercent: -50,               
            }     
        )
    
    })
//bg-[#0E1629]
    return (
        <>
            <footer 
                ref={footerRef}
                className="relative flex flex-col justify-start items-start w-full px-[5%] pt-10 bg-[#0E1629] rounded-b-2xl z-0 pb-24"
            >
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex justify-start items-center gap-5 mb-8">
                            {iconosRedes.map((item, index) => (
                                <img key={index} src={item.image} alt="icono redes sociales" />
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
                className="relative flex justify-center items-center w-full bg-[#06D5B9] -z-20 -mt-4 px-[5%] py-[5%] font-bold"
            >
                <h2 className="text-[160px] text-center leading-none uppercase">
                    Comienza tu futuro digital
                </h2>
            </div>       
            
           
        </>
    )
}
