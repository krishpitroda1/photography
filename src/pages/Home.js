import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowRight } from "react-icons/fi";
import { FaCamera, FaLightbulb, FaPalette, FaQuoteLeft } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

// Import images
import img1 from "../assets/Homei/1.webp";
import img2 from "../assets/Homei/2.webp";
import img3 from "../assets/Homei/3.webp";
import img4 from "../assets/Homei/4.webp";
import img5 from "../assets/Homei/5.webp";
import img6 from "../assets/Homei/6.webp";
import img7 from "../assets/Homei/7.webp";
import img8 from "../assets/Homei/8.webp";
import img9 from "../assets/Homei/9.webp";
import img10 from "../assets/Homei/10.webp";
import img11 from "../assets/Homei/11.webp";
import img12 from '../assets/Home1.jpg';
import img13 from '../assets/Home2.jpg';
import img14 from '../assets/1.jpg';
import img15 from '../assets/2.jpg';
import img16 from '../assets/3.webp';
import img17 from '../assets/4.jpg';
import img18 from '../assets/5.jpg';
import img20 from '../assets/6.jpg';
import img21 from '../assets/f18.jpg';
import img22 from '../assets/f65.jpg';
import img23 from '../assets/p4.jpg';
import img24 from '../assets/j2.jpg';
import img25 from '../assets/j3.jpg';
import img26 from '../assets/p1.jpg';
import img27 from '../assets/p2.jpg';
import img28 from '../assets/pr6.jpg';
import img29 from '../assets/pr5.jpg';
import img33 from '../assets/rushank.jpg';

const selectedHeroImages = [img5, img6, img11, img12, img13];
const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
const workimages = [img14, img15, img16, img17, img18, img21, img20, img22, img23, img24, img25, img26, img27, img28, img29];

const testimonials = [
  {
    text: "An unforgettable photography experience! Truly professional and creative.",
    author: "Arjun Mehta",
    role: "Bride & Groom"
  },
  {
    text: "Every shot tells a story. Outstanding work and vision.",
    author: "Priya Sharma",
    role: "Fashion Designer"
  },
  {
    text: "Captured moments I didn't even know I needed. Highly recommend!",
    author: "Ravi Verma",
    role: "Event Planner"
  },
];

const Home = () => {
  const { theme } = useTheme();
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % selectedHeroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`overflow-hidden relative w-full bg-[var(--bg-primary)]`}>
      {/* Hero Section */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentHeroImage}
            src={selectedHeroImages[currentHeroImage]}
            alt="Hero"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
        
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70 ${theme === 'light' ? 'mix-blend-multiply' : ''}`}></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[var(--text-primary)] leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
                Capturing
              </span>{" "}
              <br />
              Timeless Moments
            </h1>
            
            <TypeAnimation
              sequence={[
                "Wedding Photography",
                1500,
                "Fashion Photography",
                1500,
                "Portrait Photography",
                1500,
                "Event Photography",
                1500
              ]}
              wrapper="span"
              speed={40}
              style={{ 
                fontSize: "1.5rem", 
                display: "inline-block", 
                background: "linear-gradient(90deg, #f59e0b, #ef4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold"
              }}
              repeat={Infinity}
            />
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Book a Session
                <FiArrowRight className="animate-pulse" />
              </Link>
              <button 
                className={`px-8 py-4 border-2 border-[var(--text-primary)] text-[var(--text-primary)] font-bold rounded-full hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300`}
                onClick={(e) => handleSmoothScroll(e, '#gallery')}
              >
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Hero Image Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {selectedHeroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentHeroImage === index ? 'bg-amber-500 w-6' : 'bg-[var(--text-primary)]/50'}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-28 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] px-4`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--text-primary)]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
                About My Vision
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-[var(--text-secondary)]">
              Photography is more than just capturing moments—it's about preserving emotions, telling stories, and creating art that stands the test of time.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[var(--text-secondary)]">
              My approach combines technical precision with artistic intuition, ensuring each photograph is not just seen but felt.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <FaCamera className="text-2xl" />, text: "10+ Years Experience" },
                { icon: <FaLightbulb className="text-2xl" />, text: "Creative Vision" },
                { icon: <FaPalette className="text-2xl" />, text: "Artistic Approach" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center gap-2 bg-[var(--bg-secondary)] px-4 py-2 rounded-full text-[var(--text-primary)]`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img 
                src={img33} 
                alt="Photographer" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
            <motion.div 
              className="absolute -bottom-6 bg-gradient-to-r from-amber-500 to-red-500 p-1 rounded-2xl"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-[var(--bg-primary)] p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
                  My Philosophy
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  "Light, emotion, composition—when these elements harmonize, magic happens."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-[var(--bg-primary)] px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--text-primary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
              Explore My Work
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workimages.map((imageSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img 
                  src={imageSrc} 
                  alt={`Work ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-b from-black to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-70' : 'opacity-30'}`}></div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-500 font-bold rounded-full hover:bg-amber-500 hover:text-black transition-all duration-300"
            >
              View Full Portfolio
              <FiArrowRight className="animate-pulse" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Parallax Gallery Section */}
      <section id="gallery" className="relative h-[150vh] overflow-hidden" ref={containerRef}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            className="w-full h-full absolute"
            style={{ scale }}
          >
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img 
              src={img5} 
              alt="Parallax Background" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-[var(--text-primary)]"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
                Visual Storytelling
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8"
            >
              Each image is a chapter in someone's story. Scroll to explore my visual narratives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vertical Showcase */}
      <section className="py-20 px-4 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-16">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`w-full ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} md:w-4/5`}
            >
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`} 
                className={`rounded-2xl shadow-xl ${index % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}`}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={`py-28 px-4 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)]`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-20 text-[var(--text-primary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
              Client Experiences
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-[var(--bg-secondary)] p-8 rounded-2xl backdrop-blur-sm border border-[var(--border-color)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <FaQuoteLeft className="text-amber-400 text-3xl mb-6 opacity-70" />
                <p className="text-lg italic mb-6 text-[var(--text-secondary)]">"{testimonial.text}"</p>
                <div className="border-t border-[var(--border-color)] pt-4">
                  <h4 className="font-bold text-lg text-[var(--text-primary)]">{testimonial.author}</h4>
                  <p className="text-sm text-[var(--text-secondary)]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500/20 to-red-500/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={img10} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-[var(--text-primary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Create Something <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">Beautiful?</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-12 max-w-2xl mx-auto text-[var(--text-secondary)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Let's discuss your vision and how we can bring it to life through stunning photography.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get in Touch
              <FiArrowRight className="animate-pulse" />
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-transparent border-2 border-[var(--text-primary)] text-[var(--text-primary)] font-bold rounded-full hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300"
            >
              View Full Portfolio
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;