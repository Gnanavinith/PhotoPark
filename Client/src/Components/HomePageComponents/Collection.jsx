import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Grid, Layout, Layers, Lightbulb, Camera } from 'lucide-react';

// Acrylic
import acrylic1 from "../../assets/NewArrival/arrival1.jpg";
import acrylic2 from "../../assets/NewArrival/arrival2.jpg";
import acrylic3 from "../../assets/NewArrival/arrival3.jpg";
import acrylic4 from "../../assets/NewArrival/arrival4.jpg";

// Canvas
import canvas1 from "../../assets/NewArrival/arrival5.jpg";
import canvas2 from "../../assets/NewArrival/arrival6.jpg";
import canvas3 from "../../assets/NewArrival/arrival7.jpg";

// Wooden Cutouts
import wooden1 from "../../assets/NewArrival/arrival8.jpg";
import wooden2 from "../../assets/NewArrival/arrival9.jpg";

// Backlight Frames
import backlight1 from "../../assets/NewArrival/arrival10.jpg";
import backlight2 from "../../assets/NewArrival/arrival11.jpg";
import backlight3 from "../../assets/NewArrival/arrival12.jpg";

const categories = {
  "Acrylic": {
    icon: <Grid className="w-8 h-8" />,
    description: "Modern acrylic prints with vibrant colors",
    images: [acrylic1, acrylic2, acrylic3],
  },
  "Frames": {
    icon: <Camera className="w-8 h-8" />,
    description: "Stylish frames for your favorite moments",
    images: [canvas1, acrylic2, acrylic3],
  },
  "Canvas": {
    icon: <Layout className="w-8 h-8" />,
    description: "Premium quality canvas prints",
    images: [canvas1, canvas2, canvas3],
  },
  "Wooden Cutouts": {
    icon: <Layers className="w-8 h-8" />,
    description: "Handcrafted wooden art pieces",
    images: [wooden1, wooden2],
  },
  "Backlight Frames": {
    icon: <Lightbulb className="w-8 h-8" />,
    description: "Illuminated frames for stunning displays",
    images: [backlight1, backlight2, backlight3],
  }
};

function Collection() {
  const [selectedCategory, setSelectedCategory] = useState("Acrylic");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen mt-20 sm:mx-[5vw] font-[Poppins]">
      {/* Header */}
      <header>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 flex justify-center items-center gap-2">
            Art Collection
          </h1>
          <p className="text-gray-600 mt-5 text-xl italic">
            Curated expressions of creativity — one frame at a time.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile Category Selector */}
        <div className="md:hidden mb-8">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="w-full bg-white rounded-lg shadow-md px-4 py-3 flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              {categories[selectedCategory].icon}
              <span className="font-medium">{selectedCategory}</span>
            </div>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                showMobileMenu ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {showMobileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {Object.entries(categories).map(([name, { icon, description }]) => (
                  <motion.button
                    key={name}
                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    onClick={() => {
                      setSelectedCategory(name);
                      setShowMobileMenu(false);
                    }}
                    className={`w-full px-4 py-3 flex items-start space-x-3 ${
                      selectedCategory === name
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    <div
                      className={`${
                        selectedCategory === name ? "text-blue-600" : "text-gray-400"
                      }`}
                    >
                      {icon}
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{name}</div>
                      <div className="text-sm text-gray-500">{description}</div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-72">
            <div className="bg-white rounded-xl shadow-md p-4">
              <h2 className="text-2xl font-extrabold mb-4 px-2 uppercase">Categories</h2>
              <div className="space-y-2 cursor-pointer">
                {Object.entries(categories).map(([name, { icon, description }]) => (
                  <motion.button
                    key={name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory(name)}
                    className={`w-full p-3 cursor-pointer flex items-start space-x-3 rounded-lg transition-colors ${
                      selectedCategory === name
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className={selectedCategory === name ? "text-white" : "text-gray-400"}>
                      {icon}
                    </div>
                    <div className="text-left">
                      <div className="text-xl">{name}</div>
                      <div
                        className={`text-sm ${
                          selectedCategory === name
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {description}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="flex-1">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {categories[selectedCategory].images.map((imgSrc, index) => (
                <motion.div
                  key={imgSrc}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="rounded-xl overflow-hidden shadow-md bg-white"
                >
                  {/* Image with Light Effect if Backlight Frames */}
                  <div
                    className={`aspect-square overflow-hidden relative ${
                      selectedCategory === "Backlight Frames" ? "animate-pulse-light" : ""
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${selectedCategory} artwork ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />

                    {/* Optional overlay light flash */}
                    {selectedCategory === "Backlight Frames" && (
                      <div className="absolute inset-0 pointer-events-none rounded-xl bg-white opacity-0 animate-flicker" />
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">Acrylic Frame {index + 1}</h3>
                    <p className="text-sm text-gray-600 mt-1">Best for Office/School/Gym/Travel</p>
                    <div className="flex items-center mt-1 text-yellow-500">
                      <span className="text-base">★★★★</span>
                      <span className="ml-2 text-gray-700 text-sm">4.2 out of 5 stars</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-lg font-bold text-green-600">₹159</span>
                      <span className="text-sm line-through text-gray-400 ml-2">₹599</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>
                    <button className="mt-3 bg-blue-500 cursor-pointer text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition">
                      Customize Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Collection;
