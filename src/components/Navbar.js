import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import img from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/90 backdrop-blur-sm' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className={`hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] h-4 bg-gradient-to-r from-amber-400/20 via-amber-600/10 to-amber-400/20 rounded-b-full blur-sm`}></div>
        
        <div className={`flex justify-between items-center py-3 lg:py-4 lg:px-6 lg:mx-4 lg:mt-2 ${scrolled ? 'lg:bg-neutral-900/70 lg:backdrop-blur-md lg:rounded-full lg:border lg:border-amber-400/20' : 'lg:bg-neutral-900/30 lg:backdrop-blur-sm lg:rounded-full lg:border lg:border-amber-400/10'}`}>
          {/* Logo with white background */}
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <div className="p-2 rounded-md bg-white/90 backdrop-blur-sm">
              <img 
                src={img} 
                alt="Logo" 
                className="h-10 object-contain filter brightness-0" 
                style={{ minWidth: '120px' }}
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {['People', 'Jewellery', 'Products', 'Contact'].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={`/${item.toLowerCase()}`} 
                  className={`text-white hover:text-amber-400 px-4 py-2 font-medium transition-colors ${scrolled ? 'border-b-2 border-transparent hover:border-amber-400' : 'border-b-2 border-transparent hover:border-amber-400'}`}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
            
            {/* Social Icons */}
            <div className="flex space-x-4 ml-6">
              {[<FiInstagram />, <FiTwitter />, <FiFacebook />].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full ${scrolled ? 'bg-neutral-800/70' : 'bg-neutral-900/50'} flex items-center justify-center text-white hover:text-amber-400 transition-all`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {Icon}
                </motion.a>
              ))}
            </div>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden w-12 h-12 bg-neutral-900/50 rounded-md flex items-center justify-center text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div 
          className="md:hidden fixed inset-0 bg-neutral-950/95 backdrop-blur-lg pt-24 px-4 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-4 w-12 h-12 bg-neutral-900 rounded-md flex items-center justify-center text-white"
            onClick={closeMenu}
          >
            <FaTimes />
          </button>
          
          <div className="flex flex-col items-center space-y-8">
            {['People', 'Jewellery', 'Products', 'Contact'].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={`/${item.toLowerCase()}`} 
                  className="text-2xl font-medium text-neutral-300 hover:text-amber-400 transition-colors"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            
            {/* Mobile Social Icons */}
            <div className="flex space-x-6 mt-12">
              {[<FiInstagram />, <FiTwitter />, <FiFacebook />].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-14 h-14 rounded-full bg-neutral-900/50 flex items-center justify-center text-neutral-300 hover:text-amber-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {Icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;