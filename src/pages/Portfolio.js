import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Import all your images
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
import wildlife1 from "../assets/j1.jpg";
import wildlife2 from "../assets/j2.jpg";

// PhotoCard component
const PhotoCard = React.memo(({ photo, index, openLightbox }) => (
  <motion.div
    custom={index}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.8
        }
      })
    }}
    className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg h-48 sm:h-56 md:h-64"
    onClick={() => openLightbox(photo)}
  >
    <motion.img
      src={photo.src}
      alt={photo.alt}
      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/30 flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div>
        <h3 className="text-base md:text-xl font-bold text-white">{photo.alt}</h3>
        <p className="text-xs md:text-sm text-gray-200">{photo.caption}</p>
      </div>
    </div>
  </motion.div>
));

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  
  // Refs for scroll animations
  const jewelryRef = useRef(null);
  const productRef = useRef(null);
  const fashionRef = useRef(null);
  const wildlifeRef = useRef(null);
  const galleryStartRef = useRef(null);
  
  // Check if sections are in view
  const isJewelryInView = useInView(jewelryRef, { once: false, margin: "-100px" });
  const isProductInView = useInView(productRef, { once: false, margin: "-100px" });
  const isFashionInView = useInView(fashionRef, { once: false, margin: "-100px" });
  const isWildlifeInView = useInView(wildlifeRef, { once: false, margin: "-100px" });

  // Categorized photos
  const categories = {
    all: [
      { src: jewelry1, alt: 'Elegant Diamond Necklace', category: 'jewelry', caption: 'Handcrafted diamond necklace with platinum setting' },
      { src: jewelry2, alt: 'Golden Pearl Earrings', category: 'jewelry', caption: 'Exquisite golden pearls with diamond accents' },
      { src: product1, alt: 'Sapphire Ring Collection', category: 'product', caption: 'Royal blue sapphires in white gold bands' },
      { src: product2, alt: 'Vintage Ruby Bracelet', category: 'product', caption: 'Antique ruby bracelet with intricate filigree' },
      { src: fashion1, alt: 'Modern Silver Set', category: 'fashion', caption: 'Contemporary silver jewellery collection' },
      { src: fashion2, alt: 'Bridal Diamond Set', category: 'fashion', caption: 'Luxurious bridal diamond jewellery ensemble' },
      { src: fashion3, alt: 'Fashion Collection', category: 'fashion', caption: 'Modern fashion accessories' },
      { src: product3, alt: 'Product Shot', category: 'product', caption: 'Professional product photography' },
      { src: product4, alt: 'Luxury Watch', category: 'product', caption: 'High-end timepiece closeup' },
      { src: wildlife1, alt: 'Wildlife Photography', category: 'wildlife', caption: 'Nature in its purest form' },
      { src: wildlife2, alt: 'Wildlife Closeup', category: 'wildlife', caption: 'Detailed animal portrait' }
    ],
    jewelry: [
      { src: jewelry1, alt: 'Elegant Diamond Necklace', caption: 'Handcrafted diamond necklace with platinum setting' },
      { src: jewelry2, alt: 'Golden Pearl Earrings', caption: 'Exquisite golden pearls with diamond accents' },
      { src: jewelry3, alt: 'Diamond Collection', caption: 'Premium diamond jewelry set' }
    ],
    product: [
      { src: product1, alt: 'Sapphire Ring Collection', caption: 'Royal blue sapphires in white gold bands' },
      { src: product2, alt: 'Vintage Ruby Bracelet', caption: 'Antique ruby bracelet with intricate filigree' },
      { src: product3, alt: 'Product Shot', caption: 'Professional product photography' },
      { src: product4, alt: 'Luxury Watch', caption: 'High-end timepiece closeup' }
    ],
    fashion: [
      { src: fashion1, alt: 'Modern Silver Set', caption: 'Contemporary silver jewellery collection' },
      { src: fashion2, alt: 'Bridal Diamond Set', caption: 'Luxurious bridal diamond jewellery ensemble' },
      { src: fashion3, alt: 'Fashion Collection', caption: 'Modern fashion accessories' }
    ],
    wildlife: [
      { src: wildlife1, alt: 'Wildlife Photography', caption: 'Nature in its purest form' },
      { src: wildlife2, alt: 'Wildlife Closeup', caption: 'Detailed animal portrait' }
    ]
  };

  // Featured images for slideshow
  const featuredImages = [
    { src: jewelry1, alt: 'Elegant Diamond Necklace', caption: 'Handcrafted diamond necklace with platinum setting' },
    { src: product1, alt: 'Sapphire Ring Collection', caption: 'Royal blue sapphires in white gold bands' },
    { src: fashion1, alt: 'Modern Silver Set', caption: 'Contemporary silver jewellery collection' },
    { src: wildlife1, alt: 'Wildlife Photography', caption: 'Nature in its purest form' }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, featuredImages.length]);

  // Improved smooth scroll handler
  const handleSmoothScroll = useCallback((e) => {
    // Check if the click is from an anchor tag with hash link
    if (e.target.tagName === 'A' && e.target.hash) {
      e.preventDefault();
      const targetId = e.target.hash.substring(1); // Remove #
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Update URL without page reload
        if (window.history.pushState) {
          window.history.pushState(null, null, e.target.hash);
        } else {
          window.location.hash = e.target.hash;
        }
      }
    }
  }, []);

  // Initialize smooth scroll
  useEffect(() => {
    document.addEventListener('click', handleSmoothScroll);
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, [handleSmoothScroll]);
  // Scroll to top when component mounts
useEffect(() => {
  window.scrollTo(0, 0);
}, []);


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

  const filterPhotos = useCallback((category) => {
    setActiveCategory(category);
    setTimeout(() => {
      const galleryStart = document.getElementById('gallery-start');
      if (galleryStart) {
        window.scrollTo({
          top: galleryStart.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, 50);
  }, []);

  // Animation variants
  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Slideshow Section */}
      <div className="pt-20 md:pt-24 pb-12 md:pb-16 px-4">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 md:mb-8 text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Photography Portfolio
        </motion.h1>
        
        <div className="relative w-full max-w-6xl h-64 sm:h-80 md:h-96 lg:h-[600px] mx-auto overflow-hidden rounded-xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={featuredImages[currentSlide].src}
                alt={featuredImages[currentSlide].alt}
                className="max-h-full max-w-full object-cover w-full h-full"
                loading="eager"
              />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/80 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-lg md:text-2xl font-bold text-white">{featuredImages[currentSlide].alt}</h3>
                <p className="text-sm md:text-base text-gray-200">{featuredImages[currentSlide].caption}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 z-10 bg-gray-100 shadow-md py-2 md:py-3 lg:py-4">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 md:pb-0 justify-start md:justify-center gap-2 md:gap-4 lg:gap-6 hide-scrollbar">
            {['all', 'jewelry', 'product', 'fashion', 'wildlife'].map((category) => (
              <motion.button
                key={category}
                onClick={() => filterPhotos(category)}
                className={`flex-shrink-0 px-4 py-1.5 md:px-5 md:py-2 rounded-full capitalize font-medium text-xs sm:text-sm md:text-base snap-center ${
                  activeCategory === category 
                    ? 'bg-gray-800 text-white shadow-inner' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="gallery-start" ref={galleryStartRef} className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-20">
        {activeCategory === 'all' ? (
          <>
            <motion.section
              ref={jewelryRef}
              initial="hidden"
              animate={isJewelryInView ? "visible" : "hidden"}
              variants={sectionVariants}
              className="space-y-6 md:space-y-8"
            >
              <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
                Jewelry Photography
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {categories.jewelry.map((photo, index) => (
                  <PhotoCard key={`jewelry-${index}`} photo={photo} index={index} openLightbox={openLightbox} />
                ))}
              </div>
            </motion.section>

            <motion.section
              ref={productRef}
              initial="hidden"
              animate={isProductInView ? "visible" : "hidden"}
              variants={sectionVariants}
              className="space-y-6 md:space-y-8"
            >
              <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
                Product Photography
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {categories.product.map((photo, index) => (
                  <PhotoCard key={`product-${index}`} photo={photo} index={index} openLightbox={openLightbox} />
                ))}
              </div>
            </motion.section>

            <motion.section
              ref={fashionRef}
              initial="hidden"
              animate={isFashionInView ? "visible" : "hidden"}
              variants={sectionVariants}
              className="space-y-6 md:space-y-8"
            >
              <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
                Fashion Photography
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {categories.fashion.map((photo, index) => (
                  <PhotoCard key={`fashion-${index}`} photo={photo} index={index} openLightbox={openLightbox} />
                ))}
              </div>
            </motion.section>

            <motion.section
              ref={wildlifeRef}
              initial="hidden"
              animate={isWildlifeInView ? "visible" : "hidden"}
              variants={sectionVariants}
              className="space-y-6 md:space-y-8"
            >
              <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
                Wildlife Photography
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {categories.wildlife.map((photo, index) => (
                  <PhotoCard key={`wildlife-${index}`} photo={photo} index={index} openLightbox={openLightbox} />
                ))}
              </div>
            </motion.section>
          </>
        ) : (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="space-y-6 md:space-y-8"
          >
            <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
              {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Photography
            </motion.h2>
            <div className={
              `grid gap-4 md:gap-6 ${
                activeCategory === 'product' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
                activeCategory === 'fashion' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                'grid-cols-1 sm:grid-cols-2'
              }`
            }>
              {categories[activeCategory]?.map((photo, index) => (
                <PhotoCard key={`${activeCategory}-${index}`} photo={photo} index={index} openLightbox={openLightbox} />
              ))}
            </div>
          </motion.section>
        )}
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
            <motion.div 
              className="relative max-w-6xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage?.src}
                alt={currentImage?.alt}
                className="max-w-full max-h-[80vh] sm:max-h-[90vh] mx-auto object-contain rounded-lg"
              />
              <motion.button
                onClick={closeLightbox}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-2xl sm:text-3xl p-1 sm:p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                &times;
              </motion.button>
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-black/50 text-white p-2 sm:p-4 rounded-lg">
                <h3 className="text-sm sm:text-xl font-bold">{currentImage?.alt}</h3>
                <p className="text-xs sm:text-base">{currentImage?.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;