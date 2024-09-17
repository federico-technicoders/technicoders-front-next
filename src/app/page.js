import Image from "next/image";

export default function Home() {
    return (
        <div className="items-center justify-items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col w-full h-screen row-start-2 items-center sm:items-start">
                <section className="flex flex-col items-center bg-[url(/assets/images/img-h.webp)] bg-cover bg-center bg-no-repeat w-full h-screen p-[10%]">
                    <header className="absolute flex top-8 left-0 w-full items-center justify-center ">
                           <div className="flex items-center justify-start w-[90%] bg-[#0e1629bf] rounded-3xl px-[60px] py-2">
                                <img src="/assets/images/brand.webp" alt="logo" className="" />
                                <nav className="w-[100%] flex items-center justify-around">
                                    <ul className="flex gap-x-16 items-center justify-center">
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

                           </div>
                    </header>
                    <div className="flex flex-col gap-y-20 items-center justify-center w-[100%] pt-72">
                        <div className="flex flex-col gap- items-center justify-center w-[100%]">
                            <label className="text-3xl">Agencia de marketing digital y diseño web</label> 
                            <h1 className="text-7xl font-bold text-center">
                                <span className="text-[#06D5B9]">Potenciamos tu marca</span> con tecnología de vanguardia
                            </h1>  
                        </div>
                        <button className="bg-[#06D5B9] px-[20px] py-[5px] rounded-3xl">Saber Más</button>
                    </div>
                </section>  
                
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <h2 className="text-2xl font-bold">
                <span className="text-primary">TECHNICODERS</span> is made with ❤️ by
                </h2>
                
            </footer>
        </div>
    )
}
