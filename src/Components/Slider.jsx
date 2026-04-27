import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

const Slider = ({ toys = [] }) => {
    console.log(toys)
    const paginationRef = useRef(null);
    const [active, SetActive] = useState('')


    return (
        <div>
            <Swiper
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                pagination={
                    {
                        clickable: true
                    }
                }
                // onBeforeInit={(swiper) => {
                //     swiper.params.pagination.el = paginationRef.current;
                //     // swiper.params.pagination.clickable = true;
                // }}
                // onSwiper={(swiper) => {
                //     setTimeout(() => {
                //         swiper.pagination.init();
                //         swiper.pagination.render();
                //         swiper.pagination.update();
                //     });
                // }}
                mousewheel={true}
                keyboard={true}
                breakpoints={
                    {
                        640: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        }
                    }
                }
                spaceBetween={20}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper">

                {
                    toys?.map(toy => <SwiperSlide key={toy.toyId}>
                        <div className="bg-white rounded-xl shadow-lg p-5 text-center">
                            <img
                                src={toy.pictureURL}
                                className='w-[400px] h-[300px] text-center object-cover rounded-lg'
                            />

                            <h2 className="text-xl font-bold mt-3">{toy.toyName}</h2>

                            <p>$49.99</p>

                            <p>⭐ 4.7</p>

                            <button className="bg-[#FFD93D] px-4 py-2 rounded-lg mt-3">
                                View More
                            </button>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className='mt-6 flex items-center justify-center gap-4'>
                <button
                    onClick={() => SetActive('next')}
                    className={`custom-prev ${active == "next" ? "bg-[#FFD93D]" : "bg-white "} rounded-full shadow w-10 h-10 cursor-pointer`}>
                    &lt;
                </button>

                <div ref={paginationRef} className='flex items-center min-h-5 gap-4  mt-4' />

                <button
                    onClick={() => SetActive('prev')}
                    className={`custom-next ${active == "prev" ? "bg-[#FFD93D]" : "bg-white"} w-10 h-10 rounded-full shadow cursor-pointer`}>
                    &gt;
                </button>

            </div>
        </div >
    );
};

export default Slider;