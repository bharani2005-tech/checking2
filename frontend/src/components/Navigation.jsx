import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pages = [
    { path: '/', label: '💕', title: 'Love Meter' },
    { path: '/gallery', label: '📸', title: 'Gallery' },
    { path: '/letter', label: '💌', title: 'Letter' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/')}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="text-primary" size={32} fill="currentColor" />
            </motion.div>
            <span className="text-2xl font-bold text-gradient" style={{ fontFamily: 'Playfair Display' }}>
              Birthday wishes for my Queen
            </span>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex gap-3">
            {pages.map((page) => (
              <motion.button
                key={page.path}
                onClick={() => navigate(page.path)}
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center transition-smooth
                  ${
                    location.pathname === page.path
                      ? 'bg-primary text-primary-foreground shadow-glow'
                      : 'bg-muted text-muted-foreground hover:bg-primary/20'
                  }
                `}>
                  <span className="text-xl">{page.label}</span>
                </div>
                
                {/* Tooltip */}
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-3 py-1 rounded-full text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
                  {page.title}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;