import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PhotoGalleryPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const navigate = useNavigate();

  const photos = [
    {
    "id": 1,
    "url": '/images/image3.jpeg', // Correct path for public folder
    "caption": "Your beautiful smile 💕"
  },
    {
      id: 2,
      url: '/images/image5.jpeg',
      caption: 'Love in every moment 💖'
    },
    {
      id: 3,
      url: '/images/image2.jpeg',
      caption: 'Together forever 🌸'
    },
    {
      id: 4,
      url: '/images/image1.jpeg',
      caption: 'My precious one 🧸'
    },
    {
      id: 5,
      url: '/images/image6.jpeg',
      caption: 'You light up my world ✨'
    },
    {
      id: 6,
      url: '/images/image4.jpeg',
      caption: 'Forever mine 💝'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
            <span className="text-gradient">Our Memories</span>
          </h1>
          <p className="text-muted-foreground text-lg">Every photo tells our story 💕</p>
        </motion.div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Hanging String */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary/50" />
              
              {/* Clip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-primary rounded-t-md shadow-soft" />

              {/* Photo Card */}
              <motion.div
                className="bg-card rounded-2xl overflow-hidden shadow-floating cursor-pointer border-4 border-background"
                whileHover={{ scale: 1.05, rotate: 0 }}
                animate={{ rotate: index % 2 === 0 ? -2 : 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => setSelectedPhoto(photo)}
                style={{ transformOrigin: 'top center' }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <Heart className="text-card" size={48} fill="currentColor" />
                  </div>
                </div>
                
                {/* Caption */}
                <div className="p-4 text-center">
                  <p className="text-foreground font-semibold">{photo.caption}</p>
                </div>
              </motion.div>

              {/* Floating Hearts */}
              <motion.div
                className="absolute -top-4 -right-4 pointer-events-none"
                animate={{
                  y: [-5, -15, -5],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                <Heart className="text-primary" size={24} fill="currentColor" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Next Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => navigate('/letter')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-glow transition-smooth"
          >
            <Heart className="mr-2" fill="currentColor" />
            Read My Letter
          </Button>
        </motion.div>
      </div>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-4 -right-4 bg-card rounded-full p-2 shadow-glow z-10"
              >
                <X className="text-foreground" size={24} />
              </button>

              {/* Photo */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-floating border-8 border-background">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.caption}
                  className="w-full h-auto"
                />
                <div className="p-6 text-center">
                  <p className="text-2xl font-semibold text-foreground">{selectedPhoto.caption}</p>
                </div>
              </div>

              {/* Sparkles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: i % 2 === 0 ? '-20px' : 'auto',
                    bottom: i % 2 === 1 ? '-20px' : 'auto'
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  <Heart className="text-primary" size={20} fill="currentColor" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGalleryPage;