import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './LensPage.css';

const ColorPalette = {
  primary: '#1a1a1a',
  secondary: '#f5f5f5',
  accent: '#ff5e5b',
  dark: '#0d0d0d',
  light: '#ffffff'
};

const Lens = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const backgroundPos = useTransform(scrollYProgress, [0, 1], ['0% 0%', '100% 100%']);

  const years = [
    { id: 1, year: '2013', title: 'The Beginning', content: "Rushank Agrawal's journey into photography began over a decade ago, turning a deep interest into a professional pursuit. What started with a camera and curiosity quickly turned into a vision." },
    { id: 2, year: '2015-2017', title: 'New York Film Academy', content: 'Rushank sharpened his skills at the prestigious New York Film Academy, earning a Bachelor of Fine Arts (BFA) in Photography. The experience brought both technical excellence and global exposure.' },
    { id: 3, year: '2016', title: 'Los Angeles, California', content: 'During his time in LA, Rushank had the opportunity to collaborate on professional shoots—including with Hollywood/TV actor.' },
    { id: 4, year: '2013-Present', title: 'Rushank Agrawal Fotografia', content: 'Over the past 12+ years, Rushank has built Rushank Agrawal Fotografia, now known for its soulful, naturalistic photography—especially in the candid wedding and pre-wedding space. With over 7,000 followers on Instagram and growing, his work continues to speak for itself.' },
  ];

  return (
    <div className="lens-container" ref={containerRef}>
      {/* Hero Section */}
      <motion.section className="hero-section" style={{ backgroundPosition: backgroundPos }}>
        <div className="hero-gradient"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1 initial={{ letterSpacing: '10px' }} animate={{ letterSpacing: '2px' }} transition={{ delay: 0.5, duration: 1.5 }}>
            LENS
          </motion.h1>
          <motion.div className="hero-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.5 }}>
            <span>Seeing the unseen</span>
            <div className="line"></div>
            <span>Freezing time</span>
            <div className="line"></div>
            <span>Capturing truth</span>
          </motion.div>
        </motion.div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.section>

      {/* Philosophy Section - Clean Modern Style */}
      <motion.section
        className="w-full px-6 md:px-20 py-24 bg-black text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Photography With <span className="text-red-500">Intent</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            At Lens, photography isn’t just about clicking the shutter—it’s about seeing the unseen,
            capturing fleeting emotions, and freezing time in its most authentic form. What began as
            a simple love for the craft has evolved into a full-fledged passion project driven by
            an eye for detail and a heart for stories.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg">
            Every frame here is a result of curiosity, creativity, and deep connection with the subject.
            Whether it’s the warmth of a candid smile, the chaos of a city street, or the stillness
            of a landscape—each image is a piece of something real.
          </p>
          <p className="text-gray-500 leading-relaxed text-lg">
            This portfolio is not just a display of images; it's a reflection of years of learning,
            unlearning, and evolving as an artist. Welcome to our world—where we shoot with soul and see with intent.
          </p>
        </div>
      </motion.section>

      {/* Journey Section */}
      <section className="py-20 px-4 md:px-20 relative bg-gradient-to-b from-neutral-900 via-black to-neutral-950">
        <h2 className="text-4xl text-white font-bold text-center mb-16 tracking-wide">
          The <span className="text-red-500">Journey</span>
        </h2>
        <div className="relative border-l-2 border-gray-700 pl-8 space-y-12">
          {years.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-4 top-1.5 w-3.5 h-3.5 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
              <div className="bg-neutral-800 p-6 rounded-xl shadow-xl hover:shadow-red-500/20 transition-all duration-300">
                <div className="text-lg text-red-400 font-semibold">{item.year}</div>
                <div className="text-xl text-white font-bold mb-2">{item.title}</div>
                <p className="text-sm text-gray-300 leading-relaxed">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lens;