import React from "react";
import Navbar from "./Navbar";
import videobg from "../assets/videobg.mp4";
// import Divs from "./Divs";
// import videobg from "../assets/fn4.mp4";
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import img from "../assets/logo.jpg";
import Features from "../Features";
import img1 from '../assets/home1.jpeg'
import videobg1 from "../assets/videobg1.mp4";
import videobg2 from "../assets/videobg2.mp4";
import img5 from "../assets/dashboard.jpeg";
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
      <div className="relative lg:pt-8 pt-20">
        {/* <video
          src={videobg2}
          className=" blur-sm top-5 absolute rounded-lg "
          autoPlay
          playsInline
          muted
          loop
        ></video> */}
        <img src={img5} className="w-full blur-sm top-5 absolute h-auto" />
        <div className=" relative pt-14 lg:pt-10 my-auto first max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center text-5xl flex flex-col justify-center text-sky-400  overflow-hidden">
       <h1 className="font-bold text-gree-400  lg:text-6xl md:text-xl md:pr-5">CloudSkool++ 
       <br />
       Simple, Safe, Smart</h1>
        <h1 className="text-amber-900 relative font-bold lg:text-xl p-2 lg:p-40 lg:pt-5 lg:pb-5 text-4xl md:text-xl md:py-6">
        E L I M I N A T E T H E C O M P L I C A T I O N S O F M U L T I P L E  
S O F T W A R E S O L U T I O N S, CS++ M A N A G E S I T A L L !
          </h1>
<p className="font-bold text-blue-800 p-0 italic pt-3 pl-5 pr-5 text-3xl">
The 
CloudSkool++  
enables 
complete 
insights for the 
management 
with a single 
click
            </p>
        </div>
      </div>
      {/* ----------------------------------------- service------------------------------------------------------- */}
          <Features/>
  
      </div>
  );
}

export default Home;
