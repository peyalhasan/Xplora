import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, MoveLeft, Compass, MapPinOff } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-6 overflow-hidden relative font-sans">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-yellow-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block"
        >
          <h1 className="text-[130px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 via-yellow-600 to-yellow-900 drop-shadow-[0_0_40px_rgba(255,215,0,0.15)]">
            404
          </h1>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 md:-top-10 md:-right-10"
          >
            <MapPinOff className="w-12 h-12 md:w-20 md:h-20 text-yellow-500 opacity-50" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
            <Compass className="text-yellow-500 h-8 w-8 animate-[spin_5s_linear_infinite]" />
            LOST IN EXPLORATION
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-base md:text-xl font-medium tracking-wide">
            The destination you are looking for does not exist on our map. 
            Let's get you back on the right track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link to="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-yellow-500 hover:bg-yellow-600 border-none text-black font-extrabold h-14 px-10 flex items-center gap-3 shadow-xl shadow-yellow-500/20 rounded-full transition-all"
            >
              <Home className="h-5 w-5" />
              BACK TO HOME
            </motion.button>
          </Link>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="btn btn-outline border-gray-800 hover:bg-white/5 text-white font-bold h-14 px-10 rounded-full flex items-center gap-3 transition-all"
          >
            <MoveLeft className="h-5 w-5" />
            GO BACK
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] border border-yellow-500 rounded-full" />
        <div className="absolute bottom-[-20%] right-[-5%] w-[60%] h-[60%] border border-yellow-600 rounded-full" />
      </div>

      <motion.div
        animate={{ 
          y: [0, -40, 0],
          rotate: [15, 20, 15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[5%] hidden xl:block opacity-5"
      >
        <Compass className="w-64 h-64 text-yellow-500" />
      </motion.div>
    </div>
  );
};

export default NotFound;