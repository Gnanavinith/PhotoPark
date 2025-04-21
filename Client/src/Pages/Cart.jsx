import React, { useContext } from "react";
import { CartContext } from "../context/cartContext"; // ✅ Correct path
import { useNavigate } from "react-router-dom"; // Importing navigate for redirection

const Cart = () => {
  const { cartItems, removeFromCart, totalAmount, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBuyNow = (productId) => {
    // Navigate to checkout with the product or handle payment for the specific item
    navigate(`/checkout/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-xl text-gray-600">Your cart is empty</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-6" />
                <div className="flex-1">
                  <h4 className="text-xl font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">Thickness: {item.thickness}</p>
                  <p className="mt-2 text-lg font-semibold">Price: ₹{item.totalPrice}</p>
                </div>
                <div className="flex flex-col space-y-3">

                   {/* Buy Now button inside each product */}
                   <button
                    onClick={() => handleBuyNow(item.productId)}
                    className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
                  >
                    Buy Now
                  </button>
                  
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
                  >
                    Remove
                  </button>

                 
                </div>
              </div>
            ))}
            <h3 className="mt-6 text-2xl font-semibold">Total: ₹{totalAmount}</h3>
            <button onClick={clearCart} className="mt-4 bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-900 transition">
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
