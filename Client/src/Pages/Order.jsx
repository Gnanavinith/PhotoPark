import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaGift, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { CartContext } from "../context/cartContext";
import { FrameContext } from "../context/frameContext"; // Assuming you have a FrameContext

const Order = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { frame } = useContext(FrameContext); // Using context to get frame data

  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("12x8");
  const [selectedThickness, setSelectedThickness] = useState("3 MM");
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!frame) return <div>No frame selected.</div>;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEnquirySubmit = () => {
    if (email.trim() === "") {
      alert("Please enter your email to submit an enquiry.");
      return;
    }

    console.log("Enquiry email:", email);
    alert(`Enquiry sent successfully from: ${email}`);
    setEmail("");
  };

  const handleAddToCart = () => {
    const newItem = {
      productId: frame.id || Date.now(),
      name: frame.name,
      image: uploadedImage || "/placeholder.svg", // Passing the uploaded image to the cart
      size: selectedSize,
      thickness: selectedThickness,
      quantity,
      price: 599,
      totalPrice: quantity * 599,
    };

    addToCart(newItem); // Adding the item with the selected image to the cart
    navigate("/cart"); // Navigate to the cart page after adding
  };
  
  return (
    <div className="min-h-screen pt-16 p-8 bg-white font-[poppins]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Upload Section */}
        <div className="relative">
          <div
            className="w-full h-96 border flex items-center justify-center"
            style={{ border: `${frame.borderWidth}px solid ${frame.color}` }}
          >
            <img
              src={uploadedImage || "/placeholder.svg"}
              alt={frame.name}
              className="w-full h-full object-cover"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
            title="Upload your image"
          />
          <p className="text-center text-sm text-gray-500 mt-2">
            Click on the frame to upload your photo
          </p>
        </div>

        {/* Info Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{frame.name || "Landscape FRAME"}</h2>
          <p className="text-red-600 text-xl font-bold">
            ₹599 <span className="line-through text-gray-400">₹999</span>{" "}
            <span className="text-green-600">Free Shipping</span>
          </p>
          <p className="text-sm text-gray-600">Ex Tax: ₹599</p>

          <div>
            <label className="block text-sm font-semibold mb-1">Select Size</label>
            <div className="flex flex-wrap gap-2">
              {["12x8", "14x10", "17x12", "20x14"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded border ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Acrylic Thickness</label>
            <div className="flex gap-2">
              {["3 MM", "5 MM", "8 MM"].map((thickness) => (
                <button
                  key={thickness}
                  onClick={() => setSelectedThickness(thickness)}
                  className={`px-3 py-1 rounded border ${selectedThickness === thickness ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  {thickness}
                </button>
              ))}
            </div>
          </div>

          <p className="text-gray-700">Selected size: <strong>{selectedSize}</strong></p>
          <p className="text-gray-700">Thickness: <strong>{selectedThickness}</strong></p>
          <p className="text-gray-700">Mounting Method: <strong>Adhesive Tape (Included)</strong></p>
          <p className="text-gray-700">Brand: <strong>Photo Frame</strong></p>

          <div className="p-3 bg-yellow-50 border rounded">
            <p className="text-yellow-800 font-medium flex items-center gap-2">
              <FaGift /> Complimentary Gift
            </p>
            <p className="text-sm text-gray-700">Add Photo Fridge Magnet For Free</p>
            <p className="text-xs text-gray-500">(Photo Upload Option Available After Add to Cart.)</p>
          </div>

          <div className="flex items-center space-x-2">
            <label className="text-sm font-semibold">Qty:</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-16 border rounded px-2 py-1"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-2 rounded-lg w-full flex items-center justify-center gap-2"
          >
            <FaShoppingCart /> Add To Cart
          </button>
        </div>

        {/* Highlights & Bulk Info */}
        <div className="bg-gray-50 p-4 rounded-lg shadow space-y-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">HIGHLIGHTS</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>High Quality Acrylic Material</li>
              <li>Easy to Install</li>
              <li>Shatter Proof</li>
              <li>Long Lasting Print</li>
              <li>Fade Resistant Print</li>
              <li>Glass Like Optical Clarity</li>
            </ul>
          </div>

          <div className="text-sm text-blue-600">
            <p className="font-semibold">NEED BULK QUANTITIES?</p>
            <p>Amazing Deals on Bulk Orders Available Now!</p>
            <p className="mt-2 text-gray-700">Perfect for Gifts and Return Gifts for any occasions.</p>

            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full flex items-center justify-center gap-2">
              <FaPhoneAlt /> Call & Book Bulk Orders
            </button>

            <div className="mt-4">
              <label className="block text-sm font-semibold mb-1 text-black">Send Enquiry:</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded mb-2"
              />
              <button
                onClick={handleEnquirySubmit}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full flex items-center justify-center gap-2"
              >
                <FaEnvelope /> Submit Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews & Related */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 px-4 py-8">
        <div className="order-1 md:order-none w-full min-h-[500px]">
          <iframe
            src="https://widgets.commoninja.com/iframe/1da6bf23-9261-4880-a4c1-5dd884fbd27f"
            width="100%"
            height="500"
            frameBorder="0"
            scrolling="no"
            title="Reviews"
          />
        </div>

        <div className="order-2 md:order-none">
          <h4 className="text-xl font-semibold mb-4">Related Products</h4>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((_, idx) => (
              <div key={idx} className="border p-4 rounded-lg shadow text-center">
                <img src="/placeholder.svg" alt="Related" className="w-full h-32 object-cover mb-2" />
                <p className="font-medium">Related Frame {idx + 1}</p>
                <p className="text-sm text-gray-500">₹999</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
