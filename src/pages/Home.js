import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { FaCamera, FaLightbulb, FaPalette } from "react-icons/fa";

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

const selectedHeroImages = [img2, img3, img4];
const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const gridItems = [
  { image: img1, title: "Weddings" },
  { image: img2, title: "Fashion" },
  { image: img3, title: "Portraits" },
  { image: img4, title: "Nature" },
  { image: img5, title: "Architecture" },
  { image: img6, title: "Events" },
];

const testimonials = [
  {
    text: "An unforgettable photography experience! Truly professional and creative.",
    author: "Arjun Mehta",
  },
  {
    text: "Every shot tells a story. Outstanding work and vision.",
    author: "Priya Sharma",
  },
  {
    text: "Captured moments I didn’t even know I needed. Highly recommend!",
    author: "Ravi Verma",
  },
];

const Home = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % selectedHeroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offset = targetElement.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offset, behavior: "smooth" });
          if (window.history.pushState) {
            window.history.pushState(null, null, targetId);
          } else {
            window.location.hash = targetId;
          }
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="text-white overflow-hidden relative w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <img
          src={selectedHeroImages[currentHeroImage]}
          alt="Hero"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            Capturing Moments, Creating Stories
          </motion.h1>
          <TypeAnimation
            sequence={["Weddings", 1000, "Fashion", 1000, "Portraits", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2rem", display: "inline-block", color: "#fff" }}
            repeat={Infinity}
          />
          <Link
            to="/contact"
            className="mt-6 inline-block px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Book a Session
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black text-white text-center px-4">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          With a passion for storytelling through the lens, I specialize in capturing the essence of every moment — from grand weddings to intimate portraits. My mission is to turn fleeting seconds into timeless memories.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-100 text-black" id="portfolio">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">{item.title}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vertical Showcase */}
      <section className="py-20 px-4 bg-black">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Visual Storytelling</h2>
        <div className="flex flex-col items-center gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full md:w-2/3 lg:w-1/2"
            >
              <img src={image} alt={`Gallery ${index + 1}`} className="rounded-2xl shadow-lg" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-100 text-black">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <p className="italic text-lg mb-4">"{testimonial.text}"</p>
              <h4 className="font-semibold text-right">- {testimonial.author}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-8">
        <div className="mb-4 flex justify-center gap-6 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FiInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FiTwitter /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FiFacebook /></a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} YourPhotographyName. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
