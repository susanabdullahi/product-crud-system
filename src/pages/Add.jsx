import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

   let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/products", { title, price })
       .then((res) => {
        console.log(res.data);
         navigate("/product");
       });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div>
        <h1 className="text-3xl font-bold font-serif text-center mb-8">
          Add Product
        </h1>
      </div>
      <div className="mt-10 text-lg space-y-6">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block font-serif mb-2 text-gray-700">Title</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-serif mb-2 text-gray-700">Price</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product price"
              onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white mt-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
