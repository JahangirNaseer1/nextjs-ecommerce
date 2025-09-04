"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from '../styles/HeroSliderSwiper.module.scss';

const slides = [
    {
        image: '/images/hero-bg.jpg',
        title: 'Effortless Elegance',
        desc: 'An expression of quiet luxury, Côte Royale is designed for the man who commands attention without seeking it. A reflection of nature’s raw beauty.'
    },
    {
        image: '/images/hero-bg.jpg',
        title: 'Beautiful UI, Ready to Go',
        desc: 'SCSS, Bootstrap, and reusable components for rapid development.'
    },
    {
        image: '/images/hero-bg.jpg',
        title: 'Responsive by Default',
        desc: 'Mobile-first layouts and best practices out of the box.'
    }
];


interface HeroSliderProps {
    fullWidth?: boolean;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ fullWidth = false }) => (
    <section className={fullWidth ? `${styles.heroSlider} ${styles.fullWidth}` : styles.heroSlider}>
        <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1600}
            navigation={false}
            pagination={false}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            loop
            className={styles.swiper}
        >
            {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                    <div
                        className={styles.slide + ' swiper-zoom-container'}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className={styles.overlay} />
                        <div className={styles.content}>
                            <h1>{slide.title}</h1>
                            <p>{slide.desc}</p>
                            <button className="btn-elegant">Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
);

export default HeroSlider;
