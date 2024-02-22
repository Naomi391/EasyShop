import { Route, Routes } from "react-router-dom";
import LoginUser from './components/SignIn';
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Comparison from "./components/Comparison";
import CompareDetails from "./components/CompareDetails";
import { useState } from "react";
import { useEffect } from "react";


function App() {

  // Fetch products data 
  // ===================================================== //
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/easyShopItems")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Obtain categories
  let allCategories = Array.from(new Set(products.map(item => item.category)));
  // ===================================================== //


  // Search functions
  // ===================================================== //
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const productsToDisplay = products.filter((item) => {
    if (selectedCategory === "All") return true;    
    return item.category === selectedCategory;
    }).filter((item) => {   // Chain the search filter to select category
        return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    })  
  // ===================================================== //


  return (
    <>
    <NavBar handleCategoryChange={handleCategoryChange} handleSearchChange={handleSearchChange} selectedCategory={selectedCategory} searchTerm={searchTerm} allCategories={allCategories}/>
      <Routes>
        <Route path="/" element={<Home productsToDisplay={productsToDisplay} />} />
        <Route path="/Login" element={<LoginUser />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Comparison" element={<Comparison />} />
        <Route path={"/Comparison/CompareDetails"} element={<CompareDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
