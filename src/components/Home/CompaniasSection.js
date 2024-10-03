import { SectionPage } from "../SectionPage/SectionPage"
import { SpanGradient } from "../ui/SpanGradient/SpanGradient"
import { logosEmpresas } from "@/utils/logosEmpresas"

const Logo = ({item}) => {
    return (<img src={item.image} alt="logo" className="w-[120px]" loading="lazy"/>)
}

const Logos = ({logosEmpresas}) => {
    return (
        <div className="flex justify-around items-start w-full mt-24">
            {logosEmpresas.map((item, index) => (
                <Logo key={index} item={item} />
            ))}                   
        </div>
    )
}


export const CompaniasSection = () => {
    return (
        <SectionPage>
            <div className="flex flex-col justify-center items-center top-0 left-0 bg-white w-full h-screen px-[5%] py-[10%]">
                <h2 className="text-black text-center font-semibold">
                    Innovamos junto a <SpanGradient>marcas visionarias</SpanGradient> que no solo piensan en el futuro, lo construyen.
                </h2>
                <Logos logosEmpresas={logosEmpresas} />
            </div>            
        </SectionPage>
    )
}
