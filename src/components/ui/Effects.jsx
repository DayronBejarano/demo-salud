import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const SpecialtyBackground = ({ theme }) => {
  return (
    <div className={`pointer-events-none fixed inset-0 overflow-hidden z-0 ${theme.bgApp} transition-colors duration-700`}>
      {/* Retícula ambiental suavizada */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `radial-gradient(${theme.accentHex} 1.5px, transparent 1.5px)`,
          backgroundSize: '3rem 3rem'
        }}
      />
      {/* Luces orgánicas de fondo */}
      <div 
        className="absolute -top-32 -right-32 w-[650px] h-[650px] blur-[170px] rounded-full mix-blend-screen opacity-25 transition-all duration-1000"
        style={{ backgroundColor: theme.accentHex }}
      />
      <div 
        className="absolute bottom-10 -left-20 w-[550px] h-[550px] blur-[150px] rounded-full mix-blend-screen opacity-20 transition-all duration-1000"
        style={{ backgroundColor: theme.secondaryHex || theme.accentHex }}
      />
    </div>
  );
};

export const SpecialtyCard = ({ children, className = "", theme, onClick }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden rounded-3xl border ${theme.border} ${theme.bgCard} backdrop-blur-2xl p-8 transition-all duration-500 shadow-xl ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{ boxShadow: opacity ? `0 20px 40px ${theme.glow}` : 'none' }}
    >
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${theme.glow}, transparent 50%)`,
        }}
      />
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
};

export const SpecialtyButton = ({ children, onClick, icon: Icon, className = "", variant = 'primary', theme }) => {
  const base = "relative group inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-2xl";
  
  const isPrimary = variant === 'primary';
  const buttonStyle = isPrimary 
    ? `${theme.buttonBg} px-8 py-4 shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]`
    : `bg-transparent border ${theme.border} ${theme.accent} hover:bg-white/5 px-8 py-4`;

  return (
    <button onClick={onClick} className={`${base} ${buttonStyle} ${className}`}>
      <span className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-wider font-extrabold">
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
};

export const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);