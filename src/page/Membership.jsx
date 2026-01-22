import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Rocket, Star, Shield, Gem, Users, Globe, ArrowRight } from 'lucide-react';
import usePlans from '../../hooks/usePlans';

const Membership = () => {
    const { plans = [] } = usePlans();

    const getIcon = (slug) => {
        switch (slug) {
            case 'basic': return <Rocket size={20} />;
            case 'silver': return <Star size={20} />;
            case 'gold': return <Zap size={20} />;
            case 'platinum': return <Shield size={20} />;
            case 'diamond': return <Crown size={20} />;
            case 'couple': return <Users size={20} />;
            case 'family': return <Users size={20} />;
            case 'business': return <Globe size={20} />;
            case 'legend': return <Gem size={20} />;
            default: return <Star size={20} />;
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    };

    return (
        <section className="bg-[#0A0A0A] py-24 px-6 lg:px-20 overflow-hidden">
            
            <div className="max-w-7xl mx-auto text-center mb-24">
                {/* Floating Promo Tag */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-8 hover:bg-white/10 transition-colors cursor-default"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                    </span>
                    <span className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.3em]">
                        New Year Special: 20% Off All Annual Plans
                    </span>
                </motion.div>

                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.6em] block mb-4"
                >
                    Membership Access
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-white text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9]"
                >
                    Elevate Your <br />
                    <span className="text-transparent stroke-text opacity-40">Status</span>
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-500 mt-8 max-w-xl mx-auto text-sm leading-relaxed"
                >
                    Join a community of world-class explorers. Choose a plan that fits your ambition and unlock exclusive destinations.
                </motion.p>
            </div>

            {/* 2. PRICING GRID (Your 9 Plans) */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1400px] mx-auto mb-32"
            >
                {plans.map((plan) => (
                    <motion.div
                        key={plan.id}
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between overflow-hidden group ${
                            plan.slug === 'gold' || plan.slug === 'diamond' || plan.slug === 'legend'
                            ? 'bg-[#151515] border-yellow-500/30 shadow-[0_20px_50px_rgba(234,179,8,0.05)]' 
                            : 'bg-[#111111] border-white/5 hover:border-white/10'
                        }`}
                    >
                        {(plan.slug === 'gold' || plan.slug === 'diamond' || plan.slug === 'legend') && (
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-yellow-500/10 blur-[50px] rounded-full group-hover:bg-yellow-500/20 transition-all duration-700" />
                        )}

                        <div>
                            <div className="flex justify-between items-start mb-8">
                                <div className={`p-4 rounded-2xl transition-transform group-hover:rotate-12 ${
                                    plan.slug === 'gold' || plan.slug === 'diamond' ? 'bg-yellow-500 text-black' : 'bg-white/5 text-yellow-500'
                                }`}>
                                    {getIcon(plan.slug)}
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                                    {plan.badge}
                                </span>
                            </div>

                            <h3 className="text-white text-2xl font-black italic uppercase tracking-tighter mb-2">
                                {plan.tier}
                            </h3>
                            <p className="text-gray-500 text-xs mb-8 line-clamp-2 leading-relaxed">
                                {plan.description}
                            </p>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-black text-white tracking-tighter">${plan.price}</span>
                                    <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">/ {plan.billing}</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10 border-t border-white/5 pt-8">
                                {plan.features?.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 group/item">
                                        <Check size={14} className="text-yellow-500 mt-0.5 shrink-0" />
                                        <span className="text-[11px] text-gray-400 group-hover/item:text-gray-200 transition-colors">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 ${
                            plan.slug === 'gold' || plan.slug === 'diamond' || plan.slug === 'legend'
                            ? 'bg-yellow-500 text-black hover:bg-white' 
                            : 'bg-white/5 text-white hover:bg-white/10'
                        }`}>
                            Choose {plan.slug} <ArrowRight size={14} />
                        </button>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-7xl mx-auto border-t border-white/5 pt-16 flex flex-wrap justify-center md:justify-between items-center gap-12 px-10"
            >
                {[
                    { label: 'Total Explorers', val: '150K+' },
                    { label: 'Luxury Stays', val: '2.5K+' },
                    { label: 'Satisfaction', val: '99.9%' },
                    { label: 'Cities Covered', val: '120+' }
                ].map((stat, i) => (
                    <div key={i} className="text-center md:text-left">
                        <h4 className="text-white text-3xl font-black italic uppercase tracking-tighter leading-none mb-1">{stat.val}</h4>
                        <p className="text-gray-600 text-[9px] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                    </div>
                ))}
            </motion.div>

            <style>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.8);
                }
            `}</style>
        </section>
    );
};

export default Membership;