import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("https://itproducts.onrender.com/products")
      .then((res) => res.json())
      .then((results) => setProducts2(results))
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
      <Carousel />
      <h1 className="text-3xl mb-4 font-bold text-center">PRODUCTS LIST</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.concat(products2).map((product) => (
          <div
            key={product.id}
            className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleImageClick(product.id)}
          >
            <img
              className="w-full h-64 object-cover border-b-2 border-gray-300"
              src={product.image || product.img}
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
