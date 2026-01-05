import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-dreamy opacity-50" />
      
      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            opacity: 0,
            scale: 0.5 + Math.random() * 0.5
          }}
          animate={{
            y: -100,
            opacity: [0, 0.3, 0.6, 0.3, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'linear'
          }}
        >
          <Heart 
            className="text-primary" 
            size={20 + Math.random() * 30} 
            fill="currentColor"
            style={{ opacity: 0.3 }}
          />
        </motion.div>
      ))}

      {/* Floating Sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
        >
          <Sparkles 
            className="text-primary" 
            size={10 + Math.random() * 15}
            style={{ opacity: 0.4 }}
          />
        </motion.div>
      ))}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(350 80% 75%), transparent)' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-20, 20, -20]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(276 52% 85%), transparent)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [20, -20, 20],
          y: [20, -20, 20]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  );
};

export default BackgroundEffects;