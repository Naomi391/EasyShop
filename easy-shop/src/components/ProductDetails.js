import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import StarRating from "./StarRating";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/easyShopItems/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched product data:", data);
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleAddToCart = () => {};

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl mb-4 font-bold text-center">Product Details</h1>

      <div className="max-w-3xl mx-auto bg-white rounded overflow-hidden shadow-lg m-4 flex">
        <img className="w-1/2 h-auto" src={product.image} alt={product.title} />
        <div className="flex-1 px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">Brand: {product.brand}</p>
          <p className="text-gray-700 text-base">
            Category: {product.category}
          </p>
          <p className="text-gray-700 text-base">Price: ${product.price}</p>
          <p className="text-gray-700 text-base">
            Rating: <StarRating rating={product.rating.rate} />(
            {product.rating.count} reviews)
          </p>
          <p className="text-gray-700 text-base">
            Description: {product.description}
          </p>
          <div className="mt-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {product.category}
            </span>
          </div>
          <p className="text-gray-700 text-base mb-2 font-bold mt-4">
            Price: ${product.price}
          </p>

          <div className="mt-4">
            <button
              className="bg-black text-green-500 font-bold py-2 px-4 rounded-full border-2  hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              onClick={handleAddToCart}
            >
              <Link to="/cart">ADD TO CART</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
