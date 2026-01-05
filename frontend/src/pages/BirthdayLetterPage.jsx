import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BirthdayLetterPage = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [petalsVisible, setPetalsVisible] = useState(false);

  useEffect(() => {
    if (showLetter) {
      setTimeout(() => setPetalsVisible(true), 500);
    }
  }, [showLetter]);

  return (
    <div className="min-h-screen py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        {!showLetter ? (
          /* Envelope */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center min-h-[70vh]"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative"
            >
              <div className="w-64 h-64 bg-primary/30 rounded-3xl shadow-floating flex items-center justify-center cursor-pointer"
                   onClick={() => setShowLetter(true)}>
                <Mail className="text-primary" size={120} />
              </div>
              
              {/* Floating hearts around envelope */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.cos(i * 60 * Math.PI / 180) * 150 + 120}px`,
                    top: `${Math.sin(i * 60 * Math.PI / 180) * 150 + 120}px`
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                >
                  <Heart className="text-primary" size={24} fill="currentColor" />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-2xl font-semibold text-foreground"
            >
              Click to open your letter 💌
            </motion.p>
          </motion.div>
        ) : (
          /* Letter Content */
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Falling Petals */}
            {petalsVisible && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                      x: Math.random() * window.innerWidth,
                      y: -50,
                      rotate: Math.random() * 360,
                      opacity: 0.7
                    }}
                    animate={{
                      y: window.innerHeight + 100,
                      rotate: Math.random() * 720,
                      x: Math.random() * window.innerWidth
                    }}
                    transition={{
                      duration: 8 + Math.random() * 4,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  >
                    <Heart className="text-primary" size={16} fill="currentColor" />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Letter Paper */}
            <motion.div
              className="bg-card/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-floating border-4 border-primary/20"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="inline-block text-primary mb-4" size={60} fill="currentColor" />
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  Happy Birthday My Love
                </h1>
                <div className="flex justify-center gap-2 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <Sparkles className="text-primary" size={20} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Letter Body */}
              <motion.div
                className="space-y-6 text-foreground text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ fontFamily: 'Quicksand' }}
              >
                <p className="text-xl">
                  <span className="text-3xl text-primary font-bold">My Dearest,</span>
                </p>

                <p>
                  Today is special because <strong className="text-primary">you</strong> were born, and my life became beautiful because <strong className="text-primary">you exist</strong>.
                </p>

                <p>
                  You are the reason my world feels warmer, brighter, and happier every single day. 
                  Every smile of yours is my favorite view, every laugh of yours is my favorite sound.
                </p>

                <p>
                  When I look at you, I see everything I've ever wanted. When I'm with you, I feel like I'm exactly where I belong. 
                  You make ordinary moments extraordinary just by being there.
                </p>

                <p>
                  Your kindness touches everyone around you. Your strength inspires me. Your love completes me. 
                  You're not just my girlfriend, you're my best friend, my partner, my everything.
                </p>

                <p>
                  On this special day, I want you to know how deeply you're loved, how incredibly special you are, 
                  and how grateful I am that I get to celebrate every moment with you.
                </p>

                <p className="text-xl font-semibold text-center">
                  I promise to always cherish you, support you, make you laugh, and love you with everything I have.
                </p>

                <motion.div
                  className="bg-primary/10 rounded-2xl p-6 text-center border-2 border-primary/30"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-3xl font-bold text-primary mb-2">
                    Happy Birthday, My Beautiful Girl! 🎂
                  </p>
                  <p className="text-xl text-foreground">
                    May this year bring you all the happiness you deserve.
                  </p>
                </motion.div>

                <p className="text-right text-2xl font-bold text-gradient" style={{ fontFamily: 'Playfair Display' }}>
                  Forever Yours 💕
                </p>
              </motion.div>

              {/* Bottom Hearts */}
              <div className="flex justify-center gap-3 mt-8">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  >
                    <Heart 
                      className="text-primary" 
                      size={20 + i * 2} 
                      fill="currentColor" 
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Restart Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center mt-8"
            >
              <Button
                size="lg"
                onClick={() => window.location.href = '/'}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-glow transition-smooth"
              >
                <Heart className="mr-2" fill="currentColor" />
                Start Over
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BirthdayLetterPage;