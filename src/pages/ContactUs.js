import React, { useState } from "react";
import "./Contact.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    weddingDate: "",
    location: "",
    details: "",
    heardAbout: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      {/* Contact Header Section */}
      <div className="contact-section bg-cover bg-center flex items-center justify-center text-center text-white py-20"
           style={{ backgroundImage: "https://cdn.myportfolio.com/3475acc0-c812-4ad6-864f-d17d159ddab9/07355e48-98af-4864-a010-e06ce24afd93_rw_1920.jpg?h=ae2f3da26624b2c7719d415a365fe788" }}>
        <div className="contact-content max-w-2xl p-6">
          <h2 className="text-3xl font-bold uppercase tracking-widest">GET IN TOUCH BELOW</h2>
          <p className="text-lg mt-2">IF YOU WANT TO DROP ME A LINE TO REQUEST A PRICE LIST OR EVEN JUST TO SAY HELLO...</p>
          <p className="text-sm italic mt-2">I will reply within 48 hours. Please check your email SPAM folder as sometimes my response can find its way there.</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex justify-center items-center my-10">
        <form 
          onSubmit={handleSubmit} 
          className="bg-[#f9e5dc] p-8 rounded-lg shadow-lg w-full max-w-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="firstName" type="text" placeholder="First Name" onChange={handleChange} required 
                   className="p-3 border border-gray-300 rounded w-full"/>
            <input name="lastName" type="text" placeholder="Last Name" onChange={handleChange} required 
                   className="p-3 border border-gray-300 rounded w-full"/>
          </div>

          <input name="email" type="email" placeholder="Email" onChange={handleChange} required 
                 className="p-3 border border-gray-300 rounded w-full mt-4"/>
          <input name="phone" type="text" placeholder="Phone" onChange={handleChange} required 
                 className="p-3 border border-gray-300 rounded w-full mt-4"/>
          <input name="weddingDate" type="date" onChange={handleChange} required 
                 className="p-3 border border-gray-300 rounded w-full mt-4"/>
          <input name="location" type="text" placeholder="Wedding Location" onChange={handleChange} required 
                 className="p-3 border border-gray-300 rounded w-full mt-4"/>
          <textarea name="details" placeholder="Tell me about your wedding day..." onChange={handleChange} required 
                    className="p-3 border border-gray-300 rounded w-full mt-4"></textarea>
          <input name="heardAbout" type="text" placeholder="How did you hear about me?" onChange={handleChange} required 
                 className="p-3 border border-gray-300 rounded w-full mt-4"/>

          <button type="submit" 
                  className="bg-black text-white p-3 rounded w-full mt-6 text-lg font-semibold hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
