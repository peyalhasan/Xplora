import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Destinations",
            links: ["Europe", "Asia", "Africa", "South America", "Oceania"]
        },
        {
            title: "Membership",
            links: ["Compare Plans", "Exclusive Rewards", "Gift Cards", "Student Discount"]
        },
        {
            title: "Support",
            links: ["Help Center", "Safety Info", "Cancellation", "Privacy Policy"]
        }
    ];

    return (
        <footer className=" mt-10 bg-[#050505] pt-24 pb-12 px-6 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                
                {/* Top Section: Brand & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <motion.h3 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-white text-3xl font-black italic uppercase tracking-tighter mb-6"
                        >
                            Xpl<span className="text-yellow-500">ora</span>
                        </motion.h3>
                        <p className="text-gray-500 max-w-md text-sm leading-relaxed mb-8">
                            Crafting unforgettable journeys for the world's most ambitious explorers. 
                            Join our community and redefine the way you experience the world.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 rounded-full bg-white/5 text-gray-400 hover:bg-yellow-500 hover:text-black transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#0A0A0A] p-8 rounded-[2rem] border border-white/5 relative overflow-hidden">
                        <div className="relative z-10">
                            <h4 className="text-white text-xl font-bold mb-2">Join the Inner Circle</h4>
                            <p className="text-gray-500 text-xs mb-6 uppercase tracking-widest">Get exclusive travel deals directly to your inbox</p>
                            <form className="flex flex-col sm:flex-row gap-3">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email address" 
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm outline-none focus:border-yellow-500/50 transition-all flex-grow"
                                />
                                <button className="bg-yellow-500 text-black font-black text-[10px] uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2">
                                    Subscribe <ArrowUpRight size={14} />
                                </button>
                            </form>
                        </div>
                        {/* Decorative background circle */}
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-yellow-500/5 blur-[50px] rounded-full" />
                    </div>
                </div>

                {/* Middle Section: Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                    {footerLinks.map((section, idx) => (
                        <div key={idx}>
                            <h5 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8">{section.title}</h5>
                            <ul className="space-y-4">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="text-gray-500 text-sm hover:text-yellow-500 transition-colors duration-300">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h5 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8">Contact Us</h5>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-center gap-3">
                                <MapPin size={16} className="text-yellow-500" /> 
                                <span>Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-yellow-500" /> 
                                <span>+880 1234 567 890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-yellow-500" /> 
                                <span>xplora@.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest font-medium">
                        © {currentYear} XPLORA ELITE LUXURY TRAVEL. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 text-gray-600 text-[10px] uppercase tracking-widest font-medium">
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;