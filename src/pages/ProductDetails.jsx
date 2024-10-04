import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let { productID } = useParams();
  const [product, setProduct] = useState(null); // Initial state is null

  useEffect(() => {
  
      fetch(`http://localhost:3000/products/${productID}`)
        .then((res) => res.json())
        .then((product) => setProduct(product));
    },[]);

   
  return (
    <>
      {product && <h1>{product.title}</h1>}
        
    </>
  );
}

export default ProductDetails;
