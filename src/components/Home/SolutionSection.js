'use client'

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger, ScrollToPlugin } from "gsap/all"
import { useGSAP } from "@gsap/react"
import { ButtonCto } from "../ui/ButtonCto/ButtonCto"
import { SpanGradient } from "../ui/SpanGradient/SpanGradient"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const SolutionSection = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                pinSpacing: true,
                start: 'top top',
                end: '+=2000',
                scrub: 1,
            },
        });

        timeline.addLabel('card1');
        timeline.to(card1Ref.current, {
            xPercent: 0,
            opacity: 1,
        });

        timeline.from(card2Ref.current, {
            yPercent: 75,
            opacity: 0,
        });
        timeline.addLabel('card2');

        timeline.to(
            card1Ref.current,
            {
                scale: 0.95,
                xPercent: -0.5,
                opacity: 0.5,
            },
            '-=0.3'
        );

        timeline.to(card2Ref.current, {
            xPercent: 0,
            opacity: 1,
        });

        timeline.from(card3Ref.current, {
            yPercent: 75,
            opacity: 0,
        });
        timeline.addLabel('card3');

        timeline.to(
            card2Ref.current,
            {
                scale: 0.98,
                xPercent: -0.4,
                opacity: 0.6,
            },
            '-=0.3'
        );

        timeline.to(card3Ref.current, {
            xPercent: 0,
            opacity: 1,
        });
    })

    return (
        <section ref={sectionRef} className="relative flex justify-start items-start w-full  text-white bg-[#0E1629] -z-0">
            <div className="flex justify-center items-start w-full text-white px-[5%] py-[5%]">
                <div 
                        className="absolute top-0 right-0 text-[#A8A8A852] uppercase text-8xl font-extrabold"
                    >
                        Transformación
                </div>
                <article className="w-1/2 bg-blue fixed top-0 left-0 h-screen flex flex-col justify-center items-start gap-y-10 px-[5%]">
                    <h2 className="text-[90px] leading-none font-semibold">
                        Nuestras <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                            soluciones
                        </span>                             
                    </h2>
                    <p className="text-xl">
                    Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry. Lorem Ipsum has been<br/> the industrys standard dummy text.
                    </p>
                    <ButtonCto>
                        Quiero impulsar mi negocio
                    </ButtonCto>
                </article>

                {/* Mitad derecha con múltiples secciones */}
                <aside className=" text-white font-slussen w-1/2 min-h-screen ml-[50%]">
                    <div
                        ref={cardsRef}
                        className="h-screen w-full m-auto relative flex justify-start items-center"
                    >
                        <div
                            ref={card1Ref}
                            className="absolute w-[90%] h-[70%] bg-transparent flex justify-center items-center rounded-[7px] mb-[50px] left-0 top-[5%]"
                        >
                            <div className="absolute flex flex-col justify-center items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-[10%] mt-10">
                                <h3 className="font-bold"><SpanGradient>Marketing digital y SEO</SpanGradient></h3>
                                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
                            </div>
                            <img src="/assets/images/card.webp" alt="logo" className="rounded-3xl w-full" loading="lazy"/>
                            {/* <h2 className="text-[80px] font-black uppercase text-[#ff98a2]">
                                01
                            </h2> */}
                        </div>
                        <div
                            ref={card2Ref}
                            className="absolute w-[90%] h-[70vh] bg-tranparent flex justify-center items-center rounded-[7px] mb-[50px] left-0 top-[10%]"
                        >
                            <div className="absolute flex flex-col justify-center items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-[10%] mt-10">
                                <h3 className="font-bold"><SpanGradient>Marketing digital y SEO</SpanGradient></h3>
                                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
                            </div>
                            <img src="/assets/images/card.webp" alt="logo" className="rounded-3xl w-full" loading="lazy"/>
                        </div>
                        <div
                            ref={card3Ref}
                            className="absolute w-[90%] h-[70vh] bg-tranparent flex justify-center items-center rounded-[7px] mb-[50px] left-0 top-[15%]"
                        >
                            <div className="absolute flex flex-col justify-center items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-[10%] mt-10">
                                <h3 className="font-bold"><SpanGradient>Marketing digital y SEO</SpanGradient></h3>
                                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
                            </div>
                            <img src="/assets/images/card.webp" alt="logo" className="rounded-3xl w-full" loading="lazy"/>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    )
}
