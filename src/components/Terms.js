import React ,{useState,useRef,useEffect} from 'react'
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
  },);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
 
  return (
    <div className='relative pt-20'>
         
         <h1 className="align-center text-gray-600  pt-10 text-center w-screen  p-5  font-bold text-3xl ">
         Terms and Conditions
             </h1>
         <RevealOnScroll>

         <div className=" w-screen p-10" >
          <p className="p-4 pb-0 text-lg  font-bold">
          Welcome to Ai1k</p>
          <p className="p-4  pb-0 ml-4 text-lg ">
          These terms and conditions outline the rules and regulations for the use of Ai1k's website and services, located at www.ai1k.online. By accessing this website and using our services, you agree to accept these terms and conditions. If you do not agree to all the terms and conditions stated on this page, please do not continue to use Ai1k</p>
          <p className="p-4  pb-0 font-bold text-lg ">
          Terminology     </p>
          <p className="p-4  pb-0 ml-4 text-lg ">
          The following terminology applies to these Terms and Conditions, Privacy Policy, and Disclaimer Notice:    
        
            <p className="p-4  pb-0 ml-4 text-lg ">    -	“Client,” “You,” and “Your” refer to you, the person accessing this website and using our services in compliance with these terms.
            </p>
        
            <p className="p-4  pb-0 ml-4 text-lg ">
            	- “The Company,” “We,” “Our,” and “Us” refer to Ai1k.
        
             </p>
             <p className="p-4  pb-0 ml-4 text-lg ">
            	-	“Party” refers to both the Client and ourselves.
             </p>
        
             
            
         
          </p>

          <p className="p-4 font-bold pb-0  text-lg ">Cookies
  </p>
          <p className="p-4 ml-4 pb-0  text-lg ">
          We use cookies to enhance your experience on Ai1k. By accessing our website, you consent to the use of cookies in accordance with our Privacy Policy. Cookies help improve website functionality and may be used by our advertising and affiliate partners. </p>
           <p className="p-4 pb-0  text-xl  font-bold">
           License </p> 
           <p>

           </p>
           <p className="p-4 ml-4 pb-0  text-lg ">
           Unless otherwise stated, Ai1k and/or its licensors own the intellectual property rights for all material on Ai1k. All intellectual property rights are reserved. You may access this material for personal use only, subject to the following restrictions:  
           <p className="p-4  pb-0 ml-4 text-lg ">
          - You must not republish material from Ai1k without proper attribution. </p>
        
            <p className="p-4  pb-0 ml-4 text-lg ">
            - You must not sell, rent, or sub-license material from Ai1k.
             </p>
             <p className="p-4  pb-0 ml-4 text-lg ">
            		- “Party” refers to both the Client and ourselves.
             </p>
             <p className="p-4  pb-0 ml-4 text-lg ">
             - You must not redistribute content from Ai1k unless the content is specifically made for redistribution.  </p>
         </p>
         <p className="p-4 pb-0  text-xl  font-bold">
         
         User-Generated Content </p>
           <p className="p-4 ml-4 pb-0  text-lg ">
           Users may post comments, feedback, or other content on our website or through our services. The opinions expressed do not reflect the views of SMSCloud Hub. We are not responsible for user-generated content and reserve the right to monitor and remove any content deemed inappropriate or in violation of these terms.</p> 
          <p className="p-4 pb-0 text-xl font-bold ">
          Use of Google RCS Services </p>
          <p className="p-4 pb-0 ml-4 text-xl ">
          By using our Google RCS services, you agree to:
          <p className="p-4  pb-0 ml-4 text-lg ">
          - Use RCS only for lawful and permissible purposes. </p>
        
            <p className="p-4  pb-0 ml-4 text-lg ">
            	- Refrain from engaging in spamming, phishing, or illegal marketing activities via RCS.        </p>
             <p className="p-4  pb-0 ml-4 text-lg ">
            	- Adhere to Google’s RCS messaging guidelines, which we facilitate through our platform. </p>
            
           </p>
           <p className="p-4 pb-0 text-xl font-bold ">
          Data Protection and Privacy
          </p>
        
          <p className="p-4 pb-0 ml-4 text-xl ">
          Your privacy is important to us. Please refer to our Privacy Policy to understand how we handle your personal information. We ensure that data collected through our messaging and ERP platforms, including RCS communications, is stored securely and processed in compliance with applicable laws.</p>
         
        
         
          <p className="p-4 font-bold pb-0 text-xl ">
          Service Availability and Updates  </p>
          <p className="p-4 pb-0 ml-4 text-xl ">
          We strive to keep our services available 24/7. However, we reserve the right to temporarily suspend or discontinue any service for maintenance or updates without prior notice. While we will make efforts to ensure minimal disruption, we are not liable for any downtime. </p>
          <p className="p-4 font-bold pb-0 text-xl ">
          Hyperlinking to Our Content
          </p>
          <p className="p-4 pb-0 ml-4 text-xl ">
          Organizations such as government agencies, search engines, and news organizations may link to our website without prior written approval, provided that the link:
          <p className="p-4  pb-0 ml-4 text-lg ">
         - is not deceptive</p>
        
            <p className="p-4  pb-0 ml-4 text-lg ">
        	- Does not falsely imply sponsorship, endorsement, or approval.  </p>
             <p className="p-4  pb-0 ml-4 text-lg ">
           - Fits within the context of the linking party’s site. </p>
            
          
            </p>
          <p className="p-4 font-bold pb-0 text-xl ">
          Limitation of Liability  </p>
          <p className="p-4 pb-0 ml-4 text-xl ">
          Ai1k will not be held liable for any damages arising out of the use or inability to use our website or services, to the extent permitted by law. This includes, but is not limited to, damages for data loss, business interruption, or any other losses. </p>
          <p className="p-4 font-bold pb-0 text-xl ">
          Third-Party Services and Links </p>
          <p className="p-4 pb-0 ml-4 text-xl ">
          Our website and services may include links to third-party websites or services for your convenience. We are not responsible for the content or accuracy of these third-party websites and disclaim any liability related to their usage.</p>
          <p className="p-4 font-bold pb-0 text-xl ">
          Jurisdiction and Governing Law
           </p>    
          <p className="p-4 pb-0 ml-4 text-xl ">
          These terms and conditions are governed by the laws of India. Any disputes arising under these terms will be resolved under the jurisdiction of Indian courts.</p>
       
        </div>
        </RevealOnScroll>
        
    </div>
  )
}

export default Terms
