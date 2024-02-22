import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

const Home = ({productsToDisplay}) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = (productId) => {
    const productUrl = `/product/${productId}`;
    navigate(productUrl);
  };

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const addToCart = (productId) => {
    // Implement your addToCart functionality here
    console.log("Product added to cart:", productId);
  };

  return (
    <div className="container mt-8">
      <Carousel />
      <div className="grid grid-cols-3 gap-4">
        {productsToDisplay.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleImageClick(product.id)}
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={handleMouseLeave}
            style={{ width: "100%" }}
          >
            <img
              className="w-full h-auto object-contain border-b-2 border-gray-300"
              src={product.image || product.img}
              alt={product.title}
              style={{ maxHeight: "300px" }}
            />
            <div className="p-4">
              <div className="text-gray-700 text-base mb-2">
                {product.title}
              </div>
              <p className="font-bold text-xl mb-2">Price: ${product.price}</p>
              {hoveredProductId === product.id && (
                <button
                  className="bg-black text-green-500 font-bold py-2 px-4 rounded-full border-2  hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                  onClick={() => addToCart(product.id)}
                  style={{ transition: "opacity 0.3s" }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
