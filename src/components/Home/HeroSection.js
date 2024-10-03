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
            gsap.from(container.current, { y: '-1360%' }); // <-- automatically reverted
        },
        { scope: container }
    );
    return (
        <SectionPage>
            <div className="top-0 left-0 flex flex-col justify-center items-center w-full px-[5%] py-[10%]">                    
                <div 
                    ref={ container }
                    className="flex flex-col gap-y-20 items-center justify-center w-[100%] mt-[15%]"
                >
                    <div className="flex flex-col gap- items-center justify-center w-[100%]">
                        <h1 className="text-2xl">Agencia de marketing digital y diseño web</h1> 
                        <p className="text-9xl font-bold text-center">
                            Impulsamos <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"><br />tu </span> <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Negocio</span>
                        </p>  
                    </div>                       
                    <button 
                        className="px-[20px] py-[5px] border-[3px] border-cyan-400 rounded-full"
                        
                    >
                        <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                            Quiero impulsar mi negocio
                        </span>
                    </button>                        
                </div>
                <video 
                    autoPlay={true} 
                    playsInline={true} 
                    muted={true} 
                    loop={true} 
                    preload="auto" 
                    poster="/assets/images/image2.webp" 
                    className="absolute top-0 left-0 w-full min-w-full object-cover -z-10"
                >
                    {/* <source src="https://www.factoriadeproyectos.com/wp-content/uploads/2023/09/intro-factoria-cmp.mp4" type="video/mp4" /> */}
                    <source src="/assets/videos/intro-factoria-video.mp4" type="video/mp4" />
                </video>
            </div>
        </SectionPage>
    )
}
