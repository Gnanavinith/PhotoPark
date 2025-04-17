import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegImage, FaArrowRight } from "react-icons/fa";
import Hero from "../Components/FrameComponents/Hero";

const frameData = [
  {
    id: "classic",
    name: "Classic Frame",
    sizes: ["8x10", "12x16", "16x20"],
    price: 799,
    borderWidth: 4,
    color: "black",
  },
  {
    id: "modern",
    name: "Modern Frame",
    sizes: ["10x12", "14x18"],
    price: 999,
    borderWidth: 6,
    color: "gray",
  },
  {
    id: "vintage",
    name: "Vintage Frame",
    sizes: ["6x8", "8x10", "12x14"],
    price: 699,
    borderWidth: 5,
    color: "brown",
  },
];

const formatPrice = (price) => `₹${price}`;

const Frames = () => {
  const [hoveredFrame, setHoveredFrame] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <section className=" py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {frameData.map((frame) => (
              <div
                key={frame.id}
                className="border bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setHoveredFrame(frame.id)}
                onMouseLeave={() => setHoveredFrame(null)}
              >
                <div className="h-60 relative bg-gray-100 flex items-center justify-center">
                  <div
                    className={`transition-transform duration-300 ${
                      hoveredFrame === frame.id ? "scale-105" : ""
                    }`}
                    style={{
                      width: "80%",
                      height: "80%",
                      border: `${frame.borderWidth}px solid ${frame.color}`,
                    }}
                  >
                    <FaRegImage className="text-5xl text-gray-400 w-full h-full flex items-center justify-center" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold">{frame.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Available in: {frame.sizes.join(", ")}
                  </p>
                  <p className="mt-2 text-lg font-medium">
                    {formatPrice(frame.price)}
                  </p>
                </div>

                <div className="px-6 pb-6">
                  <Link
                    to="/order"
                    state={{ frame }} // Pass the selected frame data
                    className="block w-full"
                  >
                    <button className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                      Customize <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/order"
              state={{ frame: frameData }} // Pass all frame data
            >
              <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-black transition">
                View All Frames
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frames;
