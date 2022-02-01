import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts, currency } from "./products";
import { addToCart, useLoggedIn } from "cart/cart";

export default function HomeContent() {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      console.log(data);
      setProducts(data);
    });

    const source = new EventSource("http://localhost:8080/products-sse/sse");

    source.addEventListener("open", (data) => {
      console.log("SSE opened!");
      console.log(data);
    });

    source.addEventListener("message", (e) => {
      console.log(e.data);
      const data = JSON.parse(e.data);

      console.log("data", data.product);

      setProducts(data.product);
    });

    source.addEventListener("error", (e) => {
      console.error("Error: ", e);
    });

    return () => {
      source.close();
    };
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <div className="flex">
              <div className="flex-grow font-bold">
                <span>{product.name}</span>
              </div>
              <div className="flex-end">{currency.format(product.price)}</div>
            </div>
            <div className="text-sm mt-4">{product.description}</div>
          </Link>
          {loggedIn && (
            <div className="text-right mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm p-2 rounded"
                onClick={() => addToCart(product.id)}
                id={`addToCart_${product.id}`}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
