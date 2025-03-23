import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Absolutely loved the experience! The photos were stunning.",
    image: "http://localhost:3000/static/media/1.f87c31bbe07419d941ef.jpg",
  },
  {
    name: "Ananya Patel",
    text: "Professional and creative! Highly recommend.",
    image: "http://localhost:3000/static/media/1.f87c31bbe07419d941ef.jpg",
  },
  {
    name: "Vikram Singh",
    text: "Captured every moment perfectly. Truly amazing work!",
    image: "http://localhost:3000/static/media/1.f87c31bbe07419d941ef.jpg",
  },
  {
    name: "Sonia Verma",
    text: "The best photographer I’ve worked with. Stunning shots!",
    image: "http://localhost:3000/static/media/1.f87c31bbe07419d941ef.jpg",
  },
];

const Home = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 py-12">
        {/* Left - Text */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-lg text-gray-500">We are experienced</h3>
          <h1 className="text-4xl sm:text-5xl font-bold text-black">Photographers</h1>
        </div>

        {/* Right - Photo Grid */}
        <div className="grid grid-cols-3 gap-4 md:w-1/2">
          <img src={img1} alt="Photography 1" className="rounded-lg object-cover shadow-lg" />
          <img src={img2} alt="Photography 2" className="rounded-lg object-cover shadow-lg" />
          <img src={img3} alt="Photography 3" className="rounded-lg object-cover shadow-lg" />
          <img src={img4} alt="Photography 4" className="rounded-lg object-cover shadow-lg" />
          <img src={img5} alt="Photography 5" className="rounded-lg object-cover shadow-lg" />
          <img src={img6} alt="Photography 6" className="rounded-lg object-cover shadow-lg" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 px-6 sm:px-12 py-16">
  {/* Photographer Image */}
  <img 
    src={img1} 
    alt="Photographer" 
    className="w-60 h-60 rounded-full shadow-lg md:ml-12"
  />

  {/* Photographer Info */}
  <div className="md:w-1/2">
    <h3 className="text-3xl font-semibold">Meet the Photographer</h3>
    <p className="mt-4 text-gray-600">
      Passionate about capturing stunning visuals, I specialize in portraits, weddings, and product photography.
    </p>
  </div>
</section>

<section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">What Our Clients Say</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Pagination]}
        className="w-11/12 "
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center  hover:shadow-2xl transition-all duration-300">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500">
  <img 
    src={testimonial.image} 
    alt={testimonial.name} 
    className="w-full h-full object-cover object-top"
  />
</div>

              <p className="text-gray-700 italic mt-6 px-6">"{testimonial.text}"</p>
              <h4 className="mt-4 text-lg font-semibold text-indigo-600">{testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>      {/* Call to Action */}
      <section className="py-16 px-6 sm:px-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <h3 className="text-3xl font-bold">Ready to Book a Shoot?</h3>
        <p className="mt-2">Let’s capture your special moments together.</p>
        <Link to="/ContactUs">
        <button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200">
          Contact Me
        </button>
     
        </Link>
         </section>
    </div>
  );
};

export default Home;
