import React from "react";
import { motion } from "framer-motion";
import { Plane, Map, Globe, ShieldCheck, Compass, Heart, ArrowRight } from "lucide-react";

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } }
    };

    return (
        <div className="min-h-screen bg-[#fafafa] selection:bg-yellow-200">
            {/* --- Hero Section --- */}
            <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease:"easeInOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&auto=format&fit=crop")`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#fafafa]"></div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="relative z-10 text-center w-11/12 max-w-7xl mx-auto px-4"
                >
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.6em" }}
                        className="text-yellow-400 text-[10px] md:text-xs font-black uppercase mb-6 drop-shadow-md"
                    >
                        Adventure Awaits
                    </motion.p>
                    <h1 className='text-7xl md:text-[140px] font-black text-white italic uppercase tracking-tighter leading-[0.8] mb-8 drop-shadow-2xl'>
                        XPLORA <br /> <span className="text-yellow-500">STUDIO</span>
                    </h1>
                    <div className="flex justify-center items-center gap-4">
                        <div className="h-[2px] w-12 bg-yellow-500 hidden md:block"></div>
                        <p className="text-lg md:text-xl text-white/90 font-medium italic max-w-lg leading-relaxed">
                            Crafting personalized journeys since 2025. We turn your bucket list into a living memory.
                        </p>
                        <div className="h-[2px] w-12 bg-yellow-500 hidden md:block"></div>
                    </div>
                </motion.div>
            </div>

            {/* --- Moving Text Marquee (New Finishing Touch) --- */}
            <div className="bg-yellow-500 py-4 overflow-hidden flex whitespace-nowrap border-y-2 border-black">
                {[1, 2, 3, 4].map((i) => (
                    <motion.h3
                        key={i}
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-2xl font-black italic uppercase mx-10 text-black"
                    >
                        • Xplore More • Travel Safely • Beyond Borders • Luxury redefined
                    </motion.h3>
                ))}
            </div>

            {/* --- Mission Section --- */}
            <div className="max-w-7xl mx-auto px-6 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase italic tracking-tighter mb-10 leading-[0.9]">
                            Why <span className="text-yellow-500">Xplora</span> <br /> Is Different?
                        </h2>
                        <div className="space-y-8 text-gray-600 text-lg md:text-xl italic leading-relaxed">
                            <p className="border-l-4 border-yellow-500 pl-6">
                                At <span className="font-bold text-black uppercase">Xploro</span>, we don't believe in "one size fits all". Travel is a deeply personal transformation.
                            </p>
                            <p className="pl-7">
                                Our experts curate every detail, from the flight seats to the hidden street food gems in Asia or the sunset villas in Europe.
                            </p>
                        </div>

                        <div className="flex gap-12 mt-14">
                            <div>
                                <h4 className="text-5xl font-black text-gray-900">10K+</h4>
                                <p className="text-yellow-600 font-bold text-[10px] uppercase tracking-[0.3em] mt-2">Happy Xplorers</p>
                            </div>
                            <div>
                                <h4 className="text-5xl font-black text-gray-900">50+</h4>
                                <p className="text-yellow-600 font-bold text-[10px] uppercase tracking-[0.3em] mt-2">Global Spots</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-yellow-500/10 rounded-[3rem] blur-2xl group-hover:bg-yellow-500/20 transition-all"></div>
                        <div className="relative grid grid-cols-2 gap-6">
                            <img src="https://i.ibb.co.com/4g10rtmD/9f1839f2-f114-447f-ac2b-b3397698492c.webp" className="rounded-[2.5rem] h-96 w-full object-cover mt-12 shadow-2xl border-4 border-white" alt="Travel 1" />
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" className="rounded-[2.5rem] h-96 w-full object-cover shadow-2xl border-4 border-white" alt="Travel 2" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- Services Section (Glassmorphism Touch) --- */}
            <div className="bg-[#0f0f0f] py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <h3 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
                            The <span className="text-yellow-500">X-Edge</span>
                        </h3>
                        <p className="text-gray-400 max-w-xs italic text-right border-r-2 border-yellow-500 pr-4">
                            Providing the ultimate toolkit for modern travelers and explorers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: <Compass className="text-yellow-500" size={44} />, title: "Custom Itineraries", desc: "Crafted specifically for your vibe. No generic plans." },
                            { icon: <ShieldCheck className="text-yellow-500" size={44} />, title: "Secure Booking", desc: "Military-grade data protection and easy cancellations." },
                            { icon: <Globe className="text-yellow-500" size={44} />, title: "Global Support", desc: "Local partners in 50+ countries available 24/7." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -15, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                className="p-12 rounded-[4rem] bg-white/5 border border-white/10 transition-all duration-500 backdrop-blur-sm"
                            >
                                <div className="mb-8">{item.icon}</div>
                                <h4 className="text-3xl font-black text-white italic uppercase mb-6 tracking-tighter">{item.title}</h4>
                                <p className="text-gray-400 text-base leading-relaxed italic">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- CTA (Final Polish) --- */}
            <div className="px-6 py-28 bg-[#fafafa]">
                <motion.div
                    whileInView={{ y: [40, 0], opacity: [0, 1] }}
                    className="max-w-7xl mx-auto bg-gray-900 rounded-[5rem] py-24 px-6 text-center relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
                    <h3 className="text-6xl md:text-[100px] font-black text-white italic uppercase tracking-tighter mb-10 leading-none relative z-10">
                        Ready to <span className="text-yellow-500">XPLORE?</span>
                    </h3>
                    <div className="relative z-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-500 text-black px-16 py-6 rounded-full font-black uppercase tracking-widest text-sm flex items-center gap-3 mx-auto hover:bg-white transition-all duration-300"
                        >
                            Start Your Journey <ArrowRight size={20} />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;