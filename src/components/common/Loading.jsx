import { motion } from "motion/react";
import { Plane } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-yellow-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative flex flex-col items-center">
        
        {/* Animated Icon Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          {/* Pulsing Circles */}
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-yellow-500 rounded-full blur-2xl"
          />
          
          <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.3)]">
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Plane className="w-12 h-12 text-black fill-black" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Animation */}
        <div className="text-center space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-black tracking-[0.2em] text-white uppercase"
          >
            XPLORO
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-1 justify-center"
          >
            <span className="text-xs font-bold text-yellow-500 tracking-[0.3em] uppercase">
              Preparing your journey
            </span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1] }}
              className="text-yellow-500"
            >
              ...
            </motion.span>
          </motion.div>
        </div>

        {/* Progress Bar Container */}
        <div className="mt-10 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
            className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent shadow-[0_0_10px_#eab308]"
          />
        </div>
      </div>

      {/* Floating Elements Decor */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-10 text-[100px] font-black text-white/[0.02] select-none pointer-events-none uppercase italic"
      >
        Exploration
      </motion.div>
    </div>
  );
};

export default Loading;