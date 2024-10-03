import { tecnologias1, tecnologias2 } from "@/utils/tecnologias"
import { SectionPage } from "../SectionPage/SectionPage"
import { SpanGradient } from "../ui/SpanGradient/SpanGradient"
import { TitleSection } from "../ui/TitleSection/TitleSection"

const TecnologiaIcon = ({icon}) => {
    return (    
        <img src={icon.image} alt="logo"  loading="lazy"/>       
    )
}

const TecnologiasImages = ({tecnologiasImages}) => {
    return (
        <div className="flex justify-around items-center w-full">            
            {tecnologiasImages.map((item, index) =>  <TecnologiaIcon key={index} icon={item} />)}
        </div>
    )
}

export const TecnologiasSection = () => {
    return (
        <SectionPage>
            <div className="flex flex-col gap-y-20 items-center justify-center w-full px-[5%] py-[10%]">
                <TitleSection><SpanGradient>Tecnologías</SpanGradient> implementadas</TitleSection>  
                <div className="flex flex-col gap-8 items-start justify-start w-full h-[500px]">
                    <TecnologiasImages tecnologiasImages={tecnologias1} />
                    <TecnologiasImages tecnologiasImages={tecnologias2} />
                </div>  
            </div>
        </SectionPage>
    )
}
