import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./pages/products";
import Sidebar from "./Components/Sidebar";
import Home from "./pages/Home";
import Add from "./pages/Add";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <div className="flex flex-row gap-10 space-x-7">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add" element={<Add/>} />
            <Route path="/products/:productID" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
