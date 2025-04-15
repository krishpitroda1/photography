import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { FaCamera, FaLightbulb, FaPalette } from "react-icons/fa";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/1.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const gridItems = [
    { id: 1, title: "Portraits", className: "md:col-span-2 md:row-span-2 col-span-2 row-span-2" },
    { id: 2, title: "Landscapes", className: "col-span-2 md:col-span-1 row-span-1" },
    { id: 3, title: "Weddings", className: "col-span-2 md:col-span-1 row-span-1 md:row-span-2" },
    { id: 4, title: "Fashion", className: "col-span-2 md:col-span-1 row-span-1" },
    { id: 5, title: "Street", className: "col-span-2 md:col-span-2 row-span-1" },
    { id: 6, title: "Abstract", className: "col-span-2 md:col-span-1 row-span-1" },
    { id: 7, title: "Nature", className: "col-span-2 md:col-span-1 row-span-1" },
  ];

  // Lenix Smooth Scroll Implementation
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        if (targetId === '#') return;
        
        try {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            if (window.history.pushState) {
              window.history.pushState(null, null, targetId);
            } else {
              window.location.hash = targetId;
            }
          }
        } catch (error) {
          console.error('Smooth scroll error:', error);
          window.location.href = targetId;
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white overflow-hidden relative w-full bg-white">
      {/* Hero Section */}
      <section 
        id="home"
        className="relative w-full h-screen flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: "url('https://krishpitroda1.github.io/photography/static/media/1.f87c31bbe07419d941ef.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/40"></div>
        
        <motion.div 
          className="relative z-10 bg-black/70 p-6 md:p-10 rounded-lg max-w-4xl mx-4 backdrop-blur-sm"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl md:text-2xl mt-4 font-light text-gray-300">
            Your Vision, My Lens-Creating Timeless
          </p>
          <TypeAnimation 
            sequence={[
              "Fashion Shots", 
              1000, 
              "Catalogue Shots", 
              1000, 
              "Jewellery Shots", 
              1000,
              "Product Shots",
              1000,
              "E-commerce Shots",
              1000,
            ]} 
            wrapper="h1" 
            className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4" 
            repeat={Infinity}
          /> 
          <p className="text-gray-300 mb-6">Transforming moments into memories with a creative touch.</p>
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/portfolio">
              <motion.button 
                className="px-4 py-2 sm:px-6 sm:py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Now
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore the Frames
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="text-white text-sm">Scroll to explore</div>
          <div className="w-1 h-10 bg-white mx-auto mt-2"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-black font-bold mb-6">About My Vision</h2>
            <p className="text-base md:text-lg mb-6 text-gray-700">
              I'm Rushank Agrawal, a passionate photographer dedicated to transforming ideas into powerful visuals.
            </p>
            <p className="text-base md:text-lg mb-8 text-gray-700">
              For me, photography is more than just clicking pictures; it's about storytelling, emotion, and art.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-center">
                <FaCamera className="text-white text-lg md:text-xl" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-teal-600 to-blue-400 flex items-center justify-center">
                <FaLightbulb className="text-white text-lg md:text-xl" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <FaPalette className="text-white text-lg md:text-xl" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative h-64 md:h-96"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-3/4 h-3/4 border-2 border-blue-500/30 rounded-lg z-10 transform rotate-3"></div>
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 border-2 border-cyan-500/30 rounded-lg transform -rotate-3"></div>
            <img 
              src={img3} 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 object-cover rounded-lg shadow-2xl z-20" 
              alt="Photographer" 
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section id="gallery" className="py-12 md:py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Explore My Specialties
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 gap-3 md:gap-4 min-h-[300px] md:h-[500px] lg:h-[700px] w-full">
          {gridItems.map((item) => (
            <motion.div
              key={item.id}
              className={`relative rounded-lg md:rounded-xl overflow-hidden ${item.className} group`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(item.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-full h-full relative">
                <img 
                  src={images[item.id % images.length]} 
                  className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt={item.title} 
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 ${hoveredIndex === item.id ? 'opacity-100' : 'opacity-0'}`}>
                  <motion.h3 
                    className="text-lg md:text-xl lg:text-2xl font-bold text-white text-center px-2"
                    initial={{ y: 20 }}
                    animate={{ y: hoveredIndex === item.id ? 0 : 20 }}
                  >
                    {item.title}
                  </motion.h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vertical Gallery */}
      <section id="portfolio" className="flex flex-col items-center gap-8 md:gap-12 py-12 md:py-20 relative">
        <div className="absolute top-0 left-0 w-full h-20 md:h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 md:h-32 bg-gradient-to-t from-white to-transparent"></div>
        
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`relative w-11/12 md:w-3/4 overflow-hidden rounded-xl md:rounded-2xl ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
            initial={{ opacity: 0, y: 100, rotate: index % 2 === 0 ? 5 : -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 1 : -1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ zIndex: images.length - index }}
          >
            <motion.img
              src={img}
              className="w-full h-auto max-h-[70vh] object-contain rounded-xl md:rounded-2xl shadow-lg"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              loading="lazy"
            />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black to-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white">Photo Title {index + 1}</h3>
              <p className="text-gray-300">Location, Year</p>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 md:py-20 px-4 md:px-10 bg-black/50">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Client Experiences
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="bg-gray-800 p-6 md:p-8 rounded-lg md:rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-700 mr-3 md:mr-4 overflow-hidden">
                  <img src={images[item % images.length]} className="w-full h-full object-cover" alt="Client" loading="lazy" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base">Client Name {item}</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Wedding Client</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                "Working with this photographer was an incredible experience."
              </p>
              <div className="mt-3 md:mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 md:py-24 lg:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h3 
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Ready to Create Something Extraordinary?
          </motion.h3>
          <motion.p 
            className="text-lg md:text-xl mb-6 md:mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Let's collaborate to capture your vision with artistry and precision.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/contact">
              <motion.button 
                className="px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-gray-100"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 10px 25px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;