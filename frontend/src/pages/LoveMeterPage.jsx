import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export const LoveMeterPage = ({ onComplete }) => {
  const [meterValue, setMeterValue] = useState(0);
  const [started, setStarted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();

  const getMeterLabel = (value) => {
    if (value < 25) return '💕 Sweet';
    if (value < 50) return '🧸 Extra Cute';
    if (value < 75) return '🌸 Too Adorable';
    if (value < 100) return '💖 Mine Forever';
    return '⚠️ Dangerously Cute!';
  };

  const getMeterColor = (value) => {
    if (value < 25) return 'hsl(350 80% 85%)';
    if (value < 50) return 'hsl(340 90% 75%)';
    if (value < 75) return 'hsl(350 85% 70%)';
    return 'hsl(350 90% 65%)';
  };

  const handleStart = () => {
    setStarted(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      setMeterValue(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setShowWarning(true);
        }, 500);
      }
    }, 30);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        {/* Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                opacity: 0
              }}
              animate={{
                y: -100,
                opacity: [0, 1, 0],
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              <Heart className="text-primary" size={20 + Math.random() * 20} fill="currentColor" />
            </motion.div>
          ))}
        </div>

        {/* Main Card */}
        <motion.div
          className="bg-card/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-floating border border-border"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Title */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              <span className="text-gradient">Cute Meter</span>
            </h1>
            <p className="text-muted-foreground text-lg">Measuring cuteness levels...</p>
          </motion.div>

          {/* Meter Container */}
          <div className="space-y-6 mb-8">
            {/* 3D Meter Display */}
            <motion.div
              className="relative bg-muted/50 rounded-2xl p-8 shadow-soft"
              animate={started ? { scale: [1, 1.02, 1] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {/* Meter Label */}
              <motion.div
                className="text-center mb-6"
                animate={{ scale: meterValue > 0 ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-4xl md:text-5xl font-bold" style={{ color: getMeterColor(meterValue) }}>
                  {getMeterLabel(meterValue)}
                </span>
              </motion.div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="h-8 bg-background rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className="h-full gradient-glow flex items-center justify-end px-4"
                    initial={{ width: '0%' }}
                    animate={{ width: `${meterValue}%` }}
                    transition={{ duration: 0.1 }}
                  >
                    {meterValue > 10 && (
                      <span className="text-primary-foreground font-bold">{meterValue}%</span>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Sparkles */}
              {meterValue > 0 && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: '50%'
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    >
                      <Sparkles className="text-primary" size={24} />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Warning Message */}
            {showWarning && (
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="bg-primary/20 border-2 border-primary rounded-2xl p-6 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <h2 className="text-3xl font-bold text-primary mb-2">⚠️ WARNING ⚠️</h2>
                  <p className="text-xl font-semibold text-primary-foreground">
                    She is dangerously cute!
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!started ? (
              <Button
                size="lg"
                onClick={handleStart}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-glow transition-smooth"
              >
                <Heart className="mr-2" fill="currentColor" />
                Start Measuring
              </Button>
            ) : showWarning ? (
              <Button
                size="lg"
                onClick={() => navigate('/gallery')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-glow transition-smooth"
              >
                <Sparkles className="mr-2" />
                See Her Photos
              </Button>
            ) : null}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoveMeterPage;