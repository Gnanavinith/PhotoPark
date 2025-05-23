import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CustomizeSteps from './CustomizeSteps';

const borderColors = [
  'border-red-500',
  'border-blue-500',
  'border-green-500',
  'border-yellow-500',
  'border-purple-500',
];

const photoQuotes = [
  "Every picture tells a story.",
  "Frame the moment, cherish forever.",
  "Memories that never fade.",
  "Your life. Your frame. Your style.",
  "Picture perfect memories.",
];

function Customize() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalFrames = borderColors.length;
  const [isManual, setIsManual] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalFrames);
    setIsManual(true);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalFrames) % totalFrames);
    setIsManual(true);
  };

  useEffect(() => {
    if (isManual) {
      const resetTimer = setTimeout(() => setIsManual(false), 1000);
      return () => clearTimeout(resetTimer);
    }

    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [activeIndex, isManual]);

  return (
    <div className="mt-20 flex flex-col items-center justify-center p-4 mx-[7vw] sm:mx-[7vw]">

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 text-center font-[poppins]">
        Customize Your Frame
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-12 text-center max-w-2xl font-[poppins]">
        Choose your favorite frame style and preview it in real-time. Make your memories stand out with a frame that fits your vibe!
      </p>

      <div className="relative w-full">
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 z-20 transition-colors"
            aria-label="Previous frame"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 z-20" />
          </button>

          {/* Frames Container */}
          <div className="relative 
            h-[340px] w-[240px] 
            sm:h-[440px] sm:w-[340px] 
            lg:h-[540px] lg:w-[390px]">
            {borderColors.map((color, index) => {
              const position = (index - activeIndex + totalFrames) % totalFrames;

              let transform = 'scale(0.8) translateX(-200%)';
              let zIndex = 0;
              let opacity = 0;

              if (position === 0) {
                transform = 'scale(1) translateX(0)';
                zIndex = 3;
                opacity = 1;
              } else if (position === 1) {
                transform = 'scale(0.85) translateX(60%)';
                zIndex = 2;
                opacity = 0.7;
              } else if (position === totalFrames - 1) {
                transform = 'scale(0.85) translateX(-60%)';
                zIndex = 1;
                opacity = 0.7;
              }

              return (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full ${color} border-8 rounded-2xl bg-white shadow-xl`}
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    transition: 'all 0.5s ease-in-out',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                    <span className="text-base sm:text-xl font-semibold text-gray-700 font-[poppins]">
                      {photoQuotes[index]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-lg z-20 hover:bg-gray-50 transition-colors"
            aria-label="Next frame"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {borderColors.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsManual(true);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index ? 'bg-gray-800 w-4' : 'bg-gray-400'
              }`}
              aria-label={`Go to frame ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <CustomizeSteps/>
    </div>
  );
}

export default Customize;
