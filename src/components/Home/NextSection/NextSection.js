'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useGsap } from '@gsap/react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

export const NextSection = () => {
  const sectionRef = useRef();
  const boxRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      { scale: 0.5, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          // markers: true, // Descomenta para depurar
        },
      }
    )
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
  }, [sectionRef, boxRef]);

  return (
    <section ref={sectionRef} className="w-full h-screen flex items-center justify-center z-10">
      <div
        ref={boxRef}
        className="w-full h-screen bg-[#0E1629] flex items-center justify-center"
      >
        <h2 className="text-white text-2xl text-center">Segunda Sección</h2>
      </div>
    </section>
  );
};
