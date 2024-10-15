import { SectionPage } from "../SectionPage/SectionPage"
import { ButtonCto } from "../ui/ButtonCto/ButtonCto"
import { SpanGradient } from "../ui/SpanGradient/SpanGradient"

export const SolucionesSection = () => {
    return (
        <SectionPage>
            <div className="flex justify-center items-start w-full text-white px-[5%] py-[10%]">
            <div 
                    className="absolute top-0 right-0 text-[#A8A8A852] uppercase text-8xl font-extrabold"
                >
                    Transformación
                </div>
                <article className="flex flex-col items-start justify-center  gap-y-10 w-1/2 h-screen pr-[5%]">
                    <h2 className="text-[90px] leading-none font-semibold">
                        Nuestras <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                            soluciones
                        </span>                             
                    </h2>
                    <p className="text-xl">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.
                    </p>
                    <ButtonCto>
                        Quiero impulsar mi negocio
                    </ButtonCto>
                </article>
                <aside className="relative flex flex-col items-center justify-center w-1/2 h-screen bg-cover bg-center] pl-[5%]">
                    <div className="relative border border-[#06D5B9] rounded-3xl">
                        <div className="absolute flex flex-col justify-center items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-[10%] mt-10">
                            <h3><SpanGradient>Marketing digital y SEO</SpanGradient></h3>
                            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
                        </div>
                        <img src="/assets/images/card.webp" alt="logo" className="rounded-3xl w-full" loading="lazy"/>
                    </div>
                    <div className="relative border border-[#06D5B9] rounded-3xl">
                        <div className="absolute flex flex-col justify-center items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-[10%] mt-10">
                            <h3><SpanGradient>Marketing digital y SEO</SpanGradient></h3>
                            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
                        </div>
                        <img src="/assets/images/card.webp" alt="logo" className="rounded-3xl w-full" loading="lazy"/>
                    </div>
                    <div className="relative border border-[#06D5B9] rounded-3xl">
                        <div className="absolute flex flex-col justify-center items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-[10%] mt-10">
                            <h3><SpanGradient>Marketing digital y SEO</SpanGradient></h3>
                            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
                        </div>
                        <img src="/assets/images/card.webp" alt="logo" className="rounded-3xl w-full" loading="lazy"/>
                    </div>
                    <div className="relative border border-[#06D5B9] rounded-3xl">
                        <div className="absolute flex flex-col justify-center items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-[10%] mt-10">
                            <h3><SpanGradient>Marketing digital y SEO</SpanGradient></h3>
                            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
                        </div>
                        <img src="/assets/images/card.webp" alt="logo" className="rounded-3xl w-full" loading="lazy"/>
                    </div>
                </aside>
                
            </div>
        </SectionPage>
    )
}
