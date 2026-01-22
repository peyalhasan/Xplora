import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import usePlace from '../../hooks/usePlace';
import { FaLocationDot } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { Timer } from 'lucide-react';
import Loading from './common/Loading';

const Destination = () => {
    const { places = [], isLoading, searchTerm } = usePlace();
    const [showAll, setShowAll] = useState(false);

    const visiblePlaces = useMemo(() => {
        const list = showAll ? [...places] : places.slice(0, 10);
        return list
    }, [places, showAll])
    const hasMore = places.length > 10;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const placeCount = places.length;

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className="bg-[#F8F9FA] overflow-hidden">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="px-6 lg:px-20 py-24 border-b border-gray-200"
            >
                <div className="max-w-5xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                        className="text-yellow-600 font-bold text-[10px] md:text-xs block mb-4"
                    >
                        Explore the World
                    </motion.span>

                    <h1 className="text-[#1A1A1A] text-5xl md:text-7xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
                        Discover Your <br />
                        <span className="text-transparent stroke-text-light">Journey</span>
                    </h1>

                    <div className="flex justify-center mb-12">
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl border-l-2 border-yellow-500 pl-6 text-left">
                            "Explore breathtaking landscapes, immerse in rich cultures, and create unforgettable memories.
                            Each destination offers unique experiences that will stay with you forever."
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 mt-10">
                        <div className="bg-white shadow-sm px-6 py-3 rounded-xl border border-gray-200 group hover:border-yellow-500/50 hover:shadow-md transition-all duration-300">
                            <span className="text-[#1A1A1A] group-hover:text-yellow-600 font-bold tracking-widest text-sm uppercase">
                                🌍 {placeCount}+ Destinations
                            </span>
                        </div>
                        <div className="bg-white shadow-sm px-6 py-3 rounded-xl border border-gray-200 group hover:border-yellow-500/50 hover:shadow-md transition-all duration-300">
                            <span className="text-[#1A1A1A] group-hover:text-yellow-600 font-bold tracking-widest text-sm uppercase">
                                ⭐ 4.8/5 Rating
                            </span>
                        </div>
                        <div className="bg-white shadow-sm px-6 py-3 rounded-xl border border-gray-200 group hover:border-yellow-500/50 hover:shadow-md transition-all duration-300">
                            <span className="text-[#1A1A1A] group-hover:text-yellow-600 font-bold tracking-widest text-sm uppercase">
                                🚀 Best Price Guarantee
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
                key={`${showAll ? 'all' : 'limit'}-${searchTerm}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-11/12 max-w-7xl mx-auto px-4 py-16"
            >
                {visiblePlaces.map((p) => (
                    <motion.div
                        key={p.id}
                        layout
                        variants={cardVariants}
                        whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                        className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden group border border-gray-100"
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden h-72">
                            <img
                                src={p.image}
                                alt={p.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />

                            {p?.discount > 0 && (
                                <div className="absolute top-6 left-6 bg-yellow-500 text-black px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl flex flex-col items-center leading-none">
                                    <span>Save</span>
                                    <span className="text-sm">${p.total_save}</span>
                                </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-[0.3em] flex items-center gap-2">
                                        <FaLocationDot /> {p.location}
                                    </span>
                                    <h2 className="text-2xl font-black text-[#1A1A1A] italic uppercase tracking-tighter group-hover:text-yellow-600 transition-colors duration-300">
                                        {p.title}
                                    </h2>
                                </div>

                                <motion.div
                                    whileHover={{ rotate: 45 }}
                                    className="bg-gray-50 p-4 rounded-2xl text-gray-400 group-hover:bg-yellow-100 group-hover:text-yellow-700 transition-all cursor-pointer"
                                >
                                    <GoArrowUpRight className="text-xl" />
                                </motion.div>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-6 border-t border-gray-100">
                                <div>
                                    <p className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-1">Offer Price</p>
                                    <p className="text-lgfont-bold text-yellow-800 uppercase tracking-widest mb-1 flex"> <Timer /> {p.duration}</p>
                                    <div className="flex items-center gap-3">
                                        <h1 className="text-3xl font-black text-[#1A1A1A] tracking-tighter">
                                            ${p?.discount_price?.toLocaleString() || '—'}
                                        </h1>
                                        {p?.price > p?.discount_price && (
                                            <span className="text-sm text-gray-400 line-through">
                                                ${p?.price?.toLocaleString()}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg active:scale-95">
                                    Details
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Show More / Less Button */}
            {hasMore && (
                <div className="flex justify-center mt-12 mb-24">
                    <button
                        onClick={() => setShowAll((prev) => !prev)}
                        className="px-12 py-6 bg-[#1A1A1A] text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-xl active:scale-95 flex items-center gap-3"
                    >
                        {showAll ? "Show Less" : "Explore More Destinations"}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Destination;