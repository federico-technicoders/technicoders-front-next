'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { SectionPage } from "../SectionPage/SectionPage"

gsap.registerPlugin(ScrollTrigger);


export const HeroSection = () => {    
    const heroSection = useRef()
    
    useGSAP(() => {
        const heroSectionCurrent = heroSection.current
        gsap.fromTo(
            heroSectionCurrent,  
            {scale: 1},  
            {                                  
                            
                scrollTrigger: {
                    trigger: heroSectionCurrent,
                    start: 'top top',
                //   endTrigger: heroSection.current, 
                //   end: 'top center',
                    end: "+=280%",
                    pin: true,
                //   markers: true, 
                    
                },    
                // duration: 1.5              
            }
    )})
    
    return (
        <section  
            ref={ heroSection }
            className="relative fex justify-start items-start w-full  text-white -z-10"
        >
            <div className="relative flex flex-col justify-center items-center w-full h-screen px-[5%] pt-[10%] ">                    
                <div 
                    
                    className="relative flex flex-col gap-y-20 items-end justify-start w-[100%] h-full"
                >
                    <div className="absolute left-0 bottom-0 flex flex-col gap- items-start justify-start w-[100%]">
                        <h1 className="text-2xl">Agencia de marketing digital y diseño web</h1> 
                        <span className="text-[220px] font-bold leading-none">
                            Impulsamos <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"><br />tu </span> <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Negocio</span>
                        </span>  
                    </div>                       
                    {/* <button 
                        className="px-[20px] py-[5px] border-[3px] border-cyan-400 rounded-full"
                        
                    >
                        <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                            Quiero impulsar mi negocio
                        </span>
                    </button>                         */}
                </div>
                <video 
                    autoPlay={true} 
                    playsInline={true} 
                    muted={true} 
                    loop={true} 
                    preload="auto" 
                    poster="/assets/images/image2.webp" 
                    className="absolute top-0 left-0 w-full min-w-full h-full object-cover -z-10"
                >
                    {/* <source src="https://www.factoriadeproyectos.com/wp-content/uploads/2023/09/intro-factoria-cmp.mp4" type="video/mp4" /> */}
                    <source src="/assets/videos/intro-factoria-video.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    )
}
