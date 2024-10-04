'use client'
import { motion } from 'framer-motion'
import { SectionPage } from "../SectionPage/SectionPage"
import { SpanGradient } from "../ui/SpanGradient/SpanGradient"
import { TitleSection } from "../ui/TitleSection/TitleSection"
import { tecnologias1, tecnologias2 } from "@/utils/tecnologias"

const TecnologiaIcon = ({icon}) => {
    return (    
        <img src={icon.image} className="w-auto" alt="logo"  loading="lazy"/>       
    )
}

const TecnologiasImages = ({tecnologiasImages, time}) => {
    console.log(time)
    return (
        <>
            <motion.span 
                initial={{ x: "0" }} 
                animate={{ x: '-100%'}} 
                transition={{repeat: Infinity,ease: 'linear', duration: time}} 
                className="flex justify-between space-x-4 min-w-full"
            >            
                {tecnologiasImages.map((item, index) =>  <TecnologiaIcon key={index} icon={item} />)}
                {/* {tecnologiasImages.map((item, index) =>  <TecnologiaIcon key={index} icon={item} />)} */}
                
            </motion.span>
           
            <motion.div 
                initial={{ x: "0" }} 
                animate={{ x: '-100%'}} 
                transition={{repeat: Infinity,ease: 'linear', duration: time}} 
                className="flex justify-between space-x-4 min-w-full"
            >            
                {tecnologiasImages.map((item, index) =>  <TecnologiaIcon key={index} icon={item} />)}
                
            </motion.div>

        </>
    )
}

// const IconInfinityParallaxHorizontal = ({IconImages}) => {
//     return (
//         <div className="flex items-start justify-start w-full h-auto overflow-hidden">
//             <TecnologiasImages tecnologiasImages={tecnologiasImages} />                    
//         </div>  
//     )
// }

export const TecnologiasSection = () => {
    return (
        <SectionPage>
            <div className="flex flex-col gap-32 items-center justify-center w-full px-[5%] py-[10%] bg-[#FFF] -z-10 text-black">
                <TitleSection><SpanGradient>Tecnologías</SpanGradient> implementadas</TitleSection> 
                <div className="w-full">
                    <div className="flex items-start justify-start w-full h-auto overflow-hidden">
                        <TecnologiasImages tecnologiasImages={tecnologias1} time={15}/>                    
                    </div>  
                    <div className="flex items-start justify-start w-full h-auto overflow-hidden">
                        <TecnologiasImages tecnologiasImages={tecnologias2} time={8} />                    
                    </div>  
                </div> 
               
            </div>
        </SectionPage>
    )
}
