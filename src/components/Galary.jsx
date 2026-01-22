import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import usePlace from "../../hooks/usePlace";
import Featured from "./Home/Featured";

const Gallery = () => {
    const { places = [], isLoading } = usePlace();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };
    

    return (
        <div className='mt-28 w-11/12 mx-auto min-h-screen'>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <p className="text-yellow-600 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Memories</p>
                <h2 className='text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-gray-900'>
                    Our Visual <span className="text-yellow-700">Journey</span>
                </h2>
                <div className="w-24 h-1 bg-yellow-700 mx-auto mt-4 rounded-full" />
            </motion.div>

            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="w-12 h-12 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <AnimatePresence>
                    {places.length > 0 ? (
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'
                        >
                            {places.map((place) => (
                                <motion.div
                                    key={place.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, rotate: 1, zIndex: 10 }}
                                    className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-gray-50"
                                >
                                    <img
                                        src={place.image}
                                        alt={place.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white text-[10px] font-bold uppercase tracking-widest italic">
                                            {place.location}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="text-center py-20 text-gray-400 italic">
                            No images found in the gallery.
                        </div>
                    )}
                </AnimatePresence>
            )}

            <div className="mt-20 border-t border-gray-100">
                <Featured />
            </div>
        </div>
    );
};

export default Gallery;