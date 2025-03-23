import React, { useEffect ,useState,useRef} from "react";
import img from "../assets/about.jpeg";
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
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="w-screen  overflow-x-hidden p-8  pt-20 ">
      <div className="">
        <h1 className="lg:l-5 sm:pl-5 pl-5 align-center text-gray-700 pt-10 text-center p-5  font-bold text-3xl">
        <RevealOnScroll>
          About Us
        </RevealOnScroll>
        </h1>
      </div>
      <div className="">
        <RevealOnScroll>
        <div className="lg:flex md:grid lg:grid-cols-2 md:pl-3 md:p-5 lg:p-0 sm:p-0">
           <img
            className="w-[500px] rounded-2xl mx-auto  "
            src={img}
            alt="/"
          /> 
          <div className="flex flex-col lg:pl-5 justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-xl sm:text-xl text-blue-600 text-xl font-bold p-5">
          <RevealOnScroll>
          SMSCloud Hub provides innovative, cloud-based communication solutions, empowering Carriers, Hubs, Telcos, and Enterprise businesses to connect seamlessly through multiple channels, including A2P SMS. Our platform makes communication more conversational, personalized, engaging, and user-friendly.
          <br/>
          <p className="pt-5">

          Backed by a team of experts with deep knowledge in A2P SMS communication, cloud technology, and digital transformation, SMSCloud Hub is at the forefront of revolutionizing business communication. 
          </p>
          <p className="pt-5">
          Our latest initiative, Ai1k, supports students in their academic journeys by offering real-world internship experiences. Through Ai1k, students can learn about the impact of AI, earn through valuable insights, and cultivate an entrepreneurial mindset.   </p>
<br /> 
{/* We thrive with Connectivity, Platform & Managed Services in India and International Market providing  solutions with the right mix of Cloud Technology & Telecommunications
Our primary focus is Messaging, CPaaS & Technology. */}
</RevealOnScroll>
            </h1>
      </div>
        </div>
        </RevealOnScroll>
      </div>
   
    </div>
  );
}

export default About;
