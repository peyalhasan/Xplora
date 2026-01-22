import React from 'react';
import usePlace from '../../../hooks/usePlace';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Featured() {
    const { places = [] } = usePlace();

    return (
        <div className="w-full max-w-[1400px] bg-[#F8F9FA] mx-auto py-20 px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
                <p className=" text-[10px] text-yellow-600 font-black uppercase tracking-[0.4em] mb-3">Top Picks</p>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-black ">
                    Featured <span className="text-yellow-600">Destinations</span>
                </h2>
            </div>

            {places.length > 0 ? (
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="featured-swiper !pb-16"
                >
                    {places.map((place) => (
                        <SwiperSlide key={place.id}>
                            <div className="bg-[#111111] border border-white/5 rounded-[2rem] overflow-hidden group hover:border-yellow-600/30 transition-all duration-500 h-full flex flex-col shadow-2xl">
                                {/* Image Wrapper */}
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={place.image}
                                        alt={place.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
                                    
                                    {/* Discount Badge */}
                                    <div className="absolute top-6 left-6 bg-yellow-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                        Save {place.discount}%
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white group-hover:text-yellow-500 transition-colors leading-none">
                                            {place.title}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center gap-1 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                                            <MapPin size={12} className="text-yellow-600" /> {place.location}
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                                            <Clock size={12} className="text-yellow-600" /> {place.duration}
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm italic mb-8 line-clamp-2 font-medium leading-relaxed">
                                        {place.description}
                                    </p>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="h-64 flex items-center justify-center">
                    <div className="w-10 h-10 border-2 border-yellow-600 border-t-transparent rounded-full animate-spin" />
                </div>
            )}

            {/* Pagination Style Customization */}
            <style>{`
                .featured-swiper .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.2);
                    width: 10px;
                    height: 10px;
                }
                .featured-swiper .swiper-pagination-bullet-active {
                    background: #2563eb !important; /* yellow-600 */
                    width: 30px;
                    border-radius: 5px;
                }
            `}</style>
        </div>
    );
}