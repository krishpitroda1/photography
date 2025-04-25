import React, { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link,useLocation } from 'react-router-dom';
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
    // { src: product4, alt: 'Luxury Watch', caption: 'High-end timepiece closeup' }
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

const PhotoCard = React.memo(({ photo, index, openLightbox }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
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
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"></div>
      )}
      <img
        src={photo.src}
        alt={photo.alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } group-hover:scale-110 transform duration-500`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
      <div className="absolute inset-0 bg-black/30 flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div>
     
     
     
          {/* <h3 className="text-base md:text-xl font-bold text-white">{photo.alt}</h3> */}
        
          {/* <p className="text-xs md:text-sm text-gray-200">{photo.caption}</p> */}
        </div>
      </div>
    </motion.div>
  );
});

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [loadedSlides, setLoadedSlides] = useState([]);

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen pt-10 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="pt-20 pb-12 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
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
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={featuredImages[currentSlide].src}
                alt={featuredImages[currentSlide].alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* <h3 className="text-xl md:text-2xl font-bold text-white">{featuredImages[currentSlide].alt}</h3> */}
                {/* <p className="text-sm md:text-base text-gray-200">{featuredImages[currentSlide].caption}</p> */}
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
        {['jewellery', 'products', 'fashion', 'wildlife'].map((category) => (
          <motion.section
            key={category}
            ref={refs[category]}
            initial="hidden"
            animate={visibility[category] ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="space-y-8"
          >
            <div className="flex justify-between items-center">
              <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
                {category.charAt(0).toUpperCase() + category.slice(1)} Photography
              </motion.h2>
              <Link to={`/${category}`}>
                <motion.button
                  className={`px-4 py-2 ${
                    category === 'jewellery' ? 'bg-blue-600 hover:bg-blue-700' :
                    category === 'products' ? 'bg-green-600 hover:bg-green-700' :
                    category === 'fashion' ? 'bg-purple-600 hover:bg-purple-700' :
                    'bg-orange-600 hover:bg-orange-700'
                  } text-white rounded-full text-sm md:text-base transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {IMAGES[category].map((photo, index) => (
                <PhotoCard 
                  key={`${category}-${index}`} 
                  photo={photo} 
                  index={index} 
                  openLightbox={openLightbox} 
                />
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <Suspense fallback={null}>
        {isLightboxOpen && (
          <Lightbox image={currentImage} onClose={closeLightbox} />
        )}
      </Suspense>
    </div>
  );
};

export default React.memo(Portfolio);