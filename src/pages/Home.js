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

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Home = () => {
  return (
    <div className="bg-black text-white overflow-hidden relative">
      {/* Hero Section */}
      <motion.section className="relative h-screen flex flex-col items-center justify-center text-center" style={{ backgroundImage: `url(${img6})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <motion.div className="bg-black bg-opacity-60 p-10 rounded-lg" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
          <TypeAnimation sequence={["Photographers", 1000, "Visual Storytellers", 1000, "Creators of Art", 1000]} wrapper="h1" className="text-6xl font-extrabold text-white" repeat={Infinity} />
          <p className="text-xl mt-4">Experience Photography Like Never Before</p>
        </motion.div>
      </motion.section>

      {/* Vertical Scrolling Gallery with Layered Image-on-Image Effect */}
      <section className="flex flex-col items-center gap-12 py-16">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative w-3/4 overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ zIndex: images.length - index }}
          >
            <motion.img
              src={img}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 40px rgba(255, 255, 255, 0.3)" }}
            />
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <motion.section className="py-16 text-center bg-gradient-to-r from-purple-500 to-pink-500">
        <h3 className="text-3xl font-bold">Ready to Book a Shoot?</h3>
        <p className="mt-2">Let’s capture your special moments together.</p>
        <Link to="/ContactUs">
          <motion.button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Contact Me
          </motion.button>
        </Link>
      </motion.section>
    </div>
  );
};

export default Home;
