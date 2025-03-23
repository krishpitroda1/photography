import React,{ useState } from 'react'
import img1 from "../assets/j1.jpg";
import img2 from "../assets/j2.jpg";
import img3 from "../assets/j3.jpeg";
import img4 from "../assets/j4.jpg";
import img5 from "../assets/j5.jpg";
import img6 from "../assets/j6.jpeg";

const photos = [
  { src: img1, alt: 'Person 1', caption: 'This is Person 1' },
  { src: img2, alt: 'Person 2', caption: 'This is Person 2' },
  { src: img3, alt: 'Person 3', caption: 'This is Person 3' },
  { src: img4, alt: 'Person 4', caption: 'This is Person 4' },
  { src: img5, alt: 'Person 4', caption: 'This is Person 4' },
  { src: img6, alt: 'Person 4', caption: 'This is Person 4' },

];


function Jewellery() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
  
    // Function to open lightbox
    const openLightbox = (photo) => {
      setCurrentImage(photo);
      setIsLightboxOpen(true);
    };
  
    // Function to close lightbox
    const closeLightbox = () => {
      setIsLightboxOpen(false);
      setCurrentImage(null);
    };
  
  return (
    <div>
        <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen p-4">
    <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-700">Jewellery Images</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo, index) => (
        <div 
          key={index} 
          className="group relative cursor-pointer"
          onClick={() => openLightbox(photo)}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-auto object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-50 text-white py-2 px-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {photo.caption}
          </div>
        </div>
      ))}
    </div>

    {/* Lightbox Overlay */}
    {isLightboxOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        onClick={closeLightbox}
      >
        <div className="relative">
          <img
            src={currentImage?.src}
            alt={currentImage?.alt}
            className="max-w-full max-h-screen rounded-lg"
          />
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 lg:mt-20 text-white text-2xl font-bold p-2 bg-black bg-opacity-50 rounded-full"
          >
            &times;
          </button>
        </div>
      </div>
    )}
  </div>
    </div>
  )
}

export default Jewellery
