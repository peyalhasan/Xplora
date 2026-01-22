import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ShieldAlert, Globe, Users, MessageSquare, ChevronRight, Instagram, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-yellow-400 selection:text-black">
      
      {/* 1. MEGA HERO SECTION */}
      <section className="relative h-[80vh] flex items-center bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://notjustatourist.com/wp-content/uploads/2019/11/ross-parmly-rf6ywHVkrlY-unsplash.jpg" alt="Travel" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="bg-yellow-400 text-black px-4 py-1 text-[10px] font-black uppercase tracking-[0.4em]">Global Support</span>
            <h1 className="text-6xl md:text-[100px] font-black text-white leading-none mt-6 mb-8">
              GET IN <br /> <span className="text-yellow-400">TOUCH.</span>
            </h1>
            <p className="text-zinc-400 text-xl max-w-xl border-l-4 border-yellow-400 pl-6 leading-relaxed">
              We bridge the gap between your dreams and reality. Whether it's a corporate gala or a private island escape, we are ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS & TRUST BAR (The 'Boro Company' Feel) */}
      <section className="bg-yellow-400 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Global Offices", val: "12+" },
            { label: "Happy Travelers", val: "50k+" },
            { label: "Countries Covered", val: "140+" },
            { label: "Response Time", val: "< 2hr" }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <h3 className="text-3xl font-black text-black">{stat.val}</h3>
              <p className="text-[10px] uppercase font-bold tracking-widest text-black/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MAIN CONTENT: FORM + INFO */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Left: Contact Details */}
        <div className="lg:col-span-5 space-y-16">
          <div>
            <h2 className="text-4xl font-black mb-12 italic underline decoration-yellow-400 underline-offset-8">Reach the HQ.</h2>
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-zinc-900 flex items-center justify-center text-yellow-400 shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-1">Call Us</p>
                  <p className="text-2xl font-bold">+8801234-567890</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-zinc-900 flex items-center justify-center text-yellow-400 shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-1">Official Email</p>
                  <p className="text-2xl font-bold">xploro@mail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Support Card */}
          <div className="bg-zinc-100 p-10 rounded-br-[100px] border-l-8 border-black">
            <h3 className="text-xl font-black mb-4 flex items-center gap-2">
              <ShieldAlert className="text-yellow-500" /> 24/7 VIP ASSISTANCE
            </h3>
            <p className="text-zinc-600 mb-6">Our dedicated support team is available around the clock for active bookings and emergencies.</p>
            <button className="text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              Live Chat Now <ChevronRight size={16} className="text-yellow-500" />
            </button>
          </div>
        </div>

        {/* Right: The Mega Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-2 border-2 border-zinc-900 shadow-[20px_20px_0px_0px_rgba(250,204,21,1)]">
            <div className="border border-zinc-200 p-8 md:p-12">
              <h3 className="text-2xl font-black mb-10 uppercase tracking-tighter">Start Your Inquiry</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="text" placeholder="YOUR NAME" className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-4 px-2 focus:outline-none focus:border-yellow-400 font-bold transition-all" />
                  <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-4 px-2 focus:outline-none focus:border-yellow-400 font-bold transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <select className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-4 px-2 focus:outline-none focus:border-yellow-400 font-bold">
                    <option>SELECT TRAVEL TYPE</option>
                    <option>Business</option>
                    <option>Leisure</option>
                    <option>Adventure</option>
                  </select>
                  <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-4 px-2 focus:outline-none focus:border-yellow-400 font-bold transition-all" />
                </div>
                <textarea rows="4" placeholder="HOW CAN WE HELP YOU?" className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-4 px-2 focus:outline-none focus:border-yellow-400 font-bold transition-all resize-none"></textarea>
                
                <button className="w-full bg-zinc-900 text-white py-6 font-black uppercase tracking-[0.3em] text-sm hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center gap-4">
                  Request a Quote <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GLOBAL OFFICES GRID */}
      <section className="bg-zinc-50 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-5xl font-black mb-4">GLOBAL OFFICES</h2>
          <div className="w-24 h-2 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { city: "New York", country: "United States", phone: "+1 234 567 89" },
            { city: "London", country: "United Kingdom", phone: "+44 20 7946 0958" },
            { city: "Dubai", country: "UAE", phone: "+971 4 567 8901" }
          ].map((office, i) => (
            <div key={i} className="bg-white p-10 border border-zinc-200 hover:border-yellow-400 transition-all group">
              <Globe className="text-zinc-300 group-hover:text-yellow-400 mb-6 transition-all" size={40} />
              <h4 className="text-2xl font-black mb-2 uppercase">{office.city}</h4>
              <p className="text-zinc-500 font-bold mb-4">{office.country}</p>
              <p className="text-sm font-black text-yellow-600">{office.phone}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="py-32 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400 opacity-5 blur-[150px] rounded-full"></div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-10">READY TO FLY?</h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto px-6">Don't wait for the right moment. Create it. Contact ST Tour Management today and start your next legacy.</p>
          <div className="flex flex-wrap justify-center gap-8">
             <div className="flex items-center gap-2"><Users className="text-yellow-400" /> 24/7 Expert Team</div>
             <div className="flex items-center gap-2"><MessageSquare className="text-yellow-400" /> Instant Response</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;