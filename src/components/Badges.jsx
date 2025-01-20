import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode,  Autoplay } from 'swiper/modules'
import logo1 from '../assets/img/family-shirt.jpg'
import logo2 from '../assets/img/moriga.jpg'
import logo3 from '../assets/img/jiara.jpg'
import logo4 from '../assets/img/roosiy.jpg'
import logo5 from '../assets/img/math-zen.jpg'
import '../assets/css/index.css'

export default function Badges() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='container mx-auto md:p-10 px-4 py-6'>
            <Swiper
                spaceBetween={30}
                freeMode={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    360: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    759: {
                      slidesPerView: 5,
                      spaceBetween: 30,
                    },
                    1200: {
                      slidesPerView: 10,
                      spaceBetween: 30,
                    },
                  }}
                modules={[FreeMode, Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                <img
                    src={logo1}
                    className="rounded-box w-full"/>
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo2}
                    className="rounded-box" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo3}
                    className="rounded-box" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo4}
                    className="rounded-box" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo5}
                    className="rounded-box" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo1}
                    className="rounded-box w-full"/>
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo2}
                    className="rounded-box" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo3}
                    className="rounded-box" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo4}
                    className="rounded-box" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo5}
                    className="rounded-box" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo1}
                    className="rounded-box w-full"/>
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo2}
                    className="rounded-box" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo3}
                    className="rounded-box" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo4}
                    className="rounded-box" />
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={logo5}
                    className="rounded-box" />
                </SwiperSlide>
                <div className="autoplay-progress hidden" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    )
}