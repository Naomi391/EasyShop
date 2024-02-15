import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/easyShopItems")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleImageClick = (productId) => {
    const productUrl = `/product/${productId}`;
    navigate(productUrl);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl mb-4 font-bold text-center">PRODUCTS LIST</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleImageClick(product.id)}
          >
            <img
              className="w-full h-64 object-cover border-b-2 border-gray-300"
              src={product.image}
              alt={product.title}
            />

            <div className="p-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base mb-2">
                Price: ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
