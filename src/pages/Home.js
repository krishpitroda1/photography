// import React from "react";
// import img1 from "../assets/1.jpg";
// import img2 from "../assets/2.jpg";
// import img3 from "../assets/3.jpg";
// import img4 from "../assets/4.jpg";
// import img5 from "../assets/5.jpg";
// import img6 from "../assets/6.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import { Link } from "react-router-dom";
// import "swiper/css/pagination";
// const testimonials = [
//   {
//     name: "Rahul Sharma",
//     text: "Absolutely loved the experience! The photos were stunning.",
//     image: "http://localhost:3000/static/media/1.f87c31bbe07419d941ef.jpg",
//   },
//   {
//     name: "Ananya Patel",
//     text: "Professional and creative! Highly recommend.",
//     image: "http://localhost:3000/static/media/1.f87c31bbe07419d941ef.jpg",
//   },
//   {
//     name: "Vikram Singh",
//     text: "Captured every moment perfectly. Truly amazing work!",
//     image: "http://localhost:3000/static/media/1.f87c31bbe07419d941ef.jpg",
//   },
//   {
//     name: "Sonia Verma",
//     text: "The best photographer I’ve worked with. Stunning shots!",
//     image: "http://localhost:3000/static/media/1.f87c31bbe07419d941ef.jpg",
//   },
// ];

// const Home = () => {
//   return (
//     <div className="bg-white">
//       {/* Header Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 py-12">
//         {/* Left - Text */}
//         <div className="md:w-1/2 text-left">
//           <h3 className="text-lg text-gray-500">We are experienced</h3>
//           <h1 className="text-4xl sm:text-5xl font-bold text-black">Photographers</h1>
//         </div>

//         {/* Right - Photo Grid */}
//         <div className="grid grid-cols-3 gap-4 md:w-1/2">
//           <img src={img1} alt="Photography 1" className="rounded-lg object-cover shadow-lg" />
//           <img src={img2} alt="Photography 2" className="rounded-lg object-cover shadow-lg" />
//           <img src={img3} alt="Photography 3" className="rounded-lg object-cover shadow-lg" />
//           <img src={img4} alt="Photography 4" className="rounded-lg object-cover shadow-lg" />
//           <img src={img5} alt="Photography 5" className="rounded-lg object-cover shadow-lg" />
//           <img src={img6} alt="Photography 6" className="rounded-lg object-cover shadow-lg" />
//         </div>
//       </section>

//       <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 px-6 sm:px-12 py-16">
//   {/* Photographer Image */}
//   <img 
//     src={img1} 
//     alt="Photographer" 
//     className="w-60 h-60 rounded-full shadow-lg md:ml-12"
//   />

//   {/* Photographer Info */}
//   <div className="md:w-1/2">
//     <h3 className="text-3xl font-semibold">Meet the Photographer</h3>
//     <p className="mt-4 text-gray-600">
//       Passionate about capturing stunning visuals, I specialize in portraits, weddings, and product photography.
//     </p>
//   </div>
// </section>

// <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
//       <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">What Our Clients Say</h2>
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={1}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         modules={[Autoplay, Pagination]}
//         className="w-11/12 "
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide key={index} className="flex justify-center">
//             <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center  hover:shadow-2xl transition-all duration-300">
//             <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500">
//   <img 
//     src={testimonial.image} 
//     alt={testimonial.name} 
//     className="w-full h-full object-cover object-top"
//   />
// </div>

//               <p className="text-gray-700 italic mt-6 px-6">"{testimonial.text}"</p>
//               <h4 className="mt-4 text-lg font-semibold text-indigo-600">{testimonial.name}</h4>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>      {/* Call to Action */}
//       <section className="py-16 px-6 sm:px-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
//         <h3 className="text-3xl font-bold">Ready to Book a Shoot?</h3>
//         <p className="mt-2">Let’s capture your special moments together.</p>
//         <Link to="/ContactUs">
//         <button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200">
//           Contact Me
//         </button>
     
// import React from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { motion } from "framer-motion";
// import img1 from "../assets/1.jpg";
// import img2 from "../assets/2.jpg";
// import img3 from "../assets/3.jpg";
// import img4 from "../assets/4.jpg";
// import img5 from "../assets/5.jpg";
// import img6 from "../assets/6.jpg";

// const testimonials = [
//   { name: "Rahul Sharma", text: "Absolutely loved the experience!", image: img1 },
//   { name: "Ananya Patel", text: "Professional and creative!", image: img2 },
//   { name: "Vikram Singh", text: "Captured every moment perfectly!", image: img3 },
//   { name: "Sonia Verma", text: "Stunning shots!", image: img4 },
// ];

// const Home = () => {
//   return (
//     <div className="bg-black text-white overflow-hidden">
//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="relative h-screen flex items-center justify-center text-center"
//         style={{ backgroundImage: `url(${img6})`, backgroundSize: "cover" }}
//       >
//         <motion.div
//           className="bg-black bg-opacity-60 p-10 rounded-lg"
//           initial={{ scale: 0.9 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-6xl font-extrabold text-white">Capture the Moment</h1>
//           <p className="text-xl mt-4">Experience Photography Like Never Before</p>
//         </motion.div>
//       </motion.section>

//       {/* Gallery Section */}
//       <motion.section
//         className="grid grid-cols-3 gap-4 p-10"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {[img1, img2, img3, img4, img5, img6].map((img, index) => (
//           <motion.img
//             key={index}
//             src={img}
//             className="rounded-lg object-cover shadow-lg hover:scale-110 transition-transform duration-300"
//           />
//         ))}
//       </motion.section>

//       {/* Testimonials */}
//       <motion.section className="py-16 bg-gray-900">
//         <h2 className="text-4xl font-extrabold text-center mb-10">What Our Clients Say</h2>
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           modules={[Autoplay, Pagination]}
//           className="w-11/12"
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index} className="flex justify-center">
//               <div className="bg-white text-black p-6 rounded-2xl shadow-xl text-center">
//                 <img
//                   src={testimonial.image}
//                   className="w-24 h-24 rounded-full object-cover mx-auto"
//                 />
//                 <p className="mt-6">"{testimonial.text}"</p>
//                 <h4 className="mt-4 text-lg font-semibold text-gray-700">{testimonial.name}</h4>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.section>

//       {/* Call to Action */}
//       <motion.section className="py-16 text-center bg-gradient-to-r from-purple-500 to-pink-500">
//         <h3 className="text-3xl font-bold">Ready to Book a Shoot?</h3>
//         <p className="mt-2">Let’s capture your special moments together.</p>
//         <Link to="/ContactUs">
//           <motion.button
//             className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             Contact Me
//           </motion.button>
//         </Link>
//       </motion.section>
//     </div>
//   );
// };

// export default Home;
// ------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { TypeAnimation } from 'react-type-animation';
// import img1 from "../assets/1.jpg";
// import img2 from "../assets/2.jpg";
// import img3 from "../assets/3.jpg";
// import img4 from "../assets/4.jpg";
// import img5 from "../assets/5.jpg";
// import img6 from "../assets/6.jpg";

// const Home = () => {
//   return (
//     <div className="bg-black text-white overflow-hidden relative">
//       {/* Hero Section */}
//       <motion.section className="relative h-screen flex flex-col items-center justify-center text-center" style={{ backgroundImage: `url(${img6})`, backgroundSize: "cover" }}>
//         <motion.div className="bg-black bg-opacity-60 p-10 rounded-lg" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
//           <TypeAnimation sequence={["Photographers", 1000, "Visual Storytellers", 1000, "Creators of Art", 1000]} wrapper="h1" className="text-6xl font-extrabold text-white" repeat={Infinity} />
//           <p className="text-xl mt-4">Experience Photography Like Never Before</p>
//         </motion.div>
//       </motion.section>

//       {/* Gallery Section with Staggered Animation */}
//       <motion.section className="grid grid-cols-3 gap-4 p-10" initial="hidden" whileInView="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
//         {[img1, img2, img3, img4, img5, img6].map((img, index) => (
//           <motion.img key={index} src={img} className="rounded-lg object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl" whileHover={{ scale: 1.1, boxShadow: "0px 4px 30px rgba(255, 255, 255, 0.2)" }} />
//         ))}
//       </motion.section>

//       {/* Call to Action */}
//       <motion.section className="py-16 text-center bg-gradient-to-r from-purple-500 to-pink-500">
//         <h3 className="text-3xl font-bold">Ready to Book a Shoot?</h3>
//         <p className="mt-2">Let’s capture your special moments together.</p>
//         <Link to="/ContactUs">
//           <motion.button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//             Contact Me
//           </motion.button>
//         </Link>
//       </motion.section>
//     </div>
//   );
// };

// export default Home;


// ------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { TypeAnimation } from 'react-type-animation';
// import img1 from "../assets/1.jpg";
// import img2 from "../assets/2.jpg";
// import img3 from "../assets/3.jpg";
// import img4 from "../assets/4.jpg";
// import img5 from "../assets/5.jpg";
// import img6 from "../assets/6.jpg";

// const Home = () => {
//   return (
//     <div className="bg-black text-white overflow-hidden relative">
//       {/* Hero Section */}
//       <motion.section className="relative h-screen flex flex-col items-center justify-center text-center" style={{ backgroundImage: `url(${img6})`, backgroundSize: "cover" }}>
//         <motion.div className="bg-black bg-opacity-60 p-10 rounded-lg" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
//           <TypeAnimation sequence={["Photographers", 1000, "Visual Storytellers", 1000, "Creators of Art", 1000]} wrapper="h1" className="text-6xl font-extrabold text-white" repeat={Infinity} />
//           <p className="text-xl mt-4">Experience Photography Like Never Before</p>
//         </motion.div>
//       </motion.section>

//       {/* Movie-like Scrolling Gallery */}
//       <motion.section className="flex flex-col items-center gap-8 p-10" initial="hidden" whileInView="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.5 } } }}>
//         {[img1, img2, img3, img4, img5, img6].map((img, index) => (
//           <motion.div key={index} className="relative w-4/5" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
//             <motion.img src={img} className="rounded-lg object-cover shadow-lg w-full" whileHover={{ scale: 1.05, boxShadow: "0px 4px 30px rgba(255, 255, 255, 0.2)" }} />
//           </motion.div>
//         ))}
//       </motion.section>

//       {/* Call to Action */}
//       <motion.section className="py-16 text-center bg-gradient-to-r from-purple-500 to-pink-500">
//         <h3 className="text-3xl font-bold">Ready to Book a Shoot?</h3>
//         <p className="mt-2">Let’s capture your special moments together.</p>
//         <Link to="/ContactUs">
//           <motion.button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//             Contact Me
//           </motion.button>
//         </Link>
//       </motion.section>
//     </div>
//   );
// };

// export default Home;

// ------------------------------------------------------------------------

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { TypeAnimation } from 'react-type-animation';
// import img1 from "../assets/1.jpg";
// import img2 from "../assets/2.jpg";
// import img3 from "../assets/3.jpg";
// import img4 from "../assets/4.jpg";
// import img5 from "../assets/5.jpg";
// import img6 from "../assets/6.jpg";

// const images = [img1, img2, img3, img4, img5, img6];

// const Home = () => {
//   return (
//     <div className="bg-black text-white overflow-hidden relative">
//       {/* Hero Section */}
//       <motion.section className="relative h-screen flex flex-col items-center justify-center text-center" style={{ backgroundImage: `url(${img6})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
//         <motion.div className="bg-black bg-opacity-60 p-10 rounded-lg" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
//           <TypeAnimation sequence={["Photographers", 1000, "Visual Storytellers", 1000, "Creators of Art", 1000]} wrapper="h1" className="text-6xl font-extrabold text-white" repeat={Infinity} />
//           <p className="text-xl mt-4">Experience Photography Like Never Before</p>
//         </motion.div>
//       </motion.section>

//       {/* Vertical Scrolling Gallery with Layered Image-on-Image Effect */}
//       <section className="flex flex-col items-center gap-12 py-16">
//         {images.map((img, index) => (
//           <motion.div
//             key={index}
//             className="relative w-3/4 overflow-hidden rounded-lg"
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             style={{ zIndex: images.length - index }}
//           >
//             <motion.img
//               src={img}
//               className="w-full h-auto rounded-lg shadow-lg object-cover"
//               whileHover={{ scale: 1.05, boxShadow: "0px 10px 40px rgba(255, 255, 255, 0.3)" }}
//             />
//           </motion.div>
//         ))}
//       </section>

//       {/* Call to Action */}
//       <motion.section className="py-16 text-center bg-gradient-to-r from-purple-500 to-pink-500">
//         <h3 className="text-3xl font-bold">Ready to Book a Shoot?</h3>
//         <p className="mt-2">Let’s capture your special moments together.</p>
//         <Link to="/ContactUs">
//           <motion.button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//             Contact Me
//           </motion.button>
//         </Link>
//       </motion.section>
//     </div>
//   );
// };

// export default Home;
// -------------------------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { FaCamera, FaLightbulb, FaPalette } from "react-icons/fa";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
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

  return (
    <div className="text-white overflow-hidden relative" style={{
      background: 'rgb(2,0,36)',
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%)'
    }}>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0 bg-black/40"></div>
        
        <motion.div 
          className="relative z-10 bg-black/70 p-10 rounded-lg max-w-4xl mx-4 backdrop-blur-sm"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation 
            sequence={[
              "Photographers", 
              1000, 
              "Visual Storytellers", 
              1000, 
              "Creators of Art", 
              1000,
              "Memory Capturers",
              1000
            ]} 
            wrapper="h1" 
            className="text-5xl md:text-7xl font-extrabold text-white mb-4" 
            repeat={Infinity} 
          />
          <p className="text-xl md:text-2xl mt-4 font-light text-gray-300">
            Capturing moments that tell your unique story through light and perspective
          </p>
          
          <motion.div 
            className="mt-8 flex gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/portfolio">
              <motion.button 
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Session
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="text-white text-sm">Scroll to explore</div>
          <div className="w-1 h-10 bg-white mx-auto mt-2"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">About My Vision</h2>
            <p className="text-lg mb-6 text-gray-300">
              Photography is not just about capturing what you see, but revealing what you feel. 
              Every shot is a piece of a larger story, a moment frozen in time that speaks volumes.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              With over a decade of experience, I specialize in creating images that resonate 
              with emotion and authenticity, blending technical precision with artistic intuition.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-center">
                <FaCamera className="text-white text-xl" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-600 to-blue-400 flex items-center justify-center">
                <FaLightbulb className="text-white text-xl" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <FaPalette className="text-white text-xl" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative h-96"
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
            />
          </motion.div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Explore My Specialties
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 gap-4 min-h-[500px] md:h-[700px] w-full">
          {gridItems.map((item) => (
            <motion.div
              key={item.id}
              className={`relative rounded-xl overflow-hidden ${item.className} group`}
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
                  className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={item.title} 
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 ${hoveredIndex === item.id ? 'opacity-100' : 'opacity-0'}`}>
                  <motion.h3 
                    className="text-xl md:text-2xl font-bold text-white text-center px-2"
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
      <section className="flex flex-col items-center gap-20 py-20 relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
        
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`relative w-11/12 md:w-3/4 overflow-hidden rounded-2xl ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
            initial={{ opacity: 0, y: 100, rotate: index % 2 === 0 ? 5 : -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 1 : -1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ zIndex: images.length - index }}
          >
            <motion.img
              src={img}
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0px 25px 50px -12px rgba(255, 255, 255, 0.25)",
                transition: { duration: 0.3 }
              }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white">Photo Title {index + 1}</h3>
              <p className="text-gray-300">Location, Year</p>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-10 bg-black/50">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Client Experiences
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="bg-gray-800 p-8 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 overflow-hidden">
                  <img src={images[item % images.length]} className="w-full h-full object-cover" alt="Client" />
                </div>
                <div>
                  <h4 className="font-bold">Client Name {item}</h4>
                  <p className="text-gray-400 text-sm">Wedding Client</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Working with this photographer was an incredible experience. They captured our wedding day perfectly, with every image telling its own beautiful story."
              </p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        className="py-32 text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 z-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Ready to Create Something Extraordinary?
          </motion.h3>
          <motion.p 
            className="text-xl mb-8"
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
            <Link to="/ContactUs">
              <motion.button 
                className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg shadow-lg hover:bg-gray-100"
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
      </motion.section>

      {/* Footer */}
      <footer className="bg-black/80 py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Photography</h4>
            <p className="text-gray-400">
              Capturing life's most precious moments with creativity and passion.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Services</h5>
            <ul className="space-y-2">
              <li className="text-gray-400">Wedding Photography</li>
              <li className="text-gray-400">Portrait Sessions</li>
              <li className="text-gray-400">Commercial Work</li>
              <li className="text-gray-400">Photo Editing</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Connect</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FiInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FiTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FiFacebook />
              </a>
            </div>
            <p className="text-gray-400 mt-4">info@photography.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Photography. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;