import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiInstagram, FiTwitter, FiFacebook, FiArrowRight } from "react-icons/fi";
import { FaCamera, FaLightbulb, FaPalette, FaQuoteLeft } from "react-icons/fa";

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

const selectedHeroImages = [img5, img6, img11];
const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const gridItems = [
  { image: img1, title: "Weddings", color: "from-pink-500/20 to-purple-600/20" },
  { image: img2, title: "Fashion", color: "from-blue-500/20 to-teal-600/20" },
  { image: img3, title: "Portraits", color: "from-amber-500/20 to-red-600/20" },
  { image: img4, title: "Nature", color: "from-green-500/20 to-emerald-600/20" },
  { image: img5, title: "Architecture", color: "from-gray-500/20 to-slate-600/20" },
  { image: img6, title: "Events", color: "from-yellow-500/20 to-orange-600/20" },
];

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
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <div className="text-white overflow-hidden relative w-full bg-black">
      {/* Floating Navigation */}
   

      

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
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
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
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300"
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
              className={`w-3 h-3 rounded-full transition-all ${currentHeroImage === index ? 'bg-amber-500 w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 bg-gradient-to-b from-black to-gray-900 text-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
                About My Vision
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Photography is more than just capturing moments—it's about preserving emotions, telling stories, and creating art that stands the test of time. With over a decade of experience, I specialize in turning fleeting seconds into eternal memories.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              My approach combines technical precision with artistic intuition, ensuring each photograph is not just seen but felt. Whether it's the joy of a wedding, the energy of a fashion show, or the intimacy of a portrait session, I strive to reveal the authentic beauty in every frame.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <FaCamera className="text-2xl" />, text: "10+ Years Experience" },
                { icon: <FaLightbulb className="text-2xl" />, text: "Creative Vision" },
                { icon: <FaPalette className="text-2xl" />, text: "Artistic Approach" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
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
                src={img7} 
                alt="Photographer" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-red-500 p-1 rounded-2xl"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-black p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
                  My Philosophy
                </h3>
                <p className="text-sm">
                  "Light, emotion, composition—when these elements harmonize, magic happens."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-black px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
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
            {gridItems.map((item, index) => (
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
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-70' : 'opacity-30'}`}></div>
             
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
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
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
              className="text-xl md:text-2xl text-white/80 mb-8"
            >
              Each image is a chapter in someone's story. Scroll to explore my visual narratives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vertical Showcase */}
      <section className="py-20 px-4 bg-black">
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
      <section id="testimonials" className="py-28 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-20"
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
                className="bg-gradient-to-b from-white/5 to-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <FaQuoteLeft className="text-amber-400 text-3xl mb-6 opacity-70" />
                <p className="text-lg italic mb-6">"{testimonial.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
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
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Create Something <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">Beautiful?</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-12 max-w-2xl mx-auto"
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
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              View Full Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default Home;