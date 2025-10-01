// ReviewsScroller.jsx (Client component)
'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AnimatedSection from '@/utils/AnimatedSection';
import ReviewsCard from '../cards/ReviewsCard';

export default function ReviewsScroller({ slides }) {
    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 1200) {
            setSlidesPerView(1);
        } else {
            setSlidesPerView(3);
        }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (swiperRef.current) {
        swiperRef.current.params.slidesPerView = slidesPerView;
        swiperRef.current.update();
        }
    }, [slidesPerView]);

    return (
        <div className='reviews-scroller'>
            <AnimatedSection animation="tickerFadeInUp" delay={0.2}>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={slidesPerView}
                    spaceBetween={30}
                    centeredSlides={slidesPerView > 1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    navigation={{
                        prevEl: ".reviews-scroller__buttons--prev",
                        nextEl: ".reviews-scroller__buttons--next",
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                    {slides.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <ReviewsCard
                                img={slide.img}
                                name={slide.name}
                                period={slide.period}
                                review={slide.review}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </AnimatedSection>
            
            <div className="reviews-scroller__buttons">
                <AnimatedSection animation="bouncingBall" delay={0.2}>
                <div className="reviews-scroller__buttons--prev">
                    <ChevronLeft size={40} />
                </div>
                </AnimatedSection>
                <AnimatedSection animation="bouncingBall" delay={0.4}>
                <div className="reviews-scroller__buttons--next">
                    <ChevronRight size={40} />
                </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
