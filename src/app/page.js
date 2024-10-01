import { ButtonCto, SectionPage, SpanGradient, TitleSection } from "@/components";
import Image from "next/image";

export default function Home() {
    return (
        <div className="items-center justify-items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
            <main className="relative flex flex-col w-full min-h-screen row-start-2 items-center sm:items-start">
                <section className="relative flex flex-col items-center w-full h-screen p-[10%]">
                    <header className="absolute flex top-8 left-0 w-full items-center justify-center ">
                           <div className="flex items-center justify-start w-[90%] bg-[#0e1629bf] rounded-3xl px-[60px] py-2">
                                <img src="/assets/images/brand.webp" alt="logo" className="w-[191px]" />
                                <nav className="w-[100%] flex items-center justify-around">
                                    <ul className="flex gap-x-16 items-center justify-center text-xl">
                                        <li>
                                            <a href="#">Servicios</a>
                                        </li>
                                        <li>
                                            <a href="#">Casos de éxito</a>
                                        </li>
                                        <li>
                                            <a href="#">Sobre nosotros</a>
                                        </li>
                                        <li>
                                            <a href="#">Contácto</a>
                                        </li>
                                    </ul>
                                </nav>
                                <a 
                                    className="px-[20px] py-[5px] border-[1px] border-[#06D5B9] rounded-full"
                                    // style={{border: '3px solid ' , borderRadius: '50%'}}
                                >
                                    <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                        ¿Hablamos?
                                    </span>
                                </a>
                           </div>
                    </header>
                    <div className="flex flex-col gap-y-20 items-center justify-center w-[100%] mt-[15%]">
                        <div className="flex flex-col gap- items-center justify-center w-[100%]">
                            <h1 className="text-2xl">Agencia de marketing digital y diseño web</h1> 
                            <p className="text-9xl font-bold text-center">
                                Impulsamos <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400"><br />tu </span> <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Negocio</span>
                            </p>  
                        </div>
                       
                        <button 
                            className="px-[20px] py-[5px] border-[3px] border-cyan-400 rounded-full"
                            // style={{border: '3px solid ' , borderRadius: '50%'}}
                        >
                            <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                Quiero impulsar mi negocio
                            </span>
                        </button>                        
                    </div>
                    <video 
                        autoPlay={true} 
                        playsInline={true} 
                        muted={true} 
                        loop={true} 
                        preload="auto" 
                        poster="/assets/images/image2.webp" 
                        className="absolute top-0 left-0 w-full min-w-full h-screen object-cover -z-10"
                    >
                        {/* <source src="https://www.factoriadeproyectos.com/wp-content/uploads/2023/09/intro-factoria-cmp.mp4" type="video/mp4" /> */}
                        <source src="/assets/videos/intro-factoria-video.mp4" type="video/mp4" />
                    </video>
                </section>

                <section className="relative flex flex-col justify-center items-start w-full h-screen text-white p-[5%]">
                    <div className="flex flex-col justify-start items-start gap-8">
                        <h2 className="text-[90px] text-white leading-none font-semibold mt-16">
                            Programa {' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                despegue
                            </span><br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                empresarial
                            </span> 
                        </h2>
                        <p className="text-xl">
                            Texto provisional. Contenido de esta descripción: resumen de todo el programa + oferta<br /> 
                            irresistible. ¿Sientes que tu negocio está estancado y no logras los resultados que esperabas?<br/>
                            ¿Tienes una idea de negocio pero no sabes por dónde empezar? Muchos emprendedores y<br/>
                            empresarios enfrentan estas frustraciones: la falta de crecimiento, la incertidumbre y el miedo al
                        </p>
                        <p className="font-semibold">
                            + de 100 empresas despegadas
                        </p>
                        <p className="font-semibold">
                            + de 150 campañas de SEO exitosas
                        </p>
                        <p className="font-semibold">
                            + de 150% de visibilidad online
                        </p>
                        <p className="font-semibold">
                            + de 95% de sastifacción de clientes
                        </p>
                        <ButtonCto >
                            Saber más
                        </ButtonCto>
                    </div>
                    <img src="/assets/images/cohete.webp" alt="logo" className="absolute right-0 bottom-0 h-[100%] -z-10" />
                </section>
                <section className="relative flex justify-start items-start w-full h-screen bg-white text-black">
                    <article className="flex flex-col gap-y-10 items-start justify-center w-1/2 h-full p-[5%]">
                        <h2 className="text-[90px] leading-none font-semibold">
                            Programa <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                socio
                            </span> 
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                {' '}digital 
                            </span><br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                estratégico
                            </span> 
                        </h2>
                        <p className="text-xl">
                            Trabajamos a tu lado para impulsar tu marca y alcanzar tus metas. Se trata de un plan integral que maximiza cada oportunidad en el mundo digital.
                        </p>
                        <button 
                            className="px-[20px] py-[5px] border-[2px] border-cyan-400 rounded-full"
                            // style={{border: '3px solid ' , borderRadius: '50%'}}
                        >
                            <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                Saber más
                            </span>
                        </button>
                    </article>
                    <aside className="flex flex-col items-start justify-end gap-y-10 w-1/2 h-full bg-[url(/assets/images/image.webp)] bg-cover bg-center px-[5%] py-16">
                        <h3 className="text-[32px] font-bold text-white">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Tu equipo de marketing digital</span><br /> a tiempo completo
                        </h3>
                        <p className="text-xl text-white">
                            Como tu partner digital estratégico, nos convertimos en tu equipo de marketing externo, sin la necesidad de aumentar tu personal. Nos encargamos de todo: desde la planificación de campañas hasta la gestión de redes sociales y la optimización de tu sitio web. Obtendrás acceso a expertos dedicados que trabajan en sinergia para alcanzar tus objetivos y potenciar tu marca.
                        </p>
                    </aside>
                    <div 
                        className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[107px] h-[127px] bg-black font-extrabold text-white text-4xl rounded-[30px] border border-cyan-400"
                    >
                        1
                    </div>
                </section>

                <SectionPage>
                    <video 
                        autoPlay={true} 
                        playsInline={true} 
                        muted={true} 
                        loop={true} 
                        preload="auto" 
                        poster="/assets/images/image2.webp" 
                        className="absolute top-0 left-0 w-full min-w-full h-screen object-cover -z-10"
                    >
                        {/* <source src="https://www.factoriadeproyectos.com/wp-content/uploads/2023/09/intro-factoria-cmp.mp4" type="video/mp4" /> */}
                        <source src="/assets/videos/intro-factoria-video.mp4" type="video/mp4" />
                    </video>
                </SectionPage>
                
                <SectionPage>
                    {/* <section className="relative flex justify-center items-start w-full h-screen text-white p-[5%]"> */}
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
                                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
                                </div>
                                <img src="/assets/images/card.webp" alt="logo" className="rounded-3xl w-full" loading="lazy"/>
                            </div>
                        </aside>
                        <div 
                            className="absolute top-0 right-0 text-[#A8A8A852] uppercase text-8xl font-extrabold"
                        >
                            Transformación
                        </div>
                    {/* </section> */}
                </SectionPage>
                <SectionPage>
                    <div className="absolute flex flex-col justify-center items-center top-0 left-0 bg-white w-full h-screen p-[5%]">
                        <h2 className="text-black text-center font-semibold">
                            Innovamos junto a <SpanGradient>marcas visionarias</SpanGradient> que no solo piensan en el futuro, lo construyen.
                        </h2>
                        <div className="flex justify-around items-start w-full mt-24">
                            <img src="/assets/images/iconos-empresas/empresa.svg"  alt="logo" className="w-[120px]" loading="lazy"/>
                            <img src="/assets/images/iconos-empresas/empresa1.svg" alt="logo" className="w-[120px]" loading="lazy"/>
                            <img src="/assets/images/iconos-empresas/empresa2.svg" alt="logo" className="w-[120px]" loading="lazy"/>
                            <img src="/assets/images/iconos-empresas/empresa1.svg" alt="logo" className="w-[120px]" loading="lazy"/>
                            <img src="/assets/images/iconos-empresas/empresa4.svg" alt="logo" className="w-[120px]" loading="lazy"/>
                        </div>
                    </div>
                    
                </SectionPage>
                <SectionPage>
                    <div className="flex flex-col gap-8 items-center justify-center w-full h-screen">
                        <TitleSection>Somos el <SpanGradient>equipo</SpanGradient></TitleSection>
                        <div className="flex justify-around items-start w-full">
                            <div className="relative w-[24%] h-[500px]">
                                <img src="/assets/images/personal/personal.jpg" alt="logo" className="w-ful h-full" loading="lazy"/>
                                <div className="absolute bottom-8 flex flex-col justify-center items-center gap-2 w-full">
                                    <h3 className="font-semibold">Federico Osandón</h3>
                                    <p>Desarrollador</p>
                                </div>
                            </div>
                            <div className="relative w-[24%] h-[500px]">
                                <img src="/assets/images/personal/personal1.png" alt="logo" className="w-ful h-full" loading="lazy"/>
                                <div className="absolute bottom-8 flex flex-col justify-center items-center gap-2 w-full">
                                    <h3 className="font-semibold">Federico Osandón</h3>
                                    <p>Desarrollador</p>
                                </div>
                            </div>
                            <div className="relative w-[24%] h-[500px]">
                                <img src="/assets/images/personal/personal2.png" alt="logo" className="w-ful h-full" loading="lazy"/>
                                <div className="absolute bottom-8 flex flex-col justify-center items-center gap-2 w-full">
                                    <h3 className="font-semibold">Federico Osandón</h3>
                                    <p>Desarrollador</p>
                                </div>
                            </div>
                            <div className="relative w-[24%] h-[500px]">
                                <img src="/assets/images/personal/personal3.png" alt="logo" className="w-ful h-full" loading="lazy"/>
                                <div className="absolute bottom-8 flex flex-col justify-center items-center gap-2 w-full">
                                    <h3 className="font-semibold">Federico Osandón</h3>
                                    <p>Desarrollador</p>
                                </div>
                            </div>
                            
                        </div>
                        <ButtonCto>Conoce Más Sobre Nosotros</ButtonCto>
                    </div>
                </SectionPage>
                <SectionPage>
                    <div className="flex flex-col gap-y-20 items-center justify-center w-full h-screen">
                        <TitleSection><SpanGradient>Tecnologías</SpanGradient> implementadas</TitleSection>  
                        <div className="flex flex-col gap-8 items-start justify-start w-full h-[500px]">
                            <div className="flex justify-around items-center w-full">
                                <div className="">
                                    <img src="/assets/images/tecnologias/nextjs.svg" alt="logo"  loading="lazy"/>
                                </div>
                                <div>
                                    <img src="/assets/images/tecnologias/reactjs.svg" alt="logo"  loading="lazy"/>
                                </div>
                                <div>
                                    <img src="/assets/images/tecnologias/js.svg" alt="logo"  loading="lazy"/>
                                </div>
                                <div>
                                    <img src="/assets/images/tecnologias/nodejs.svg" alt="logo"  loading="lazy"/>
                                </div>
                                <div>
                                    <img src="/assets/images/tecnologias/aws.svg" alt="logo"  loading="lazy"/>
                                </div>
                                <div>
                                    <img src="/assets/images/tecnologias/php.svg" alt="logo"  loading="lazy"/>
                                </div>
                            </div>
                            <div className="flex justify-around items-center w-full">
                                <div className="">
                                    <img src="/assets/images/tecnologias/wp.svg" alt="logo"  loading="lazy"/>
                                </div>
                                <div>
                                    <img src="/assets/images/tecnologias/elementor.svg" alt="logo"  loading="lazy"/>
                                </div>
                                <div>
                                    <img src="/assets/images/tecnologias/woocommerce.svg" alt="logo"  loading="lazy"/>
                                </div>
                                <div>
                                    <img src="/assets/images/tecnologias/clowdflare.svg" alt="logo"  loading="lazy"/>
                                </div>
                                <div>
                                    <img src="/assets/images/tecnologias/clowdways.svg" alt="logo"  loading="lazy"/>
                                </div>                                
                                <div>
                                    <img src="/assets/images/tecnologias/stripe.svg" alt="logo"  loading="lazy"/>
                                </div>
                            </div>
                        </div>  
                    </div>
                </SectionPage>
                <SectionPage>
                    <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-white p-[5%] text-black text-center">
                        <TitleSection><SpanGradient>Testimonios</SpanGradient> de marcas que redefinieron su camino</TitleSection>  
                    </div>
                </SectionPage>
                <SectionPage>
                    <div className="flex flex-col justify-center items-center gap-8 w-full min-h-screen">
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
               
            </main>
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
                        <img src="/assets/images/icon-redes/tiktok.svg" alt="icono redes sociales"  />
                        <img src="/assets/images/icon-redes/facebook.svg" alt="icono redes sociales"  />
                        <img src="/assets/images/icon-redes/instagram.svg" alt="icono redes sociales"  />
                        <img src="/assets/images/icon-redes/linkedin.svg" alt="icono redes sociales"  />
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
        </div>
    )
}


