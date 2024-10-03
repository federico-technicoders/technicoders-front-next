

import { NavBar } from "@/components/NavBar/NavBar"
import { Footer } from "@/components/Footer"
import { 
    CoheteSection, 
    CompaniasSection, 
    ContactoSection, 
    EquipoSection, 
    HeroSection, 
    SocioEstrategicoSection, 
    SolucionesSection, 
    TecnologiasSection, 
    TestimonioSection, 
    VideoSection 
} from "@/components/Home"
import 'swiper/css'



export default function Home() {
    return (
        <div className="items-center justify-items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
            <NavBar />
            <main className="relative flex flex-col w-full min-h-screen row-start-2 items-center sm:items-start">
                <HeroSection />
                <CoheteSection />
                <SocioEstrategicoSection />
                <VideoSection />
                <SolucionesSection/>
                <CompaniasSection/>
                <EquipoSection />
                <TecnologiasSection />
                <TestimonioSection />
                <ContactoSection />            
            </main>
            <Footer />
        </div>
    )
}


