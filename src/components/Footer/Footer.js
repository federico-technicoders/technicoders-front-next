import { iconosRedes } from "@/utils/iconosRedes"
import { SpanGradient } from "../ui/SpanGradient/SpanGradient"



export const Footer = () => {
    return (
        <footer className="relative flex flex-col justify-start gap-20 items-start w-full px-[5%] mt-32">
                <div className="flex items-center justify-between w-full">
                    <img src="/assets/images/brand.webp" alt="logo" className="w-[447px]" />
                    <h2 className="text-5xl font-semibold"><SpanGradient>¡Tu futuro digital empieza aquí!</SpanGradient></h2>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center gap-32">
                        <div className="flex flex-col gap-y-4 items-start justify-start">
                            <p><SpanGradient>Empresa</SpanGradient></p>
                            <p><span>Únete al equipo</span></p>
                            <p><span>FAQs</span></p>
                        </div>
                        <div className="flex flex-col gap-y-4 items-start justify-start">
                            <p><SpanGradient>Contáctanos</SpanGradient></p>
                            <p><span>Únete al equipo</span></p>
                            <p><span>FAQs</span></p>
                        </div>
                        <div className="flex flex-col gap-y-4 items-start justify-start">
                            <p><SpanGradient>Dirección</SpanGradient></p>
                            <p><span>Únete al equipo</span></p>
                            <p>v<span>FAQs</span></p>
                        </div>
                        
                    </div>
                    <div className="flex justify-start items-center gap-10">
                        {iconosRedes.map((item, index) => (
                            <img key={index} src={item.image} alt="icono redes sociales"  />
                        ))}
                    </div>
                </div>              
                <div className="flex items-center justify-around w-full text-[#898989]">
                    <div className="flex items-center justify-around gap-5">
                        <span className="text-[14px]">Política de Privacidad</span> 
                        <span className="text-[14px]">Términos y Condiciones</span> 

                    </div>
                    <span className="text-[14px]">Copyright © 2024 Technincoders</span> 
                    <div className="flex items-center justify-around gap-5">
                        <span className="text-[14px]">Política de Coockies</span> 
                        <span className="text-[14px]">Aviso Legal</span> 

                    </div>
                </div>              
            </footer>
    )
}
