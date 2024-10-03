'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules' 
import { SectionPage } from "../../SectionPage/SectionPage"
import { SpanGradient } from "../../ui/SpanGradient/SpanGradient"
import { TitleSection } from "../../ui/TitleSection/TitleSection"
import './TestimonioSection.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


export const TestimonioSection = () => {
    return (
        <SectionPage>
            <div className="top-0 left-0 flex flex-col items-center justify-start w-full  bg-white px-[5%] py-[10%] text-black text-center">
                <TitleSection><SpanGradient>Testimonios</SpanGradient> de marcas que redefinieron su camino</TitleSection>  
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="w-full"
                >
                    <SwiperSlide
                        // className='flex justify-center items-center w-full'
                    >
                        <div className="w-[90%] mt-16 bg-[#0E1629] rounded-3xl">
                            <img src="/assets/images/testimonio.webp" alt="logo" className="rounded-l-3xl h-full" loading="lazy"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        // className='flex justify-center items-center w-full'
                    >
                        <div className="w-[90%] mt-16 bg-[#0E1629] rounded-3xl">
                            <img src="/assets/images/testimonio.webp" alt="logo" className="rounded-l-3xl h-full" loading="lazy"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        // className='flex justify-center items-center w-full'
                    >
                        <div className="w-[90%] mt-16 bg-[#0E1629] rounded-3xl">
                            <img src="/assets/images/testimonio.webp" alt="logo" className="rounded-l-3xl h-full" loading="lazy"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        // className='flex justify-center items-center w-full'
                    >
                        <div className="w-[90%] mt-16 bg-[#0E1629] rounded-3xl">
                            <img src="/assets/images/testimonio.webp" alt="logo" className="rounded-l-3xl h-full" loading="lazy"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        // className='flex justify-center items-center w-full'
                    >
                        <div className="w-[90%] mt-16 bg-[#0E1629] rounded-3xl">
                            <img src="/assets/images/testimonio.webp" alt="logo" className="rounded-l-3xl h-full" loading="lazy"/>
                        </div>
                    </SwiperSlide>
                  
                   
                   
                    
                    
                    
                  
                    
                </Swiper>
                
            </div>
        </SectionPage>
    )
}
