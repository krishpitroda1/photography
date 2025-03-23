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

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
 
  return (
    <div className='relative pt-20'>
         
         <h1 className="align-center text-gray-600  pt-10 text-center w-screen  p-5  font-bold text-3xl ">
            Privacy Policy
         </h1>
         <RevealOnScroll>

         <div className=" w-screen p-10" >
          <p className="p-4 pb-0 text-lg  font-bold">
        </p>
          {/* <p className="p-4  pb-0 ml-4 text-lg ">
          Arrow Telelink (“us”, “we”, or “our”) operates CloudSkool++  app (the “Mobile app”). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Mobile APP.
        </p> */}
          <p className="p-4  pb-0 font-bold text-lg ">
          Communications
          </p>
          <p className="p-4  pb-0 ml-4 text-lg ">
          We may use your Personal Information to contact you with students and parents to communicate updates related to institue. This is done via Notice Board functionality. We will never share the information with anyone outside our institue. This information is already available in the institue records.
           </p>
          <p className="p-4 font-bold pb-0  text-lg ">
         Security
          </p>
          <p className="p-4 ml-4 pb-0  text-lg ">
          The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. We, Ai1k do not share the personal information with anyone or any third party. All the Student/Parents information is kept confidential. We suggest Students/Parents not to share the login id and password with anyone and change the password on regular basis.
          </p>
           <p className="p-4 pb-0  text-xl  font-bold">
           Changes to This Privacy Policy
           </p> 
           <p className="p-4 ml-4 pb-0  text-lg ">
           This Privacy Policy is effective as of 26th December 2022 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our webMobile APP.
          </p>
          <p className="p-4 pb-0  text-xl  font-bold">
          Contact Us If you have any questions about this Privacy Policy, please contact us.
           </p>
           <p className="p-4 ml-4 pb-0  text-lg ">
           What personal data we collect and why we collect it Comments We use your Personal Information with the permission of the the respective institue who is using the App but only for providing and improving the Mobile APP. By using the Mobile APP, you agree to the collection and use of information in accordance with this policy. While using our Mobile APP, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name (“Personal Information”).
          </p> 
          <p className="p-4 pb-0 text-xl font-bold ">
          Log Data
          </p>
          <p className="p-4 pb-0 ml-4 text-xl ">
          Like many mobile app operators, we collect information that your device sends whenever you visit our app (“Log Data”).
        No other information is collected from Student/Parent other than what is already available in institue records
        No advertisements are shown in the app Data is not shared by any third party.
          </p>
          <p className="p-4 pb-0 ml-4 text-xl ">
          This Log Data may include information such as your mobile Internet Protocol (“IP”) address, the pages of our Mobile APP that you visit, the time and date of your visit, the time spent on those pages and other statistics. In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this.
          </p>
          <p className="p-4 font-bold pb-0 text-xl ">
          APIs
          </p>
          <p className="p-4 pb-0 ml-4 text-xl ">
          We us API for tracking the institue bus location. This is done to track the GPS device installed in institue buses which in turn tracks the live location of the institue bus. The API only fetches the data from the GPS and doesn’t share any data from the App to anyone or any system. It’s a one way communication.
          </p>
          <p className="p-4 font-bold pb-0 text-xl ">
          Cookies
          </p>
          <p className="p-4 pb-0 ml-4 text-xl ">
          Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web Mobile APP and stored on your computer/mobile hard drive.
          </p>
           </div>
        </RevealOnScroll>
        
    </div>
  )
}

export default Privacy
