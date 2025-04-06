
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { FaCamera, FaLightbulb, FaPalette } from "react-icons/fa";
function Footer() {
  return (
    <div>
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
                    <li><Link to="/Portfolio" className="text-gray-400 hover:text-white transition">Portfolio</Link></li>
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
  )
}

export default Footer
