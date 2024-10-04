'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SectionPage } from "../SectionPage/SectionPage"

gsap.registerPlugin(useGSAP);


export const HeroSection = () => {
    
    const container = useRef()
    
    useGSAP(
        () => {
            // gsap code here...
            gsap.from(container.current, { 
                y: '-1360%' 
            }); // <-- automatically reverted
        },
        { scope: container }
    )
    
    return (
        <section  className="sticky top-0 flex justify-start items-start w-full  text-white">
            <div className="relative flex flex-col justify-center items-center w-full h-screen px-[5%] pt-[10%] ">                    
                <div 
                    ref={ container }
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
