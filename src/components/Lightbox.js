import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-primary)]/90 p-4"
        onClick={onClose}
      >
        <div className="relative max-w-6xl w-full">
          <button
            className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <div className="flex flex-col items-center">
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[80vh] w-auto rounded-lg shadow-xl"
            />
            <div className="mt-4 text-white text-center max-w-2xl">
              <h3 className="text-2xl font-bold">{image.alt}</h3>
              <p className="text-lg mt-2">{image.caption}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;