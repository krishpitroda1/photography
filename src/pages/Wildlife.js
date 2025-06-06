import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dynamically import all WebP images from the Wildlife folder
const importAll = (r) => r.keys().map(r);
const imageContext = require.context('../assets/wildlife/', false, /\.webp$/);
const imageFiles = importAll(imageContext);

// Create photo objects with metadata
const photos = imageFiles.map((src, index) => ({
  src,
  alt: `Wildlife Photography ${index + 1}`,
  caption: `Stunning wildlife moment ${index + 1} from our collection`
}));

const Wildlife = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    if (photos.length === 0) return;
    
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % photos.length
    );
  };

  // Animation variants
  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8
      }
    })
  };

  const lightboxVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4 md:p-8">
      {/* Slideshow Section - Always visible */}
      {photos.length > 0 && (
        <div className="mb-16 pt-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-8 text-center text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Wildlife Photography
          </motion.h1>
          
          <div className="relative w-full max-w-4xl h-96 md:h-[500px] mx-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src={photos[currentSlide].src}
                  alt={photos[currentSlide].alt}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-white">{photos[currentSlide].alt}</h3>
                  <p className="text-gray-200">{photos[currentSlide].caption}</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Grid Gallery Section - Always visible below slideshow */}
      <div className="pt-8">
        <motion.h1 
          className="text-4xl font-extrabold mb-12 text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Wildlife Gallery ({photos.length} Photos)
        </motion.h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="group relative cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg h-80">
                <motion.img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black/30 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white">{photo.alt}</h3>
                    <p className="text-gray-200">{photo.caption}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              onClick={goToPrevious}
              className="absolute left-4 md:left-8 text-white text-4xl p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors z-10"
              whileHover={{ scale: 1.1 }}
            >
              &larr;
            </motion.button>
            
            <motion.div 
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence custom={1} mode="wait">
                <motion.div
                  key={currentImageIndex}
                  custom={1}
                  variants={lightboxVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <img
                    src={photos[currentImageIndex]?.src}
                    alt={photos[currentImageIndex]?.alt}
                    className="max-w-full max-h-[80vh] mx-auto object-contain rounded-lg"
                  />
                  <div className="w-full mt-4 bg-black/50 text-white p-4 rounded-lg">
                    <h3 className="text-xl font-bold">{photos[currentImageIndex]?.alt}</h3>
                    <p>{photos[currentImageIndex]?.caption}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <motion.button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-3xl p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                &times;
              </motion.button>
            </motion.div>
            
            <motion.button
              onClick={goToNext}
              className="absolute right-4 md:right-8 text-white text-4xl p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors z-10"
              whileHover={{ scale: 1.1 }}
            >
              &rarr;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Wildlife;