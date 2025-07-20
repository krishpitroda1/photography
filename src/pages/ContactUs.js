// import React, { useState } from "react";
// import "./Contact.css";

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     weddingDate: "",
//     location: "",
//     details: "",
  
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSubmitStatus("success");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           weddingDate: "",
//           location: "",
//           details: "",
//           heardAbout: "",
//         });
//       } else {
//         throw new Error("Failed to send message");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="contact-page">
//       {/* Hero Section */}
//       <div 
//         className="contact-hero bg-cover bg-center flex items-center justify-center text-center text-white py-24 px-4"
//         style={{ 
//           backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), url('https://cdn.myportfolio.com/3475acc0-c812-4ad6-864f-d17d159ddab9/07355e48-98af-4864-a010-e06ce24afd93_rw_1920.jpg?h=ae2f3da26624b2c7719d415a365fe788')",
//           backgroundSize: "cover",
//           backgroundPosition: "center"
//         }}
//       >
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
//             GET IN TOUCH
//           </h2>
//           {/* <p className="text-lg md:text-xl mb-4">
//             just say hello...
//           </p> */}
//           <p className="text-sm italic">
//             I'll reply within 48 hours. Please check your spam folder.
//           </p>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
//         <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
//           <div className="md:flex">
//             {/* Form Side */}
//             <div className="p-8 md:p-10 w-full">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Form</h3>
              
//               {submitStatus === "success" && (
//                 <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
//                   Thank you! Your message has been sent successfully.
//                 </div>
//               )}

//               {submitStatus === "error" && (
//                 <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
//                   Failed to send message. Please try again later.
//                 </div>
//               )}

//               <form onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
//                       First Name *
//                     </label>
//                     <input
//                       id="firstName"
//                       name="firstName"
//                       type="text"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
//                       Last Name *
//                     </label>
//                     <input
//                       id="lastName"
//                       name="lastName"
//                       type="text"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email *
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="mt-6">
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone *
//                   </label>
//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="mt-6">
//                   <label htmlFor="weddingDate" className="block text-sm font-medium text-gray-700 mb-1">
//                     Event Date *
//                   </label>
//                   <input
//                     id="weddingDate"
//                     name="weddingDate"
//                     type="date"
//                     value={formData.weddingDate}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="mt-6">
//                   <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
//                     Event Location *
//                   </label>
//                   <input
//                     id="location"
//                     name="location"
//                     type="text"
//                     value={formData.location}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="mt-6">
//                   <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
//                     Tell me about that Event *
//                   </label>
//                   <textarea
//                     id="details"
//                     name="details"
//                     rows="4"
//                     value={formData.details}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                   ></textarea>
//                 </div>

             
//                 <div className="mt-8">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-gradient-to-r from-amber-500 to-red-500 text-white py-4 px-6 rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
//                   >
//                     {isSubmitting ? 'Sending...' : 'Send Message'}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactUs() {
  const [state, handleSubmit] = useForm("mdkzavzj");

  if (state.succeeded) {
    return (
      <div className="text-center mt-8">
        <p className="text-green-600 text-xl font-semibold pt-40 pb-48 pb-50">Thanks for your info i will get back to you with in 48 hours!</p>
      </div>
    );
  }

  return (
    <div className='pt-20 pb-20'>
    <form 
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-6"
    >
      <div>
        <label 
          htmlFor="email" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <label 
          htmlFor="message" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 disabled:opacity-50"
      >
        {state.submitting ? "Submitting..." : "Submit"}
      </button>
    </form>

    </div>
    
  );
}

export default ContactUs;
