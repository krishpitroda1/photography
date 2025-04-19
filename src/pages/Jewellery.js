import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dynamic image imports with WebP format
const importAll = (r) => r.keys().map(r);
const imageContext = require.context('../assets/Jewellery/', false, /\.webp$/);
const imageFiles = importAll(imageContext);

// Memoized photo data with placeholder support


const Jewellery = () => {
  const photos = useMemo(() => imageFiles.map((src, index) => ({
    src,
    placeholder: `/placeholders/jewellery-${index}.jpg`, // Add low-res placeholders
    alt: `Jewellery Item ${index + 1}`,
    caption: `Beautiful jewellery piece ${index + 1} from our collection`,
    aspectRatio: 3/4 // Maintain consistent aspect ratios
  })), [imageFiles]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // Auto-advance slideshow with cleanup
  useEffect(() => {
    if (photos.length === 0) return;
    
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, photos.length]);

  // Image loading handlers
  const handleImageLoad = useCallback((key) => {
    setLoadedImages(prev => ({ ...prev, [key]: true }));
  }, []);

  // Lightbox controls with useCallback
  const openLightbox = useCallback((index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex(prev => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex(prev => (prev + 1) % photos.length);
  }, [photos.length]);

  // Animation variants with reduced motion options
  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      transition: { ease: 'easeInOut', duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6
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
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.2 }
    })
  };

  // Preload first few images
  useEffect(() => {
    const preloadCount = Math.min(4, photos.length);
    for (let i = 0; i < preloadCount; i++) {
      const img = new Image();
      img.src = photos[i].src;
    }
  }, [photos]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4 md:p-8">
      {/* Slideshow Section */}
      {photos.length > 0 && (
        <div className="mb-16 pt-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-8 text-center text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Featured Jewellery Pieces
          </motion.h1>
          
          <div className="relative w-full max-w-4xl h-96 md:h-[500px] mx-auto overflow-hidden rounded-xl">
  <AnimatePresence mode="wait">
    <motion.div
      key={currentSlide}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {!loadedImages[`slide-${currentSlide}`] && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"></div>
        )}
        <img
          src={photos[currentSlide].src}
          alt={photos[currentSlide].alt}
          className={`max-h-full max-w-full object-contain ${loadedImages[`slide-${currentSlide}`] ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
          onLoad={() => handleImageLoad(`slide-${currentSlide}`)}
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-bold text-white">{photos[currentSlide].alt}</h3>
        <p className="text-gray-200">{photos[currentSlide].caption}</p>
      </motion.div>
    </motion.div>
  </AnimatePresence>
</div>
        </div>
      )}

      {/* Grid Gallery Section */}
      <div className="pt-8">
        <motion.h1 
          className="text-4xl font-extrabold mb-12 text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Full Collection 
        </motion.h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              viewport={{ once: true, margin: "100px" }}
              className="group relative cursor-pointer"
              onClick={() => openLightbox(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[3/4]">
                {!loadedImages[`thumb-${index}`] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"></div>
                )}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${loadedImages[`thumb-${index}`] ? 'opacity-100' : 'opacity-0'}`}
                  loading={index < 6 ? "eager" : "lazy"}
                  onLoad={() => handleImageLoad(`thumb-${index}`)}
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-white">{photo.alt}</h3>
                    <p className="text-gray-200">{photo.caption}</p>
                  </div>
                </div>
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
            onClick={closeLightbox}
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 md:left-8 text-white text-4xl p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous image"
            >
              &larr;
            </motion.button>
            
            <div className="relative max-w-6xl w-full h-full flex items-center">
              <AnimatePresence custom={1} mode="wait">
                <motion.div
                  key={currentImageIndex}
                  custom={1}
                  variants={lightboxVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full h-full flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={photos[currentImageIndex]?.src}
                    alt={photos[currentImageIndex]?.alt}
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                </motion.div>
              </AnimatePresence>
              
              <motion.button
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="absolute top-4 right-4 text-white text-3xl p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close lightbox"
              >
                &times;
              </motion.button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg max-w-2xl mx-auto">
                <h3 className="text-xl font-bold">{photos[currentImageIndex]?.alt}</h3>
                <p>{photos[currentImageIndex]?.caption}</p>
              </div>
            </div>
            
            <motion.button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 md:right-8 text-white text-4xl p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next image"
            >
              &rarr;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(Jewellery);