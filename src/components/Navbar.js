import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import img from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  // Define your page routes mapping
  const pageRoutes = {
    'Portfolio': '/portfolio',
    'The Lens': '/lens',
    'Clients & Stories': '/clients',
  };

  // Services dropdown items
  const servicesItems = {
    'Jewellery': '/jewellery',
    'Products': '/products',
    'Person': '/people',
    'Wedding': '/wedding',
    'Fashion': '/Fashion',
    'Wildlife': '/wildlife'
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-transpernt' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className={`hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] h-4 rounded-b-full blur-sm`}></div>
        
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
          <div className="hidden md:flex items-center gap-1">
            <ul className="flex items-center">
              {Object.entries(pageRoutes).map(([item, route]) => (
                <motion.li 
                  key={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3"
                >
                  <Link 
                    to={route} 
                    className={`text-white hover:text-amber-400 py-2 font-medium transition-colors ${scrolled ? 'border-b-2 border-transparent hover:border-amber-400' : 'border-b-2 border-transparent hover:border-amber-400'}`}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
              
              {/* Services Dropdown */}
              <motion.li 
                className="relative px-3"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link to="/Services">
                  <motion.div
                    className="flex items-center text-white hover:text-amber-400 py-2 font-medium cursor-pointer transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Services
                  </motion.div>
                </Link>
              </motion.li>
            </ul>

            {/* Book Your Shoot Button */}
            <motion.div
              className="ml-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/book-your-shoot" 
                className="px-6 py-2 bg-amber-400 text-neutral-900 font-medium rounded-full hover:bg-amber-500 transition-colors whitespace-nowrap"
              >
                Book Your Shoot
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden w-12 h-12 bg-neutral-900/50 rounded-md flex items-center justify-center text-white z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-neutral-950/95 backdrop-blur-lg pt-24 px-4 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center space-y-6 h-full overflow-y-auto pb-12">
              {Object.entries(pageRoutes).map(([item, route], index) => (
                <motion.div
                  key={item}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="w-full text-center"
                >
                  <Link 
                    to={route} 
                    className="text-2xl font-medium text-neutral-300 hover:text-amber-400 transition-colors block py-2"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Services Dropdown */}
              <motion.div
                className="w-full text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: Object.keys(pageRoutes).length * 0.1 }}
              >
                <div 
                  className="flex items-center justify-center text-2xl font-medium text-neutral-300 hover:text-amber-400 cursor-pointer py-2"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <FaChevronDown className={`ml-2 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </div>
                
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      className="mt-2 flex flex-col items-center space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {Object.entries(servicesItems).map(([service, route]) => (
                        <motion.div
                          key={service}
                          initial={{ x: -20 }}
                          animate={{ x: 0 }}
                          className="w-full"
                        >
                          <Link 
                            to={route} 
                            className="text-xl text-neutral-400 hover:text-amber-400 transition-colors block py-2"
                            onClick={closeMenu}
                          >
                            {service}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mobile Book Your Shoot Button */}
              <motion.div
                className="w-full pt-2 text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: (Object.keys(pageRoutes).length + 1) * 0.1 }}
              >
                <Link 
                  to="/book-your-shoot" 
                  className="inline-block px-8 py-3 bg-amber-400 text-neutral-900 font-medium rounded-full hover:bg-amber-500 transition-colors text-xl"
                  onClick={closeMenu}
                >
                  Book Your Shoot
                </Link>
              </motion.div>
              
              {/* Mobile Social Icons */}
              <motion.div 
                className="flex space-x-6 mt-8 justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: (Object.keys(pageRoutes).length + 2) * 0.1 }}
              >
                {[<FiInstagram />, <FiTwitter />, <FiFacebook />].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-14 h-14 rounded-full bg-neutral-900/50 flex items-center justify-center text-neutral-300 hover:text-amber-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: (Object.keys(pageRoutes).length + 2 + index * 0.1) * 0.1 }}
                  >
                    {Icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;