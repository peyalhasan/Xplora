import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CustomCursor = () => {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, {damping: 25, stiffness: 800})
    const springY = useSpring(mouseY, {damping: 25, stiffness: 800})

    const trailX= useSpring(mouseX , {damping: 40, stiffness: 150})
    const trailY= useSpring(mouseY , {damping: 40, stiffness: 150})


    useEffect(()=>{
        const handleMouseMove = (e) =>{
            mouseX.set(e.clientX);
            mouseY.set(e.clientY)
        }
        window.addEventListener('mousemove', handleMouseMove);
        return ()=>window.removeEventListener('mousemove', handleMouseMove)
    },[mouseX, mouseY])


  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <svg className="absolute inset-0 w-full h-full">


        <motion.line
          x1={trailX}
          y1={trailY}
          x2={springX}
          y2={springY}
          stroke="#ffa500"
          strokeWidth="1"
          strokeOpacity="0.6"
        />
      </svg>

      <motion.div
        style={{ left: trailX, top: trailY, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-10 h-10 border border-[#ffa500]/30 rounded-full"
      />

      <motion.div
        style={{ left: springX, top: springY, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_15px_#ffd700]"
      />
    </div>
  );
};

export default CustomCursor;