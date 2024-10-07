'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useGsap } from '@gsap/react'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const NextSection = () => {
  const sectionRef = useRef()
  const boxRef = useRef()

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'center center', // Inicia cuando el section esté en el centro
        end: '+=25%', // Define el rango del scroll
        scrub: 1.5,
        pin: true,
        markers: true, // Descomenta para depurar
      }
    });
    
    // Fase 1: Subir y expandir
    tl.fromTo(
      boxRef.current,
      { scale: 0.5, borderRadius: '26px' }, // Estado inicial (pequeño y redondeado)
      {
        scale: 1, // Expande
        borderRadius: '0px', // Bordes cuadrados
        duration: 1.5 // Tiempo de expansión
      }
    );
    
    // Pausa para que se quede ampliado
    tl.to(boxRef.current, { scale: 1, duration: 2, ease: "none" }); // Mantiene el estado ampliado durante 1 segundo
    
    // Fase 2: Contraer de nuevo
    tl.fromTo(
      boxRef.current,
      { scale: 1 }, // Estado expandido
      {
        scale: 0.5, // Se contrae
        borderRadius: '26px', // Vuelve a los bordes redondeados si lo deseas
        duration: 1.5 // Tiempo de contracción
      }
    );
    
    // gsap.fromTo(
    //   boxRef.current,
    //   { 
    //     scale: 0.5,
    //     borderRadius: '26px',
    //   },
    //   {
    //     scale: 1,
        
    //     borderRadius: '0px',
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: 'center center',
    //       // endTrigger: 'cohete-section', 
    //       // end: 'end top',
    //       end: "+=25%",
    //       scrub: 1.5,
    //       pin: true,
    //       markers: true, // Descomenta para depurar
    //     },
    //     duration: 1.5,
    //   }
    // )

    


    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: 'top bottom',
    //       end: 'bottom top',
    //       scrub: true,
    //       pin: true,
    //       markers: true, // Descomentar para depurar
    //     },
    //   });
  
    //   tl.fromTo(
    //     boxRef.current,
    //     { scale: 0.5, yPercent: 100 },
    //     { scale: 1, yPercent: 0, duration: 1 }
    //   ).to(
    //     boxRef.current,
    //     { scale: 1.5, duration: 1 }
    //   );
  }, [sectionRef])

  return (
    <section ref={sectionRef} className="w-full h-screen flex items-center justify-center z-10">
      <div
        ref={boxRef}
        className="w-full h-screen bg-emerald-500 flex items-center justify-center"
      >
        <h2 className="text-white text-2xl text-center">Segunda Sección</h2>
      </div>
    </section>
  )
}


// components/NextSection.js
// import { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// export default function NextSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // Registra el plugin ScrollTrigger
//     gsap.registerPlugin(ScrollTrigger);

//     const el = sectionRef.current;

//     // Establece el origen de transformación
//     gsap.set(el, { transformOrigin: 'center center' });

//     // Crea la línea de tiempo para la animación
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: el,
//         start: 'top bottom',
//         end: 'center center',
//         scrub: true,
//         pin: true,
//         // markers: true, // Descomenta para ver los marcadores
//       },
//     });

//     // Define la animación
//     tl.fromTo(
//       el,
//       { borderRadius: '20px', width: '200px', height: '200px' },
//       { borderRadius: '0px', width: '100%', height: '100vh', ease: 'none' }
//     );
//   }, []);

//   return (
//     <section ref={sectionRef} className="next-section">
//       <h2>Siguiente Sección</h2>
//       {/* Contenido adicional */}
//     </section>
//   );
// }