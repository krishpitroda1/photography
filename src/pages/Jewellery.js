// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import img1 from "../assets/j1.jpg";
// import img2 from "../assets/j2.jpg";
// import img3 from "../assets/j3.jpeg";
// import img4 from "../assets/j4.jpg";
// import img5 from "../assets/j5.jpg";
// import img6 from "../assets/j6.jpeg";

// const photos = [
//   { src: img1, alt: 'Elegant Diamond Necklace', caption: 'Handcrafted diamond necklace with platinum setting' },
//   { src: img2, alt: 'Golden Pearl Earrings', caption: 'Exquisite golden pearls with diamond accents' },
//   { src: img3, alt: 'Sapphire Ring Collection', caption: 'Royal blue sapphires in white gold bands' },
//   { src: img4, alt: 'Vintage Ruby Bracelet', caption: 'Antique ruby bracelet with intricate filigree' },
//   { src: img5, alt: 'Modern Silver Set', caption: 'Contemporary silver jewellery collection' },
//   { src: img6, alt: 'Bridal Diamond Set', caption: 'Luxurious bridal diamond jewellery ensemble' },
// ];

// const Jewellery = () => {
//   const [isLightboxOpen, setIsLightboxOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [showSlideshow, setShowSlideshow] = useState(true);

//   // Auto-advance slideshow
//   useEffect(() => {
//     if (showSlideshow) {
//       const timer = setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % photos.length);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [currentSlide, showSlideshow]);

//   // Transition from slideshow to grid after full cycle
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSlideshow(false);
//     }, photos.length * 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   const openLightbox = (photo) => {
//     setCurrentImage(photo);
//     setIsLightboxOpen(true);
//   };

//   const closeLightbox = () => {
//     setIsLightboxOpen(false);
//     setCurrentImage(null);
//   };

//   // Animation variants
//   const slideVariants = {
//     enter: { opacity: 0, x: 100 },
//     center: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: -100 }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.8
//       }
//     })
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4 md:p-8">
//       {/* Slideshow Section */}
//       {showSlideshow && (
//         <div className="h-screen flex flex-col items-center justify-center">
//           <motion.h1 
//             className="text-4xl md:text-6xl font-extrabold mb-8 text-center text-gray-700"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             Our Jewellery Collection
//           </motion.h1>
          
//           <div className="relative w-full max-w-4xl h-96 md:h-[500px] overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentSlide}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.8 }}
//                 className="absolute inset-0 flex items-center justify-center"
//               >
//                 <img
//                   src={photos[currentSlide].src}
//                   alt={photos[currentSlide].alt}
//                   className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
//                 />
//                 <motion.div 
//                   className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   <h3 className="text-xl font-bold text-white">{photos[currentSlide].alt}</h3>
//                   <p className="text-gray-200">{photos[currentSlide].caption}</p>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       )}

//       {/* Grid Gallery Section */}
//       {!showSlideshow && (
//         <div className="pt-12">
//           <motion.h1 
//             className="text-4xl font-extrabold mb-12 text-center text-gray-700"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Explore The Collection
//           </motion.h1>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {photos.map((photo, index) => (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={itemVariants}
//                 className="group relative cursor-pointer"
//                 onClick={() => openLightbox(photo)}
//               >
//                 <div className="relative overflow-hidden rounded-xl shadow-lg h-80">
//                   <motion.img
//                     src={photo.src}
//                     alt={photo.alt}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.5 }}
//                   />
//                   <motion.div 
//                     className="absolute inset-0 bg-black/30 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     initial={{ opacity: 0 }}
//                   >
//                     <div>
//                       <h3 className="text-xl font-bold text-white">{photo.alt}</h3>
//                       <p className="text-gray-200">{photo.caption}</p>
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Lightbox */}
//       <AnimatePresence>
//         {isLightboxOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeLightbox}
//           >
//             <motion.div 
//               className="relative max-w-6xl w-full"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//             >
//               <img
//                 src={currentImage?.src}
//                 alt={currentImage?.alt}
//                 className="max-w-full max-h-[90vh] mx-auto object-contain rounded-lg"
//               />
//               <motion.button
//                 onClick={closeLightbox}
//                 className="absolute top-4 right-4 text-white text-3xl p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 &times;
//               </motion.button>
//               <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
//                 <h3 className="text-xl font-bold">{currentImage?.alt}</h3>
//                 <p>{currentImage?.caption}</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Jewellery;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../assets/j1.jpg";
import img2 from "../assets/j2.jpg";
import img3 from "../assets/j3.jpeg";
import img4 from "../assets/j4.jpg";
import img5 from "../assets/j5.jpg";
import img6 from "../assets/j6.jpeg";

const photos = [
  { src: img1, alt: 'Elegant Diamond Necklace', caption: 'Handcrafted diamond necklace with platinum setting' },
  { src: img2, alt: 'Golden Pearl Earrings', caption: 'Exquisite golden pearls with diamond accents' },
  { src: img3, alt: 'Sapphire Ring Collection', caption: 'Royal blue sapphires in white gold bands' },
  { src: img4, alt: 'Vintage Ruby Bracelet', caption: 'Antique ruby bracelet with intricate filigree' },
  { src: img5, alt: 'Modern Silver Set', caption: 'Contemporary silver jewellery collection' },
  { src: img6, alt: 'Bridal Diamond Set', caption: 'Luxurious bridal diamond jewellery ensemble' },
];

const Jewellery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const openLightbox = (photo) => {
    setCurrentImage(photo);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentImage(null);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4 md:p-8">
      {/* Slideshow Section - Always visible */}
      <div className="mb-16 pt-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold mb-8 text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Featured Jewellery Pieces
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

      {/* Grid Gallery Section - Always visible below slideshow */}
      <div className="pt-8">
        <motion.h1 
          className="text-4xl font-extrabold mb-12 text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Full Collection
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
              onClick={() => openLightbox(photo)}
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
            onClick={closeLightbox}
          >
            <motion.div 
              className="relative max-w-6xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <img
                src={currentImage?.src}
                alt={currentImage?.alt}
                className="max-w-full max-h-[90vh] mx-auto object-contain rounded-lg"
              />
              <motion.button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-3xl p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                &times;
              </motion.button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                <h3 className="text-xl font-bold">{currentImage?.alt}</h3>
                <p>{currentImage?.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Jewellery;