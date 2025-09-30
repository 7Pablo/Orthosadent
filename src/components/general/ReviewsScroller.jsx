// ReviewsScroller.jsx (Client component)
'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
            
        </div>
    );
}
