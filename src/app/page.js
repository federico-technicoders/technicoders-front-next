import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-bold">
          Welcome to <span className="text-primary">TECHNICODERS</span>
        </h1>
        <p className="text-2xl">
          Próximamente se podrá acceder a la página de inicio de TECHNICODERS
          
        </p>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h2 className="text-2xl font-bold">
          <span className="text-primary">TECHNICODERS</span> is made with ❤️ by
        </h2>
        
      </footer>
    </div>
  );
}
