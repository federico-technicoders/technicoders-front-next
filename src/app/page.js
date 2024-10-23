'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'
import { ReactLenis } from "@studio-freight/react-lenis";
import { NavBar } from "@/components/NavBar/NavBar"
import { Footer } from "@/components/Footer"
import { 
    CoheteSection, 
    CompaniasSection, 
    ContactoSection, 
    EquipoSection, 
    SectionVideoPresentation,
    SocioEstrategicoSection, 
    SolucionesSection, 
    TecnologiasSection, 
    TestimonioSection, 
    VideoSection 
} from "@/components/Home"
// import '@fontsource-variable/red-hat-display'
import 'swiper/css'
import { SolutionSection } from '@/components'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}


export default function Home() {
    const heroSection = useRef()
    const sectionRef = useRef(null)
    const boxRef = useRef(null)

    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll()

    })
    
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
                      end: "+=390%",
                      pin: true,
                    //   markers: true, 
                      
                    },    
                    // duration: 1.5              
                }
    )})

   
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 2, smoothTouch: true }}>
            <div className="items-center justify-items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
                <NavBar />
                <main className="relative flex flex-col w-full min-h-screen row-start-2 items-center sm:items-start">
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
                    
                    <SectionVideoPresentation />
                    <CoheteSection />
                    <SocioEstrategicoSection />
                    <VideoSection />
                    {/* <SolucionesSection/> */}
                    <SolutionSection/>
                    <CompaniasSection/>
                    <EquipoSection />
                    <TecnologiasSection />
                    <TestimonioSection />
                    <ContactoSection />            
                </main>
                <Footer />
            </div>
        </ReactLenis>
    )
}

