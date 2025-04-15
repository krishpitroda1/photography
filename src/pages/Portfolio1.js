import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link'; // If using Next.js

// Image imports - organized by category
// Jewelry
import jewelry1 from "../assets/jewelry/j1.jpg";
import jewelry2 from "../assets/jewelry/j2.jpg";
import jewelry3 from "../assets/jewelry/j3.jpg";

// Product
import product1 from "../assets/product/pr1.jpg";
import product2 from "../assets/product/pr2.jpg";
import product3 from "../assets/product/pr4.jpg";
import product4 from "../assets/product/pr5.jpg";

// Fashion
import fashion1 from "../assets/fashion/f18.jpg";
import fashion2 from "../assets/fashion/f34.jpg";
import fashion3 from "../assets/fashion/f22.jpg";

// Wildlife
import wildlife1 from "../assets/wildlife/w1.jpg";
import wildlife2 from "../assets/wildlife/w2.jpg";

// Image configuration
const IMAGES = {
  all: [
    { src: jewelry1, alt: 'Elegant Diamond Necklace', category: 'jewelry', caption: 'Handcrafted diamond necklace with platinum setting' },
    { src: jewelry2, alt: 'Golden Pearl Earrings', category: 'jewelry', caption: 'Exquisite golden pearls with diamond accents' },
    { src: product1, alt: 'Sapphire Ring Collection', category: 'product', caption: 'Royal blue sapphires in white gold bands' },
    { src: product2, alt: 'Vintage Ruby Bracelet', category: 'product', caption: 'Antique ruby bracelet with intricate filigree' },
    { src: fashion1, alt: 'Modern Silver Set', category: 'fashion', caption: 'Contemporary silver jewellery collection' },
    { src: fashion2, alt: 'Bridal Diamond Set', category: 'fashion', caption: 'Luxurious bridal diamond jewellery ensemble' },
    { src: wildlife1, alt: 'Wildlife Photography', category: 'wildlife', caption: 'Nature in its purest form' },
    { src: wildlife2, alt: 'Wildlife Closeup', category: 'wildlife', caption: 'Detailed animal portrait' }
  ],
  jewelry: [
    { src: jewelry1, alt: 'Elegant Diamond Necklace', caption: 'Handcrafted diamond necklace with platinum setting' },
    { src: jewelry2, alt: 'Golden Pearl Earrings', caption: 'Exquisite golden pearls with diamond accents' },
    { src: jewelry3, alt: 'Diamond Collection', caption: 'Premium diamond jewelry set' },
    // More jewelry images would be here
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

// Component to display a category section with "View More" button
const CategorySection = ({ category, photos, openLightbox, ref }) => {
  // Show only first 3 photos in preview mode
  const previewPhotos = photos.slice(0, 3);
  
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, staggerChildren: 0.1 }
        }
      }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
          {category.charAt(0).toUpperCase() + category.slice(1)} Photography
        </motion.h2>
        <Link href={`/portfolio/${category}`} passHref>
          <motion.a
            className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm md:text-base hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More
          </motion.a>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {previewPhotos.map((photo, index) => (
          <PhotoCard 
            key={`${category}-${index}`} 
            photo={photo} 
            index={index} 
            openLightbox={openLightbox} 
          />
        ))}
      </div>
    </motion.section>
  );
};

// Rest of your components (PhotoCard, Lightbox) remain the same...
// ... [keep the existing PhotoCard and Lightbox components] ...

const Portfolio = () => {
  // ... [keep all the existing state and hooks] ...

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      {/* ... [keep the header and featured slider section] ... */}

      <div 
        id="gallery-start" 
        ref={refs.galleryStart} 
        className="container mx-auto px-4 py-12 space-y-20"
      >
        {activeCategory === 'all' ? (
          Object.keys(IMAGES).filter(key => key !== 'all').map((cat) => (
            <CategorySection
              key={cat}
              category={cat}
              photos={IMAGES[cat]}
              openLightbox={openLightbox}
              ref={refs[cat]}
            />
          ))
        ) : (
          <motion.section
            ref={refs[activeCategory]}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, staggerChildren: 0.1 }
              }
            }}
            className="space-y-8"
          >
            <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
              {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Photography
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {IMAGES[activeCategory].map((photo, index) => (
                <PhotoCard 
                  key={`${activeCategory}-${index}`} 
                  photo={photo} 
                  index={index} 
                  openLightbox={openLightbox} 
                />
              ))}
            </div>
          </motion.section>
        )}
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