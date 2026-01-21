import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "motion/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import usePlace from "../../../hooks/usePlace";

const Hero = () => {
    const { places, isLoading } = usePlace();
    const title = 'Maldives Resorts';

    const image = "https://i.ibb.co/yBbjrBNY/10020-58.webp";

    if (isLoading) {
        return <div className="w-full h-[90vh] bg-black animate-pulse" />;
    }

    return (
        <div className="w-full px-10 container mx-auto h-[80vh] relative group  overflow-hidden ">
            <Swiper
                spaceBetween={0}
                effect={"fade"}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination, EffectFade]}
                className="w-full h-full"
            >
                {places.map((item, index) => (
                    <SwiperSlide key={item.id || index} className="relative">
                        {/* Background Image with Zoom Effect */}
                        <div className="w-full h-full overflow-hidden">
                            <img
                                src={`${item.image} || ${image}`}
                                alt={`${item.title} || ${title}`}
                                className="w-full h-full object-cover animate-slow-zoom"
                            />
                        </div>

                        {/* Dark Overlay for better text visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                        {/* Hero Content */}
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                                    {item.title}
                                </h1>
                                <p className="text-yellow-500 font-bold text-lg md:text-2xl tracking-widest uppercase">
                                    Starting at ${item.discount_price}
                                </p>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;