import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Frame1 from "../../assets/frontend_assets/BestSellers/Frame4.jpg";
import Frame2 from "../../assets/frontend_assets/BestSellers/Frame5.jpg";
import Frame3 from "../../assets/frontend_assets/BestSellers/Frame6.jpg";
import Frame4 from "../../assets/frontend_assets/BestSellers/Frame7.jpg";
import backgroundFrame from "../../assets/frontend_assets/BestSellers/Frame1.jpeg";

const images = [
 Frame1,Frame2,Frame3,Frame4
];

const Bestsellers = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };


  return (
    <div className="mt-20 text-center text-4xl font-[poppins] ">
      <h1 className="text-4xl font-extrabold mb-2">Best Sellers</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Discover our most loved products – handpicked and highly rated by
        customers.
      </p>

      <div
        className="relative w-full h-[40rem] bg-cover bg-center bg-fixed mt-10"
        style={{
          backgroundImage: `url(${backgroundFrame})`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Right Corner Slideshow Container */}
        <div
          className="absolute w-[90%] md:w-[30rem] h-[25rem] overflow-hidden flex items-center justify-center border-2 border-black rounded-lg shadow-lg"
          style={{
            right: "5%",
            bottom: "10%",
          }}
        >
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt={`Slide ${currentImage + 1}`}
              className="absolute w-full h-full object-cover"
              initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Buttons Inside Slide */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full shadow-lg hover:bg-gray-900 transition"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full shadow-lg hover:bg-gray-900 transition"
          >
            <ChevronRight size={24} />
          </button>

          {/* Order Button */}
          <div className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg opacity-75 flex items-center shadow-lg">
            <span className="text-xl">Frame Your Moments!</span>
            <ArrowRight className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
