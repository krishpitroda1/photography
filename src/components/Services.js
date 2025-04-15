import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';
import pr1 from "../assets/f34.jpg"
import pr2 from "../assets/f34.jpg"
import pr3 from "../assets/f34.jpg"
import pr4 from "../assets/j2.jpg"
import f1 from "../assets/j2.jpg"
import f2 from "../assets/f18.jpg"
import f3 from "../assets/f34.jpg"
import f4 from "../assets/f65.jpg";
import j1 from "../assets/j1.jpg";
import j2 from "../assets/j2.jpg";
import j3 from "../assets/j3.jpg";
import j4 from "../assets/j4.jpg";

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const serviceImages = {
    product: [pr1, pr2, pr3,pr4],
    fashion: [f1,f2,f3,f4],
    advertising: [j1, j2, j3,j4],
    campaign: [pr1, pr2, pr3,pr4],
    creative: [f1, f2, f3,f4],
    post: [j1, j2, j3,j4],
    social: [pr1, pr2, pr3,pr4],
    interior: [f1, f2, f3,f4]
  };
  const services = [
    {
      title: "Product Photography",
      description: "Showcase your products in the best light with high-quality, detail-focused photography that enhances appeal and drives sales.",
      emoji: "📸",
      images: serviceImages.product,
      color: "blue"
    },
    {
      title: "Fashion & Lifestyle Photography",
      description: "From high-fashion editorials to everyday lifestyle shoots, we capture style, attitude, and elegance with precision.",
      emoji: "👗",
      images: serviceImages.fashion,
      color: "pink"
    },
    {
      title: "Advertising Campaigns",
      description: "Create powerful, attention-grabbing visuals that align with your brand's marketing strategy and captivate your audience.",
      emoji: "🎯",
      images: serviceImages.advertising,
      color: "yellow"
    },
    {
      title: "Campaign Production",
      description: "We handle everything from conceptualization to execution, ensuring your brand campaigns stand out.",
      emoji: "🎬",
      images: serviceImages.campaign,
      color: "purple"
    },
    {
      title: "Creative Conceptualization",
      description: "Need a fresh, unique approach? We develop creative ideas that translate into stunning, unforgettable imagery.",
      emoji: "🎨",
      images: serviceImages.creative,
      color: "indigo"
    },
    {
      title: "Post-Production",
      description: "Professional editing and retouching to ensure every image meets the highest standards of quality and impact.",
      emoji: "🖥",
      images: serviceImages.post,
      color: "green"
    },
    {
      title: "Social Media Content Creation",
      description: "Tailored content that enhances your brand's online presence, designed for maximum engagement and visual appeal.",
      emoji: "📱",
      images: serviceImages.social,
      color: "red"
    },
    {
      title: "Interior & Architecture Photography",
      description: "Capturing spaces with depth, symmetry, and stunning detail, highlighting the beauty of architectural and interior designs.",
      emoji: "🏛",
      images: serviceImages.interior,
      color: "amber"
    }
  ];
  const getBorderColor = (color) => {
    const colors = {
      blue: ['border-blue-500/30', 'border-cyan-500/30'],
      pink: ['border-pink-500/30', 'border-purple-500/30'],
      yellow: ['border-yellow-500/30', 'border-orange-500/30'],
      purple: ['border-purple-500/30', 'border-indigo-500/30'],
      indigo: ['border-indigo-500/30', 'border-blue-500/30'],
      green: ['border-green-500/30', 'border-emerald-500/30'],
      red: ['border-red-500/30', 'border-pink-500/30'],
      amber: ['border-amber-500/30', 'border-yellow-500/30']
    };
    return colors[color] || colors.blue;
  };
  return (
    <div className='pt-10'>
   <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto" id="services">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        What We Offer
      </motion.h2>

      {services.map((service, index) => (
        <div key={index} className="mb-32">
          <motion.div
            className="flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`md:w-1/2 ${index % 2 === 0 ? '' : 'md:order-last'}`}>
              <h3 className="text-3xl font-bold mb-4">
                <span className="mr-2">{service.emoji}</span>
                {service.title}
              </h3>
              <p className="text-lg mb-6">{service.description}</p>
            </div>
            
            <div className="md:w-1/2 relative h-80 w-full">
              {service.images.length > 0 && (
                <>
                  <div className={`absolute top-0 left-0 w-3/4 h-3/4 border-2 ${getBorderColor(service.color)[0]} rounded-lg z-10 transform rotate-3`}></div>
                  <div className={`absolute bottom-0 right-0 w-3/4 h-3/4 border-2 ${getBorderColor(service.color)[1]} rounded-lg transform -rotate-3`}></div>
                  <img 
                    src={service.images[0]} 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 object-cover rounded-lg shadow-2xl z-20" 
                    alt={service.title} 
                  />
                </>
              )}
            </div>
          </motion.div>
          
          {service.images.length > 1 && (
            <div className={`grid ${service.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'} gap-4 mt-8`}>
              {service.images.slice(1).map((img, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  className="relative rounded-xl overflow-hidden h-48 group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (imgIndex + 1) * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredIndex(`${index}-${imgIndex}`)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="w-full h-full relative">
                    <img 
                      src={img} 
                      className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      alt={`${service.title} ${imgIndex + 2}`} 
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 ${hoveredIndex === `${index}-${imgIndex}` ? 'opacity-100' : 'opacity-0'}`}>
                      <motion.h3 
                        className="text-xl font-bold text-white text-center px-2"
                        initial={{ y: 20 }}
                        animate={{ y: hoveredIndex === `${index}-${imgIndex}` ? 0 : 20 }}
                      >
                        {service.title}
                      </motion.h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
    </div>
  )
}

export default Services