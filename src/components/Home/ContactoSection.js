import { SectionPage } from "../SectionPage/SectionPage"
import { ButtonCto } from "../ui/ButtonCto/ButtonCto"
import { SpanGradient } from "../ui/SpanGradient/SpanGradient"
import { TitleSection } from "../ui/TitleSection/TitleSection"


export const ContactoSection = () => {
    return (
        <SectionPage>
            <div className="flex flex-col justify-center items-center gap-8 w-full px-[5%] py-[10%]">
                <TitleSection>
                    <SpanGradient>¿Hablamos?</SpanGradient><br/>
                    ¡Cuéntame tus ideas!
                </TitleSection>
                <p>¿Tienes alguna pregunta? Estamos aquí para ayudarte. Completa el formulario y nos pondremos<br/> en contacto contigo lo antes posible. ¡Nos encantaría saber de ti!</p>
                <div className="w-[65%] mt-16">
                    <form>
                        <input 
                            type="text" 
                            className="bg-transparent border-b-2 border-[#FFFFFF80] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#06D5B9]"
                            placeholder="Nombre"
                        />
                        
                        <input 
                            type="email" 
                            className="bg-transparent border-b-2 border-[#FFFFFF80] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#06D5B9] mt-4"
                            placeholder="E-mail"
                        />
                        
                        <textarea 
                            type="text" 
                            className="bg-transparent border-b-2 border-[#FFFFFF80] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#06D5B9] mt-24"
                            placeholder="Escribe tu mensaje"
                        >

                        </textarea>
                        {/* input checkbox⁄ */}
                        <label className="flex items-center space-x-2">
                        
                        <input 
                            type="checkbox" 
                            className="w-5 h-5 border-2 border-gray-400 bg-transparent appearance-none checked:border-blue-500 checked:bg-transparent focus:outline-none"
                        />
                        <span className="">He leído y aceptro el <a href="#">Aviso legal</a> y <a href="#">Política de privacidad</a></span>
                        </label>
                        <div className="text-center w-full mt-12">
                            <ButtonCto>Enviar</ButtonCto>
                        </div>
                    </form>
                </div>
            </div>
        </SectionPage>
    )
}
