import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const deleteProduct = (productID) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:3000/products/${productID}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setProducts((prevProducts) =>
              prevProducts.filter((product) => product.id !== productID)
            );
            swal("Poof! Your product has been deleted!", {
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
            swal("Oops! Something went wrong. Please try again.", {
              icon: "error",
            });
          });
      } else {
        swal("Your product is safe!");
      }
    });
  };

  return (
    <div>
      <div className="text-3xl font-serif font-bold mt-10 space-y-5">
        <h1>PRODUCTS PAGE</h1>
        <Link
          to={"/add"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add To Page
        </Link>
      </div>

      {/* Check if there are products */}
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div className="mt-32" key={product.id}>
            <table className="w-full table-auto border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">TITLE</th>
                  <th className="px-4 py-2 text-left">PRICE</th>
                  <th className="px-4 py-2 text-left">DESCRIPTION</th>
                  <th className="px-4 py-2 text-left">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">{product.id}</td>
                  <td className="px-4 py-2">{(product.title || "").slice(0, 10)}</td>
                  <td className="px-4 py-2">{product.price}</td>
                  <td className="px-4 py-2">{(product.description || "").slice(0, 20)}</td>
                  <td className="px-4 py-2">
                    <Link
                      to={`/products/${product.id}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                    >
                      View
                    </Link>
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2">
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}

export default Products;
