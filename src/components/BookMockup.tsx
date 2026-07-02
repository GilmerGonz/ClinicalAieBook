import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function BookMockup() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const thickness = 34; // Depth of the book in pixels
  const halfThickness = thickness / 2;

  // Normalized motion values for mouse movement (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D rotation tilt - centered around default values to always show 3D depth
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, 2]), { stiffness: 90, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-35, -5]), { stiffness: 90, damping: 22 });
  const rotateZ = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, -0.5]), { stiffness: 90, damping: 22 });

  // Glossy sheen reflection coordinates
  const sheenX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]), { stiffness: 90, damping: 22 });
  const sheenY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]), { stiffness: 90, damping: 22 });

  // Handle cursor positioning inside the container
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = event.clientX - rect.left - width / 2;
    const y = event.clientY - rect.top - height / 2;
    
    mouseX.set(x / width);
    mouseY.set(y / height);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative flex flex-col items-center justify-center select-none py-6">
      {/* 3D Perspective Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-[280px] h-[370px] md:w-[320px] md:h-[420px] [perspective:1500px] cursor-pointer flex items-center justify-center"
      >
        {/* Dynamic Floor Shadow beneath the book, synchronized with float and rotate */}
        <motion.div 
          className="absolute inset-x-8 -bottom-8 h-8 bg-black/45 rounded-full blur-2xl transform translate-y-3"
          style={{
            transform: `translateZ(-${halfThickness + 10}px)`,
          }}
          animate={{
            scale: isHovered ? [1.02, 0.95, 1.02] : [1, 0.88, 1],
            opacity: isHovered ? [0.6, 0.4, 0.6] : [0.55, 0.35, 0.55],
            filter: isHovered ? ["blur(22px)", "blur(28px)", "blur(22px)"] : ["blur(18px)", "blur(24px)", "blur(18px)"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating & Tilting Book Group with Real 3D Layers */}
        <motion.div
          className="relative w-full h-full"
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            rotateZ: rotateZ,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundColor: "#070e1b",
          }}
          animate={isHovered ? {} : {
            y: [0, -12, 0],
          }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            type: "spring",
            stiffness: 90,
            damping: 22
          }}
        >
          {/* Back Cover Layer */}
          <div 
            className="absolute inset-0 w-full h-full bg-[#070e1b] flex flex-col justify-between p-6 text-white/20 select-none"
            style={{
              transform: `translateZ(-${halfThickness}px) rotateY(180deg)`,
              boxShadow: "inset 0 0 30px rgba(0,0,0,0.85)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Minimal spine/back cover design branding */}
            <div className="border-b border-slate-950 pb-3">
              <span className="text-[6px] tracking-widest font-mono uppercase text-slate-600 block">
                CLINICAL AI HANDBOOK SERIES
              </span>
            </div>
            <div className="text-center font-serif text-[10px] italic text-slate-700">
              For professional clinical training only.
            </div>
            <div className="border-t border-slate-950 pt-3 text-right">
              <span className="text-[6px] font-mono text-slate-600">ISBN 978-3-16-148410-0</span>
            </div>
          </div>

          {/* Left Spine Thickness (Provides realistic 3D depth) */}
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#03060c] via-[#091322] to-[#0f213a] flex flex-col justify-between py-8 text-white select-none border-r border-slate-950"
            style={{
              width: `${thickness}px`,
              transformOrigin: "left",
              transform: `translateZ(${halfThickness}px) rotateY(-90deg)`,
              transformStyle: "preserve-3d",
              boxShadow: "inset -2px 0 8px rgba(0,0,0,0.45), inset 2px 0 8px rgba(255,255,255,0.04)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Vertical text matching the exact spine layout */}
            <div className="text-[8px] tracking-widest uppercase font-mono text-[#43d3b0] font-bold transform rotate-180 [writing-mode:vertical-rl] whitespace-nowrap mx-auto">
              DR. J. REYES, MD
            </div>
            <div className="text-[9px] font-serif font-semibold tracking-wide transform rotate-180 [writing-mode:vertical-rl] whitespace-nowrap mx-auto text-slate-100 opacity-90 max-h-[55%] overflow-hidden">
              Artificial Intelligence in Clinical Practice
            </div>
            {/* Spine Badge Vol 1 in teal green */}
            <div className="bg-[#43d3b0] text-[#070e1b] py-1.5 px-0.5 text-[8px] font-mono font-bold transform rotate-180 [writing-mode:vertical-rl] whitespace-nowrap mx-auto">
              VOL 1
            </div>
          </div>

          {/* Page stack on the Right Side */}
          <div
            className="absolute right-0 top-[2px] bottom-[2px] bg-[#f8fafc] border-y border-r border-slate-300 overflow-hidden"
            style={{
              width: `${thickness - 3}px`,
              transformOrigin: "right",
              transform: `translateZ(${halfThickness - 1.5}px) rotateY(90deg)`,
              backgroundImage: "repeating-linear-gradient(90deg, #e2e8f0, #e2e8f0 1.5px, #fdfdfd 1.5px, #fdfdfd 3px)",
              boxShadow: "inset 5px 0 10px rgba(0,0,0,0.12), inset -2px 0 5px rgba(0,0,0,0.05)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />

          {/* Page stack on Top */}
          <div
            className="absolute top-0 left-[2px] right-[2px] bg-[#fafbfc] border-x border-t border-slate-300 overflow-hidden"
            style={{
              height: `${thickness - 3}px`,
              transformOrigin: "top",
              transform: `translateZ(${halfThickness - 1.5}px) rotateX(90deg)`,
              backgroundImage: "repeating-linear-gradient(0deg, #e2e8f0, #e2e8f0 1.5px, #fdfdfd 1.5px, #fdfdfd 3px)",
              boxShadow: "inset 0 4px 8px rgba(0,0,0,0.08)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />

          {/* Page stack on Bottom */}
          <div
            className="absolute bottom-0 left-[2px] right-[2px] bg-[#fafbfc] border-x border-b border-slate-300 overflow-hidden"
            style={{
              height: `${thickness - 3}px`,
              transformOrigin: "bottom",
              transform: `translateZ(${halfThickness - 1.5}px) rotateX(-90deg)`,
              backgroundImage: "repeating-linear-gradient(0deg, #e2e8f0, #e2e8f0 1.5px, #fdfdfd 1.5px, #fdfdfd 3px)",
              boxShadow: "inset 0 -4px 8px rgba(0,0,0,0.08)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />

          {/* Front Cover Face (Uses the exact flat image provided by the user) */}
          <div 
            className="absolute inset-0 w-full h-full bg-[#0a1424] rounded-r-sm select-none"
            style={{
              transform: `translateZ(${halfThickness}px)`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Exact front cover flat image */}
            <img
              src="/src/assets/images/Artificial_Intelligence_Clinical_2K_202607021825.jpeg"
              alt="Artificial Intelligence in Clinical Practice Book Cover"
              className="w-full h-full object-cover rounded-r-sm"
              referrerPolicy="no-referrer"
            />

            {/* Spine shadow crease overlay on the left border */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/55 via-black/15 to-transparent pointer-events-none" />

            {/* Premium glossy sheen reflection overlay */}
            <motion.div
              style={{
                background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 60%)`,
                opacity: isHovered ? 1 : 0.4,
              }}
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 mix-blend-overlay"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}


