import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/types';
import { Autoplay, Pagination, Navigation, Lazy } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import 'swiper/css/lazy';
import { Subtitles } from 'lucide-react';

inferface Slide {
    id: number;
  image: string;
    alt: string;
    title?: string;
    Subtitles?: string;
}

const SliderBanner: React.FC = () => {
    const progressCircle = useRef<SVGElement>(null);
    const swiperRef = useRef<HTMLSpanElement>(null);
 
    const slides: Slides[] = [
        {
            id: 1,
            image: 'img/banner/banner.1.jpg',
            alt: 'Promoção de Verão',
            title: 'Promoção de Verão',
            Subtitles: 'Descontos de até 50%',
        },
        
    ]
}

}