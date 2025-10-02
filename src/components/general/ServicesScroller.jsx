// Scroller.jsx (Client component)
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ServicesCard from '../cards/ServicesCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ServicesScroller({ slides }) {
    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(3);
    const [slidesGap, setSlidesGap] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200) {
                setSlidesPerView(1);
                setSlidesGap(30);
            } else {
                setSlidesPerView(3);
                setSlidesGap(0);
            }
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.params.slidesPerView = slidesPerView;
            swiperRef.current.update();
        }
    }, [slidesPerView]);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(0, 0); 
        }
    }, [slides]);

    return (
        <div className="services-scroller">
            <div className="services-scroller__button--prev">
                <ChevronLeft size={50} />
            </div>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={slidesPerView}
                spaceBetween={slidesGap}
                centeredSlides={slidesPerView > 1}
                loop={true}
                autoplay={{
                    delay: 8000, 
                    disableOnInteraction: true,
                }}
                navigation={{
                    nextEl: '.services-scroller__button--next',  
                    prevEl: '.services-scroller__button--prev',  
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        if (index < slides.length / 2) {
                        return `<span class="${className}"></span>`;
                        }
                        return '';
                    },
                }}
                onSlideChange={(swiper) => {
                    const realCount = slides.length / 2; 
                    const realIndex = swiper.realIndex % realCount; 
                    const bullets = swiper.pagination.bullets;
                    bullets.forEach((b) => b.classList.remove('swiper-pagination-bullet-active'));

                    if (bullets[realIndex]) {
                        bullets[realIndex].classList.add('swiper-pagination-bullet-active');
                    }
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="services-scroller__slide">
                        <ServicesCard
                            img={slide.img}
                            alt={slide.alt}
                            title={slide.title}
                            bodyShort={slide.bodyShort}
                            bodyLong={slide.bodyLong}
                        />
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
            <div className="services-scroller__button--next">
                <ChevronRight size={50} /> 
            </div>
        </div>
    );
}
