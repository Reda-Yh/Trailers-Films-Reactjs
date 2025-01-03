import React, { useEffect, useState } from 'react'
import './Trend.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import TrendCard from './TrendCard';

const Trend = () => {
    const [slides, setSlides] = useState([]);
    const fetchData = () => {
        fetch("/data/movieData.json")
            .then(res => res.json())
            .then(data => setSlides(data))
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <section id='trend' className='trend'>
            <div className='row'>
                <h4 className='section-title'>
                    Comming Soon
                </h4>
            </div>
            <div className='row'>
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        992: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    }}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className='trendSwiper'
                >
                    {slides &&
                        slides.length > 0 &&
                        slides.map(slide => (
                            <SwiperSlide key={slide._id}>
                                <TrendCard slide={slide} />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </section>
    )
}

export default Trend
