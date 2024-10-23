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
    HeroSection, 
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
    

    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll()

    })
    
   

   
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 2, smoothTouch: true }}>
            <div className="items-center justify-items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
                <NavBar />
                <main className="relative flex flex-col w-full min-h-screen row-start-2 items-center sm:items-start">
                   
                    <HeroSection />
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

