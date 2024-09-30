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
                                    className="px-[20px] py-[5px] border-[2px] border-cyan-400 rounded-full"
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
                        <p>
                            + de 100 empresas despegadas
                        </p>
                        <p>
                            + de 150 campañas de SEO exitosas
                        </p>
                        <p>
                            + de 150% de visibilidad online
                        </p>
                        <p>
                            + de 95% de sastifacción de clientes
                        </p>
                        <button 
                            className="px-[20px] py-[5px] border-[2px] border-cyan-400 rounded-full"
                            // style={{border: '3px solid ' , borderRadius: '50%'}}
                            >
                            <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                Saber más
                            </span>
                        </button>
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
                
            </main>
            <footer className="relative row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <h2 className="text-2xl font-bold">
                    <span className="text-primary">TECHNICODERS</span> is made with ❤️ by
                </h2>                
            </footer>
        </div>
    )
}
