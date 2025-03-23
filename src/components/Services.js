import React from "react";
import Navbar from "./Navbar";
import videobg from "../assets/videobg.mp4";
// import Divs from "./Divs";
// import videobg from "../assets/fn4.mp4";
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import img from "../assets/logo.jpg";
import img1 from '../assets/one.jpg'
// import img1 from '../assets/cons.jpeg';
// import img4 from '../assets/tech2.jpg'
// import img3 from "../assets/manage.jpg";
import { Link } from "react-router-dom";
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};
const words = [
  'Cloud InfraStructure',
  "Channel Integration",
  'Automatic Call Distribution',
  'CRM Integration'
];
function Home() {
  // Create a state variable to store the text opacity
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  const [index, setIndex] = useState(0);

  // A useEffect hook to set up a timer that updates the index every 2 seconds
  useEffect(() => {
    // A function that increments the index by one, or resets it to zero if it reaches the end of the array
    const updateIndex = () => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    // A variable to store the timer ID
    const timerId = setInterval(updateIndex, 1000); // A cleanup function that clears the timer when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="w-screen homediv relative overflow-hidden">
      <Navbar />
      {/* ----------------------------------------- service------------------------------------------------------- */}
      <div className=" w-screen pt-8 relative pb-8">
      <RevealOnScroll>

        <h1 className="align-center text-gray-800  pt-16 text-center p-5  font-bold text-4xl">
        About the Program
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2  lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col   mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-xl text-xl p-3 lg:pt-20 pt-7 pr-4  lg:p-7 text-gray-800 "> This research internship allows MBA students to explore how AI is transforming
          communication channels in Indian businesses. Over 3-6 months, students visit local companies to gather insights.
       </p>
             </RevealOnScroll>
         <div className="text-xl text-gray-700 lg:pl-7 md:pl-5 pl-4 ">

             <ul>
          <li>1000 MBA students from 100 top colleges</li>
          <li>Flexible, remote work</li>
          <li>Certification and public recognition</li>
          <li>Earnings up to ₹100,000</li>
        </ul>
         </div>
         </div>
        </div>
        <div>
        <h1 className="align-center text-gray-800  pt-16 text-center p-5  font-bold text-4xl">
        Benifits of our program
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2  lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col   mx-auto ">
            <RevealOnScroll>
          <div className="text-xl text-gray-800 pt-16 md:pl-5  ">

            <ul>
          <li>  Real-world exposure by engaging with IT and service sector companies.
          </li>
          <li>Learn business communication trends driven by AI.
       
       

</li>
          <li> Certificates and recognition from the organizing body.</li>
          <li> Mentoring from industry professionals.</li>
        </ul>
          </div>
             </RevealOnScroll>

  
         </div>
        </div>
        </div>
        </RevealOnScroll>
      </div>
  
      </div>
  );
}

export default Home;
