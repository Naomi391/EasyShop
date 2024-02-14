import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
