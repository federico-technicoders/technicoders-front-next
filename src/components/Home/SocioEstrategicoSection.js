import { SectionPage } from "../SectionPage/SectionPage"


export const SocioEstrategicoSection = () => {
    return (
        <SectionPage>
            <div className="flex w-full  bg-white text-black h-[952px] ">
                <article className="flex flex-col gap-y-10 items-start justify-center w-1/2 h-full px-[5%] py-[10%]">
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
                    >
                        <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                            Saber más
                        </span>
                    </button>
                </article>
                <aside className="relative flex flex-col items-start justify-end gap-y-10 w-1/2  px-[5%] py-16">
                    <h3 className="text-[32px] font-bold text-white leading-none">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Tu equipo de marketing digital</span><br /> a tiempo completo
                    </h3>
                    <p className="text-xl text-white">
                        Como tu partner digital estratégico, nos convertimos en tu equipo de marketing externo, sin la necesidad de aumentar tu personal. Nos encargamos de todo: desde la planificación de campañas hasta la gestión de redes sociales y la optimización de tu sitio web. Obtendrás acceso a expertos dedicados que trabajan en sinergia para alcanzar tus objetivos y potenciar tu marca.
                    </p>
                    <img src="/assets/images/image.webp" alt="imagen" className="absolute top-0 left-0 w-full h[952px] " />
                </aside>
                <div 
                    className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[107px] h-[127px] bg-black font-extrabold text-white text-4xl rounded-[30px] border border-cyan-400"
                >
                    1
                </div>
            </div>
        </SectionPage>
    )
}
