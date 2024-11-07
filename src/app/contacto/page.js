import { ButtonCto, SectionPage, SpanGradient, TitleSection } from "@/components";
import Image from "next/image";


export default function Contacto(){
    return (
        <>
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
            <SectionPage>
                <div className="flex flex-col items-center justify-start w-full bg-white text-black py-[10%] px-[5%]">
                    <div className="flex flex-col gap-16 w-[70%]">
                        <TitleSection
                            size='104px'
                            bold='font-semibold'
                        >
                            <SpanGradient>¡Cuéntanos</SpanGradient>
                            &nbsp;tus ideas!
                        </TitleSection>
                        {/* <p>¿Tienes alguna pregunta? Estamos aquí para ayudarte. Completa el formulario y nos pondremos<br/> en contacto contigo lo antes posible. ¡Nos encantaría saber de ti!</p> */}
                        <form className="flex flex-col gap-12 w-full">
                            <input 
                                type="text" 
                                className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000]"
                                placeholder="Nombre"
                            />

                            <input 
                                type="email" 
                                className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000] mt-4"
                                placeholder="E-mail"
                            />

                            <div className="flex flex-col gap-4">
                                <input  
                                    type="text"                 
                                    className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000] mt-4"
                                    placeholder="Teléfono"
                                />
                                <div className="flex">
                                    <label className="text-[#00000080]">Contactar por: </label>
                                    <input type="checkbox" />
                                </div>
                            </div>
                

                            <select 
                                className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000] mt-4"
                            >
                                {/* elija una opción  */}
                                <option value="0">Asunto</option>
                                <option value="1">Opción 1</option>
                                <option value="2">Opción 2</option>
                                <option value="3">Opción 3</option>
                                <option value="4">Opción 4</option>
                            </select>
                            
                            <textarea 
                                type="text" 
                                className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000]"
                                placeholder="Escribe tu mensaje"
                            >

                            </textarea>
                            {/* input checkbox⁄ */}
                            <label className="flex items-center space-x-2">
                            
                                <input 
                                    type="checkbox" 
                                    className="w-5 h-5 border-2"
                                />
                            <span className="">He leído y aceptro el <a href="#">Aviso legal</a> y <a href="#">Política de privacidad</a></span>
                            </label>
                            <div className=" w-full mt-12">
                                <ButtonCto>Enviar</ButtonCto>
                            </div>
                        </form>
                    </div>
                </div>
            </SectionPage>
        </>
    )
}
