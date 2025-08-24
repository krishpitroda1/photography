import React, { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import jewelry1 from "../assets/j1.jpg";
import jewelry2 from "../assets/j2.jpg";
import jewelry3 from "../assets/j3.jpg";
import product1 from "../assets/pr1.jpg";
import product2 from "../assets/pr2.jpg";
import product3 from "../assets/pr4.jpg";
import product4 from "../assets/pr5.jpg";
import fashion1 from "../assets/f18.jpg";
import fashion2 from "../assets/f34.jpg";
import fashion3 from "../assets/f22.jpg";
import wildlife1 from "../assets/w3a.jpg";
import wildlife2 from "../assets/w2.webp";
import wildlife3 from "../assets/w4.webp";

// Lazy load Lightbox component
const Lightbox = lazy(() => import('../components/Lightbox'));

// Image configuration with absolute paths
const IMAGES = {
  jewellery: [
    { src: jewelry1, alt: 'Elegant Diamond Necklace', caption: 'Handcrafted diamond necklace with platinum setting' },
    { src: jewelry2, alt: 'Golden Pearl Earrings', caption: 'Exquisite golden pearls with diamond accents' },
    { src: jewelry3, alt: 'Diamond Collection', caption: 'Premium diamond jewelry set' }
  ],
  products: [
    { src: product2, alt: 'Sapphire Ring Collection', caption: 'Royal blue sapphires in white gold bands' },
    { src: product1, alt: 'Vintage Ruby Bracelet', caption: 'Antique ruby bracelet with intricate filigree' },
    { src: product3, alt: 'Product Shot', caption: 'Professional product photography' },
  ],
  fashion: [
    { src: fashion3, alt: 'Modern Silver Set', caption: 'Contemporary silver jewellery collection' },
    { src: fashion1, alt: 'Bridal Diamond Set', caption: 'Luxurious bridal diamond jewellery ensemble' },
    { src: fashion3, alt: 'Fashion Collection', caption: 'Modern fashion accessories' }
  ],
  wildlife: [
    { src: wildlife1, alt: 'Wildlife Photography', caption: 'Nature in its purest form' },
    { src: wildlife2, alt: 'Wildlife Closeup', caption: 'Detailed animal portrait' },
    { src: wildlife3, alt: 'Wildlife Closeup', caption: 'Detailed animal portrait' }
  ]
};

// Floating background elements component
const FloatingElements = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y4 = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <>
      <motion.div
        style={{ y: y1 }}
        className="fixed top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-red-500/20 rounded-full blur-xl pointer-events-none z-0"
      />
      <motion.div
        style={{ y: y2 }}
        className="fixed top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl pointer-events-none z-0"
      />
      <motion.div
        style={{ y: y3 }}
        className="fixed bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl pointer-events-none z-0"
      />
      <motion.div
        style={{ y: y4 }}
        className="fixed bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-pink-400/20 to-orange-500/20 rounded-full blur-xl pointer-events-none z-0"
      />
    </>
  );
};

// Enhanced PhotoCard with 3D effects
const PhotoCard = React.memo(({ photo, index, openLightbox, category }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const categoryColors = {
    jewellery: 'from-blue-500 to-cyan-500',
    products: 'from-green-500 to-emerald-500',
    fashion: 'from-purple-500 to-pink-500',
    wildlife: 'from-orange-500 to-red-500'
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale, opacity }}
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 100, rotateY: -15 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          rotateY: 0,
          transition: { 
            delay: i * 0.15, 
            duration: 1,
            type: "spring",
            stiffness: 100
          }
        })
      }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl h-48 sm:h-56 md:h-64 perspective-1000"
      onClick={() => openLightbox(photo)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex="0"
      aria-label={`View ${photo.alt} in lightbox`}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
    >
      {/* Gradient border */}
      <div className={`absolute inset-0 bg-gradient-to-r ${categoryColors[category]} p-0.5 rounded-2xl`}>
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl">
          {!isLoaded && (
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse rounded-2xl`}></div>
          )}
          <img
            src={photo.src}
            alt={photo.alt}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${isHovered ? 'scale-110 rotate-1' : 'scale-100 rotate-0'}`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
          
          {/* Enhanced overlay */}
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 md:p-6`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full">
              <motion.h3 
                className="text-base md:text-xl font-bold text-white mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {photo.alt}
              </motion.h3>
              <motion.p 
                className="text-xs md:text-sm text-gray-200"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {photo.caption}
              </motion.p>
            </div>
          </motion.div>

          {/* Floating category badge */}
          <motion.div
            className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${categoryColors[category]} text-white text-xs font-bold rounded-full shadow-lg`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.5, type: "spring" }}
          >
            {category}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});

const Portfolio = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [loadedSlides, setLoadedSlides] = useState([]);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const refs = {
    jewellery: useRef(null),
    products: useRef(null),
    fashion: useRef(null),
    wildlife: useRef(null),
    galleryStart: useRef(null),
  };

  const visibility = {
    jewellery: useInView(refs.jewellery, { once: true, margin: "100px" }),
    products: useInView(refs.products, { once: true, margin: "100px" }),
    fashion: useInView(refs.fashion, { once: true, margin: "100px" }),
    wildlife: useInView(refs.wildlife, { once: true, margin: "100px" }),
  };

  const featuredImages = [
    IMAGES.jewellery[0],
    IMAGES.products[0],
    IMAGES.fashion[0],
    IMAGES.wildlife[0]
  ];

  // Preload slideshow images
  useEffect(() => {
    const loadImages = featuredImages.map((img, index) => {
      const image = new Image();
      image.src = img.src;
      image.onload = () => {
        setLoadedSlides(prev => [...prev, index]);
      };
      return image;
    });
  }, []);

  // Auto-slide with cleanup
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, featuredImages.length]);

  const openLightbox = useCallback((photo) => {
    setCurrentImage(photo);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  const slideVariants = {
    enter: { opacity: 0, x: 100, scale: 0.8 },
    center: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      scale: 0.8,
      transition: { ease: 'easeInOut', duration: 0.5 }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.15,
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Parallax background effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div ref={containerRef} className={`min-h-screen pt-10 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-black to-gray-900' : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'}`}>
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,255,198,0.2),transparent_50%)]" />
      </motion.div>

      <div className="pt-20 pb-12 px-4 relative z-10">
        {/* Enhanced title with floating effect */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.div
            className="inline-block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <h1 className={`text-5xl md:text-7xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-6 bg-gradient-to-r from-amber-500 via-red-500 to-purple-600 bg-clip-text text-transparent`}>
              Photography Portfolio
            </h1>
          </motion.div>
          <motion.p 
            className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Capturing moments that tell stories, one frame at a time
          </motion.p>
        </motion.div>

        {/* Enhanced hero slideshow */}
        <motion.div 
          className="relative w-full max-w-7xl h-80 md:h-[500px] mx-auto overflow-hidden rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, type: "spring" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={featuredImages[currentSlide].src}
                alt={featuredImages[currentSlide].alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{featuredImages[currentSlide].alt}</h3>
                <p className="text-lg md:text-xl text-gray-200">{featuredImages[currentSlide].caption}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          
          {/* Enhanced slide indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {featuredImages.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div 
        id="gallery-start" 
        ref={refs.galleryStart} 
        className="container mx-auto px-4 py-12 space-y-32 relative z-10"
      >
        {['jewellery', 'products', 'fashion', 'wildlife'].map((category) => (
          <motion.section
            key={category}
            ref={refs[category]}
            initial="hidden"
            animate={visibility[category] ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="space-y-12"
          >
            {/* Enhanced section header */}
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex-1">
                <motion.h2 
                  className={`text-3xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-4`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)} Photography
                </motion.h2>
                <motion.div 
                  className={`w-24 h-1 bg-gradient-to-r ${
                    category === 'jewellery' ? 'from-blue-500 to-cyan-500' :
                    category === 'products' ? 'from-green-500 to-emerald-500' :
                    category === 'fashion' ? 'from-purple-500 to-pink-500' :
                    'from-orange-500 to-red-500'
                  } rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </div>
              <Link to={`/${category}`}>
                <motion.button
                  className={`px-8 py-4 bg-gradient-to-r ${
                    category === 'jewellery' ? 'from-blue-500 to-cyan-500' :
                    category === 'products' ? 'from-green-500 to-emerald-500' :
                    category === 'fashion' ? 'from-purple-500 to-pink-500' :
                    'from-orange-500 to-red-500'
                  } text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              </Link>
            </motion.div>
            
            {/* Enhanced photo grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={sectionVariants}
            >
              {IMAGES[category].map((photo, index) => (
                <PhotoCard 
                  key={`${category}-${index}`} 
                  photo={photo} 
                  index={index} 
                  openLightbox={openLightbox}
                  category={category}
                />
              ))}
            </motion.div>
          </motion.section>
        ))}
      </div>

      {/* Enhanced CTA section */}
      <motion.div 
        className="py-20 px-4 text-center relative z-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className={`text-4xl md:text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-6`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Create Something
            <span className="block bg-gradient-to-r from-amber-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </motion.h2>
          <motion.p 
            className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's transform your vision into stunning visual stories
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-amber-500 to-red-500 text-white font-bold rounded-2xl text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              className={`px-10 py-4 border-2 border-amber-500 ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'} font-bold rounded-2xl text-lg hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Work
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <Suspense fallback={null}>
        {isLightboxOpen && (
          <Lightbox image={currentImage} onClose={closeLightbox} theme={theme} />
        )}
      </Suspense>
    </div>
  );
};

export default React.memo(Portfolio);