import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import images from '../../utils/db.json'
// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';


const DiscountPage = () => {
   

  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        {/* Header Section */}
        <div>
          <h1 className="text-4xl font-bold text-center text-blue-700">Discounts & Offers</h1>
          <p className="text-md text-black/80 font-medium text-center my-6 ">A curated list of the most popular travel packages based on <br /> different destinations.</p>
        </div>

        {/* Swiper Section */}
        <div className="relative group">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            freeMode={true}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-swiper-pagination',
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Autoplay, Pagination, Navigation, FreeMode]}
            className="pb-16"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[400px] w-full group/card overflow-hidden  rounded-3xl border border-white/10 shadow-2xl">
                  {/* Image */}
                  <img
                    src={image.image}
                    alt={`discount-${index}`}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70" />

                  {/* Content inside card */}
                  <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                    <div className="bg-yellow-500 text-black text-[10px] font-bold px-3 py-1 rounded-full w-fit uppercase mb-3">
                      Limited Deal
                    </div>
                    <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all">
                      Book Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


          {/* Custom Pagination Container */}
          <div className="custom-swiper-pagination flex justify-center mt-8"></div>
        </div>
      </div>

      <style>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
                }
                .custom-swiper-pagination .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.2) !important;
                    width: 10px;
                    height: 10px;
                    opacity: 1;
                    margin: 0 5px;
                    transition: all 0.4s ease;
                }
                .custom-swiper-pagination .swiper-pagination-bullet-active {
                    background: #eab308 !important;
                    width: 30px;
                    border-radius: 10px;
                }
            `}</style>
    </section>
  );
};

export default DiscountPage;