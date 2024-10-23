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
                start: "top top", 
                // end: "+=520%", // original 
                end: "+=620%", 
                scrub: 1,
                pin: true,
                // anticipatePin: 1,
                // markers: true,
            },
        })

        // Primera animación: expandir
        tl.fromTo(
            sectionElement,
            {
                scale: 0.5, 
                borderRadius: "30px", 
            },
            {
                scale: 1, 
                borderRadius: "0px",
                duration: 2, 
                ease: "power2.out",
            }
        )
        .to(sectionElement, {
            scale: 0.9, 
            borderRadius: "30px", 
            duration: 2, 
            ease: "power2.in",
        })   
    })

    return (
        <section  className="relative flex justify-start items-start w-full h-[600vh]  text-white bg-tranparent -z-0">
            <div
                ref={sectionRef}
                className="w-full h-screen bg-white flex items-center justify-center"
            >
                <h2 className="text-black text-2xl text-center">Segunda Sección</h2>
            </div>
        </section>
    )
}

