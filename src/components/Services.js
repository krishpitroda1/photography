import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import pr1 from "../assets/pr1.jpg"
import pr2 from "../assets/pr2.jpg"
import pr3 from "../assets/pr3.jpg"
import pr4 from "../assets/pr4.jpg"
import f1 from "../assets/f22.jpg"
import f2 from "../assets/f18.jpg"
import f3 from "../assets/f34e.jpg"
import f4 from "../assets/f65e.jpg";
import j1 from "../assets/j1.jpg";
import j2 from "../assets/j2.jpg";
import j3 from "../assets/j3e.jpg";
import j4 from "../assets/j5e.jpg";

// Floating background elements component
const FloatingElements = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y4 = useTransform(scrollY, [0, 1000], [0, 250]);

  return (
    <>
      <motion.div
        style={{ y: y1 }}
        className="fixed top-32 left-16 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0"
      />
      <motion.div
        style={{ y: y2 }}
        className="fixed top-48 right-24 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none z-0"
      />
      <motion.div
        style={{ y: y3 }}
        className="fixed bottom-48 left-24 w-48 h-48 bg-gradient-to-br from-green-400/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none z-0"
      />
      <motion.div
        style={{ y: y4 }}
        className="fixed bottom-32 right-16 w-36 h-36 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-full blur-3xl pointer-events-none z-0"
      />
    </>
  );
};

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const serviceImages = {
    product: [pr1, pr2, pr3, pr4],
    fashion: [f3, f2, f1, f4],
    advertising: [j1, j2, j3, j4],
    campaign: [pr1, pr2, pr3, pr4],
    creative: [f1, f2, f3, f4],
    post: [j1, j2, j3, j4],
    social: [pr1, pr2, pr3, pr4],
    interior: [f1, f2, f3, f4]
  };

  const services = [
    {
      title: "Product Photography",
      description: "Showcase your products in the best light with high-quality, detail-focused photography that enhances appeal and drives sales. Our studio lighting and professional equipment ensure every product looks its absolute best.",
      emoji: "📸",
      images: serviceImages.product,
      color: "blue",
      features: ["Studio Lighting", "Detail Focus", "E-commerce Ready", "Professional Editing"]
    },
    {
      title: "Fashion & Lifestyle Photography",
      description: "From high-fashion editorials to everyday lifestyle shoots, we capture style, attitude, and elegance with precision. Every shot tells a story and showcases personality in its most authentic form.",
      emoji: "👗",
      images: serviceImages.fashion,
      color: "pink",
      features: ["Editorial Style", "Lifestyle Focus", "Fashion Forward", "Trend Setting"]
    },
    {
      title: "Advertising Campaigns",
      description: "Create powerful, attention-grabbing visuals that align with your brand's marketing strategy and captivate your audience. We transform concepts into compelling visual narratives that drive results.",
      emoji: "🎯",
      images: serviceImages.advertising,
      color: "yellow",
      features: ["Brand Alignment", "Attention Grabbing", "Strategic Focus", "Results Driven"]
    },
    {
      title: "Campaign Production",
      description: "We handle everything from conceptualization to execution, ensuring your brand campaigns stand out. Our end-to-end approach guarantees consistency and impact across all touchpoints.",
      emoji: "🎬",
      images: serviceImages.campaign,
      color: "purple",
      features: ["Full Service", "Concept to Completion", "Brand Consistency", "Maximum Impact"]
    },
    {
      title: "Creative Conceptualization",
      description: "Need a fresh, unique approach? We develop creative ideas that translate into stunning, unforgettable imagery. Our innovative thinking pushes boundaries and creates memorable visual experiences.",
      emoji: "🎨",
      images: serviceImages.creative,
      color: "indigo",
      features: ["Innovative Ideas", "Unique Concepts", "Boundary Pushing", "Memorable Results"]
    },
    {
      title: "Post-Production",
      description: "Professional editing and retouching to ensure every image meets the highest standards of quality and impact. We perfect every detail to deliver images that exceed expectations.",
      emoji: "🖥",
      images: serviceImages.post,
      color: "green",
      features: ["Professional Editing", "Quality Assurance", "Detail Focus", "Exceeds Expectations"]
    },
  ];

  const getColorScheme = (color) => {
    const schemes = {
      blue: {
        primary: 'from-blue-500 to-cyan-500',
        secondary: 'from-blue-400 to-cyan-400',
        accent: 'from-blue-600 to-cyan-600',
        light: 'from-blue-100 to-cyan-100',
        border: 'border-blue-500/30',
        text: 'text-blue-600'
      },
      pink: {
        primary: 'from-pink-500 to-purple-500',
        secondary: 'from-pink-400 to-purple-400',
        accent: 'from-pink-600 to-purple-600',
        light: 'from-pink-100 to-purple-100',
        border: 'border-pink-500/30',
        text: 'text-pink-600'
      },
      yellow: {
        primary: 'from-yellow-500 to-orange-500',
        secondary: 'from-yellow-400 to-orange-400',
        accent: 'from-yellow-600 to-orange-600',
        light: 'from-yellow-100 to-orange-100',
        border: 'border-yellow-500/30',
        text: 'text-yellow-600'
      },
      purple: {
        primary: 'from-purple-500 to-indigo-500',
        secondary: 'from-purple-400 to-indigo-400',
        accent: 'from-purple-600 to-indigo-600',
        light: 'from-purple-100 to-indigo-100',
        border: 'border-purple-500/30',
        text: 'text-purple-600'
      },
      indigo: {
        primary: 'from-indigo-500 to-blue-500',
        secondary: 'from-indigo-400 to-blue-400',
        accent: 'from-indigo-600 to-blue-600',
        light: 'from-indigo-100 to-blue-100',
        border: 'border-indigo-500/30',
        text: 'text-indigo-600'
      },
      green: {
        primary: 'from-green-500 to-emerald-500',
        secondary: 'from-green-400 to-emerald-400',
        accent: 'from-green-600 to-emerald-600',
        light: 'from-green-100 to-emerald-100',
        border: 'border-green-500/30',
        text: 'text-green-600'
      }
    };
    return schemes[color] || schemes.blue;
  };

  // Parallax background effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div ref={containerRef} className='pt-10 relative overflow-hidden'>
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-20 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,119,198,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,119,198,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,255,198,0.15),transparent_50%)]" />
      </motion.div>

      <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto relative z-10" id="services">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-6xl">✨</span>
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Professional photography services that transform your vision into stunning visual stories
          </motion.p>
        </motion.div>

        {services.map((service, index) => {
          const colorScheme = getColorScheme(service.color);
          return (
            <motion.div 
              key={index} 
              className="mb-40"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${colorScheme.light} border border-white/50 shadow-2xl backdrop-blur-sm`}>
                <motion.div
                  className="flex flex-col lg:flex-row gap-12 items-center"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? '' : 'lg:order-last'}`}>
                    <motion.div
                      className="mb-6"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      <span className="text-5xl">{service.emoji}</span>
                    </motion.div>
                    
                    <motion.h3 
                      className={`text-4xl font-bold mb-6 ${colorScheme.text}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-lg text-gray-700 mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Features Grid */}
                    <motion.div 
                      className="grid grid-cols-2 gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorScheme.primary}`} />
                          <span className="text-sm font-medium text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                  
                  <div className="lg:w-1/2 relative h-96 w-full">
                    {service.images.length > 0 && (
                      <>
                        {/* Enhanced decorative borders with images */}
                        <motion.div 
                          className={`absolute top-0 left-0 w-3/4 h-3/4 border-2 ${colorScheme.border} rounded-2xl z-10 overflow-hidden`}
                          initial={{ rotate: 0, scale: 0.8 }}
                          whileInView={{ rotate: 3, scale: 1 }}
                          transition={{ duration: 0.8, type: "spring" }}
                          viewport={{ once: true }}
                        >
                          <img 
                            src={service.images[1] || service.images[0]} 
                            className="w-full h-full object-cover opacity-60"
                            alt={`${service.title} background`}
                          />
                        </motion.div>
                        <motion.div 
                          className={`absolute bottom-0 right-0 w-3/4 h-3/4 border-2 ${colorScheme.border} rounded-2xl overflow-hidden`}
                          initial={{ rotate: 0, scale: 0.8 }}
                          whileInView={{ rotate: -3, scale: 1 }}
                          transition={{ duration: 0.8, type: "spring" }}
                          viewport={{ once: true }}
                        >
                          <img 
                            src={service.images[2] || service.images[0]} 
                            className="w-full h-full object-cover opacity-60"
                            alt={`${service.title} background`}
                          />
                        </motion.div>
                        
                        {/* Main image with enhanced styling */}
                        <motion.img 
                          src={service.images[0]} 
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 object-cover rounded-2xl shadow-2xl z-20 border-4 border-white" 
                          alt={service.title}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, rotate: 1 }}
                        />
                      </>
                    )}
                  </div>
                </motion.div>
                
                {/* Enhanced image gallery */}
                {service.images.length > 1 && (
                  <motion.div 
                    className={`grid ${service.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-3'} gap-6 mt-12`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {service.images.slice(1).map((img, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        className="relative rounded-2xl overflow-hidden h-56 group cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + imgIndex * 0.1 }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setHoveredIndex(`${index}-${imgIndex}`)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="w-full h-full relative">
                          <img 
                            src={img} 
                            className="absolute w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                            alt={`${service.title} ${imgIndex + 2}`} 
                            loading="lazy"
                          />
                          
                          {/* Enhanced overlay */}
                          <motion.div 
                            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center transition-all duration-500 ${hoveredIndex === `${index}-${imgIndex}` ? 'opacity-100' : 'opacity-0'}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredIndex === `${index}-${imgIndex}` ? 1 : 0 }}
                          >
                            <motion.div
                              className="text-center"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: hoveredIndex === `${index}-${imgIndex}` ? 0 : 20, opacity: hoveredIndex === `${index}-${imgIndex}` ? 1 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                              <p className="text-sm text-gray-200">View Details</p>
                            </motion.div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's discuss your project and create something amazing together
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-2xl text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-purple-500 text-purple-600 font-bold rounded-2xl text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Services