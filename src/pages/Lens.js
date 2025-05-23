import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import photographyImage from '../assets/lens1.jpg';
import vid1 from "../assets/lens1.mp4";
import vid2 from "../assets/len2.mp4";
import './LensPage.css';

const Lens = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const backgroundPos = useTransform(scrollYProgress, [0, 1], ['0% 0%', '100% 100%']);

  const years = [
    { id: 4, year: '2013', title: 'The Beginning', content: "Rushank Agrawal's journey into photography began over a decade ago, turning a deep interest into a professional pursuit. What started with a camera and curiosity quickly turned into a vision." },
    { id: 2, year: '2015-2018', title: 'New York Film Academy LA', content: 'Rushank sharpened his skills at the prestigious New York Film Academy, earning a Bachelor of Fine Arts (BFA) in Photography. The experience brought both technical excellence and global exposure.' },
    { id: 3, year: '2018-2019', title: 'New York', content: 'During his time in LA, Rushank had the opportunity to collaborate on professional shoots—including with Bollywood/TV actor.' },
    { id: 1, year: '2013-Present', title: 'Rushank Agrawal Fotografia', content: 'Over the past 12+ years, Rushank has built Rushank Agrawal Fotografia, now known for its soulful, naturalistic photography.' },
  ];

  const handleVideoHover = (videoRef, isHovering) => {
    if (videoRef.current) {
      if (isHovering) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className={`lens-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} ref={containerRef}>
      {/* Hero Section */}
      <motion.section 
        className={`hero-section ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'}`} 
        style={{ backgroundPosition: backgroundPos }}
      >
        <div className={`hero-gradient ${theme === 'dark' ? 'from-black/90' : 'from-white/90'}`}></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1 
            className={theme === 'dark' ? 'text-white' : 'text-gray-900'}
            initial={{ letterSpacing: '10px' }} 
            animate={{ letterSpacing: '2px' }} 
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            LENS
          </motion.h1>
          <motion.div 
            className="hero-subtitle" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1.5 }}
          >
            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Seeing the unseen</span>
            <div className={`line ${theme === 'dark' ? 'bg-white' : 'bg-gray-800'}`}></div>
            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Freezing time</span>
            <div className={`line ${theme === 'dark' ? 'bg-white' : 'bg-gray-800'}`}></div>
            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Capturing truth</span>
          </motion.div>
        </motion.div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`particle ${theme === 'dark' ? 'bg-white' : 'bg-gray-800'}`}
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

      {/* First Video Section - Showreel */}
      <section className={`relative w-full h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'} overflow-hidden`}>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/50' : 'bg-white/30'} z-10 flex items-center justify-center`}>
          <div className="text-center px-6 max-w-4xl">
            <h2 className={`text-4xl md:text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-6`}>
              Through The <span className="text-red-500">Lens</span>
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              A cinematic journey through moments frozen in time
            </p>
          </div>
        </div>
        <video
          ref={videoRef1}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onMouseEnter={() => handleVideoHover(videoRef1, true)}
          onMouseLeave={() => handleVideoHover(videoRef1, false)}
        >
          <source src={vid1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Philosophy Section */}
      <motion.section
        className={`w-full px-6 md:px-20 py-24 ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Photography With <span className="text-red-500">Intent</span>
          </h2>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-lg`}>
            At Lens, photography isn't just about clicking the shutter—it's about seeing the unseen,
            capturing fleeting emotions, and freezing time in its most authentic form.
          </p>
        </div>
      </motion.section>

      {/* Photography Showcase Section */}
      <section className={`relative w-full min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'} flex items-center justify-center p-6`}>
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={photographyImage} 
            alt="Signature Photography" 
            className={`w-full h-full object-cover ${theme === 'dark' ? 'opacity-30' : 'opacity-20'} blur-sm`}
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <h2 className="text-4xl md:text-5xl font-bold">
              The <span className="text-red-500">Art</span> of Seeing
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
              Each photograph is a testament to the beauty found in raw, unfiltered moments.
            </p>
            <button className="px-8 py-3 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 transition-all duration-300">
              View Portfolio
            </button>
          </div>
          <div className="relative group">
            <div className={`absolute -inset-2 ${theme === 'dark' ? 'bg-red-500/30' : 'bg-red-500/20'} rounded-xl blur-lg group-hover:opacity-75 transition-all duration-300`}></div>
            <img 
              src={photographyImage} 
              alt="Signature Photography" 
              className="relative rounded-lg shadow-2xl w-full h-auto max-h-[80vh] object-cover z-10"
            />
          </div>
        </div>
      </section>

      {/* Second Video Section - Behind the Scenes */}
      <section className={`relative w-full h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'} overflow-hidden`}>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/50' : 'bg-white/30'} z-10 flex items-center justify-center`}>
          <div className="text-center px-6 max-w-4xl">
            <h2 className={`text-4xl md:text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-6`}>
              Behind The <span className="text-red-500">Scenes</span>
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              Discover the process behind creating timeless imagery
            </p>
          </div>
        </div>
        <video
          ref={videoRef2}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onMouseEnter={() => handleVideoHover(videoRef2, true)}
          onMouseLeave={() => handleVideoHover(videoRef2, false)}
        >
          <source src={vid2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Journey Section */}
      <section className={`py-20 px-4 md:px-20 relative ${theme === 'dark' ? 'bg-gradient-to-b from-neutral-900 via-black to-neutral-950' : 'bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100'}`}>
        <h2 className={`text-4xl font-bold text-center mb-16 tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          The <span className="text-red-500">Journey</span>
        </h2>
        <div className={`relative border-l-2 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} pl-8 space-y-12`}>
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
              <div className={`${theme === 'dark' ? 'bg-neutral-800' : 'bg-white'} p-6 rounded-xl shadow-xl hover:shadow-red-500/20 transition-all duration-300`}>
                <div className="text-lg text-red-400 font-semibold">{item.year}</div>
                <div className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-bold mb-2`}>{item.title}</div>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lens;