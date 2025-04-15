import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

// Image imports
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
import wildlife1 from "../assets/w1.webp";
import wildlife2 from "../assets/w2.webp";
import wildlife3 from "../assets/w4.webp";

// Image configuration
const IMAGES = {
  jewellery: [
    { src: jewelry1, alt: 'Elegant Diamond Necklace', caption: 'Handcrafted diamond necklace with platinum setting' },
    { src: jewelry2, alt: 'Golden Pearl Earrings', caption: 'Exquisite golden pearls with diamond accents' },
    { src: jewelry3, alt: 'Diamond Collection', caption: 'Premium diamond jewelry set' }
  ],
  products: [
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
    ,{ src: wildlife3, alt: 'Wildlife Closeup', caption: 'Detailed animal portrait' }
  
  ]
};

const PhotoCard = React.memo(({ photo, index, openLightbox }) => (
  <motion.div
    custom={index}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.8 }
      })
    }}
    className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg h-48 sm:h-56 md:h-64"
    onClick={() => openLightbox(photo)}
    role="button"
    tabIndex="0"
    aria-label={`View ${photo.alt} in lightbox`}
  >
    <img
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

const Lightbox = ({ image, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    onClick={onClose}
  >
    <div className="relative max-w-6xl w-full">
      <button
        className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        &times;
      </button>
      <div className="flex flex-col items-center">
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] w-auto rounded-lg shadow-xl"
        />
        <div className="mt-4 text-white text-center max-w-2xl">
          <h3 className="text-2xl font-bold">{image.alt}</h3>
          <p className="text-lg mt-2">{image.caption}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const refs = {
    jewellery: useRef(null),
    products: useRef(null),
    fashion: useRef(null),
    wildlife: useRef(null),
    galleryStart: useRef(null),
  };

  const visibility = {
    jewellery: useInView(refs.jewellery, { once: false, margin: "-100px" }),
    products: useInView(refs.products, { once: false, margin: "-100px" }),
    fashion: useInView(refs.fashion, { once: false, margin: "-100px" }),
    wildlife: useInView(refs.wildlife, { once: false, margin: "-100px" }),
  };

  const featuredImages = [
    IMAGES.jewellery[0],
    IMAGES.products[0],
    IMAGES.fashion[0],
    IMAGES.wildlife[0]
  ];

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
    enter: { opacity: 0, x: 100 },
    center: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 100 }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      transition: { ease: 'easeInOut' }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="pt-20 pb-12 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Photography Portfolio
        </motion.h1>

        <div className="relative w-full max-w-6xl h-80 md:h-96 mx-auto overflow-hidden rounded-xl shadow-2xl">
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
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white">{featuredImages[currentSlide].alt}</h3>
                <p className="text-sm md:text-base text-gray-200">{featuredImages[currentSlide].caption}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div 
        id="gallery-start" 
        ref={refs.galleryStart} 
        className="container mx-auto px-4 py-12 space-y-20"
      >
        {/* Jewellery Section */}
        <motion.section
          ref={refs.jewellery}
          initial="hidden"
          animate={visibility.jewellery ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="space-y-8"
        >
          <div className="flex justify-between items-center">
            <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
              Jewellery Photography
            </motion.h2>
            <Link to="/jewellery">
              <motion.button
                className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm md:text-base hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Jewellery
              </motion.button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.jewellery.slice(0, 3).map((photo, index) => (
              <PhotoCard 
                key={`jewellery-${index}`} 
                photo={photo} 
                index={index} 
                openLightbox={openLightbox} 
              />
            ))}
          </div>
        </motion.section>

        {/* Products Section */}
        <motion.section
          ref={refs.products}
          initial="hidden"
          animate={visibility.products ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="space-y-8"
        >
          <div className="flex justify-between items-center">
            <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
              Product Photography
            </motion.h2>
            <Link to="/products">
              <motion.button
                className="px-4 py-2 bg-green-600 text-white rounded-full text-sm md:text-base hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Products
              </motion.button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.products.slice(0, 3).map((photo, index) => (
              <PhotoCard 
                key={`products-${index}`} 
                photo={photo} 
                index={index} 
                openLightbox={openLightbox} 
              />
            ))}
          </div>
        </motion.section>

        {/* Fashion Section */}
        <motion.section
          ref={refs.fashion}
          initial="hidden"
          animate={visibility.fashion ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="space-y-8"
        >
          <div className="flex justify-between items-center">
            <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
              Fashion Photography
            </motion.h2>
            <Link to="/fashion">
              <motion.button
                className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm md:text-base hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Fashion
              </motion.button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.fashion.slice(0, 3).map((photo, index) => (
              <PhotoCard 
                key={`fashion-${index}`} 
                photo={photo} 
                index={index} 
                openLightbox={openLightbox} 
              />
            ))}
          </div>
        </motion.section>

        {/* Wildlife Section */}
        <motion.section
          ref={refs.wildlife}
          initial="hidden"
          animate={visibility.wildlife ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="space-y-8"
        >
          <div className="flex justify-between items-center">
            <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
              Wildlife Photography
            </motion.h2>
            <Link to="/wildlife">
              <motion.button
                className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm md:text-base hover:bg-orange-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Wildlife
              </motion.button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.wildlife.slice(0, 3).map((photo, index) => (
              <PhotoCard 
                key={`wildlife-${index}`} 
                photo={photo} 
                index={index} 
                openLightbox={openLightbox} 
              />
            ))}
          </div>
        </motion.section>
      </div>

      <AnimatePresence>
        {isLightboxOpen && (
          <Lightbox image={currentImage} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;