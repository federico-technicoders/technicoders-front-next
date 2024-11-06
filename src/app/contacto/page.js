import { ButtonCto, SectionPage } from "@/components";
import Image from "next/image";


export default function Contacto(){
    return (
        <SectionPage className="text-black">
            <div className="flex flex-col lg:flex-row justify-start items-start w-full h-screen p-[5%]">
                <div className="flex flex-col justify-center items-start gap-16 w-full h-full lg:w-[55%]">
                    <h2 className="text-[60px] md:text-[88px] lg:text-[104px] font-semibold">Tu próximo gran proyecto empieza con un &apos;<span className="text-teal-400">Hola</span>&apos;.</h2>
                    {/* <p className="text-xl">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p> */}
                    <ButtonCto>
                        Cuéntanos tu idea →
                    </ButtonCto>
                </div>
                <div className="flex flex-col justify-start items-start w-full lg:w-[45%]">
                    
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Image src="/assets/images/contacto.webp" fill alt="image section"/>
            </div>
        </SectionPage>
    )
}
