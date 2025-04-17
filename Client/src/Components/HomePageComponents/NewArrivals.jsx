import React from "react";
import "../HomePageComponents/NewArrival.css";

import arrival1 from "../../assets/NewArrival/arrival1.jpg";
import arrival2 from "../../assets/NewArrival/arrival2.jpg";
import arrival3 from "../../assets/NewArrival/arrival3.jpg";
import arrival4 from "../../assets/NewArrival/arrival4.jpg";
import arrival5 from "../../assets/NewArrival/arrival5.jpg";
import arrival6 from "../../assets/NewArrival/arrival6.jpg";
import arrival7 from "../../assets/NewArrival/arrival7.jpg";
import arrival8 from "../../assets/NewArrival/arrival8.jpg";

const categories = [
  {
    title: "Acrylic",
    description: "Stylish and durable acrylic photo frames for modern decor.",
    images: [
      { src: arrival1, name: "Acrylic Frame 1", rating: 4.2, price: "₹159", originalPrice: "₹599", description: "Best for Office/School/Gym/Travel", frameType: "Acrylic Frame with Modern Design" },
      { src: arrival2, name: "Acrylic Frame 2", rating: 4.5, price: "₹199", originalPrice: "₹799", description: "Durable and stylish", frameType: "Premium Acrylic Frame" },
      { src: arrival3, name: "Acrylic Frame 3", rating: 4.0, price: "₹129", originalPrice: "₹499", description: "Perfect for Home Decor", frameType: "Simple Acrylic Frame" },
      { src: arrival4, name: "Acrylic Frame 4", rating: 4.7, price: "₹179", originalPrice: "₹699", description: "Elegant and modern design", frameType: "Glossy Acrylic Frame" },
    ],
  },
  {
    title: "Frames", // Adding Frames category
    description: "Classic and elegant photo frames for any occasion.",
    images: [
      { src: arrival1, name: "Frame 1", rating: 4.2, price: "₹159", originalPrice: "₹599", description: "Best for Office/School/Gym/Travel", frameType: "Classic Frame Design" },
      { src: arrival2, name: "Frame 2", rating: 4.5, price: "₹199", originalPrice: "₹799", description: "Durable and stylish", frameType: "Modern Frame" },
      { src: arrival3, name: "Frame 3", rating: 4.0, price: "₹129", originalPrice: "₹499", description: "Perfect for Home Decor", frameType: "Elegant Frame" },
      { src: arrival4, name: "Frame 4", rating: 4.7, price: "₹179", originalPrice: "₹699", description: "Elegant and modern design", frameType: "Glossy Frame" },
    ],
  },
  {
    title: "Canvas",
    description: "High-quality canvas prints that make a bold statement.",
    images: [
      { src: arrival5, name: "Canvas Frame 1", rating: 4.3, price: "₹299", originalPrice: "₹999", description: "Classic design for any room", frameType: "Sturdy Canvas Frame" },
      { src: arrival6, name: "Canvas Frame 2", rating: 4.6, price: "₹349", originalPrice: "₹1,199", description: "High-quality canvas print", frameType: "High-Resolution Canvas Print" },
    ],
  },
  {
    title: "Wooden Cutouts",
    description: "Beautiful wooden cutouts to enhance your space.",
    images: [
      { src: arrival7, name: "Wooden Cutout 1", rating: 4.8, price: "₹499", originalPrice: "₹1,199", description: "Great for gifting and home decor", frameType: "Intricate Wooden Design" },
    ],
  },
  {
    title: "Backlight Photo Frames",
    description: "Illuminated frames with LED backlight for a glowing effect.",
    images: [
      { src: arrival8, name: "Backlight Frame 1", rating: 4.9, price: "₹799", originalPrice: "₹1,499", description: "LED backlight for a glowing effect", frameType: "Backlight LED Frame" },
    ],
  },
];

const NewArrivals = () => {
  return (
    <div className="p-4 mx-4 sm:mx-[5vw] my-10">
      <div className="font-[Poppins] text-center">
        <h1 className="text-4xl font-extrabold mb-4">New Arrivals</h1>
        <p className="text-2xl text-pink-600 font-semibold mb-1">Photo Frame Collections</p>
        <p className="text-lg text-gray-500 mb-8">Choose from a variety of stunning styles</p>
      </div>

      {/* Main container with border and scroll */}
      <div className="border-6 border-gray-900 shadow-lg max-h-[100vh] overflow-y-auto p-6 bg-white">
        {categories.map((category, idx) => (
          <div key={idx} className="mb-12 text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{category.title}</h2>
            <p className="text-xl text-gray-600 text-center mb-6">{category.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.images.map((item, index) => (
                <div key={index} className="p-2 ">
                  <img
                    src={item.src}
                    alt={`${category.title}-${index}`}
                    className="w-full h-60 object-cover rounded-lg hover:scale-105 transition-transform"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    <div className="flex justify-center items-center mt-2">
                      <span className="text-yellow-500">{"★".repeat(Math.round(item.rating))}</span>
                      <span className="text-gray-500 ml-2">{item.rating} out of 5 stars</span>
                    </div>
                    <p className="text-lg font-bold mt-2">{item.price}</p>
                    <p className="text-sm text-gray-400 line-through">{item.originalPrice}</p>
                    <p className="text-sm text-green-500">Inclusive of all taxes</p>

                    {/* Frame Type Section */}
                    <p className="text-sm text-gray-600 mt-2">{item.frameType}</p>

                    {/* Buy Now Button */}
                    <button className="mt-4 bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
 