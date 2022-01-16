import React, { useState, useEffect } from "react";
import { cart, deleteCart } from "cart/cart";
import { currency } from "home/products";

export default function CartContent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    return cart.subscribe((val) => setItems(val?.cartItems ?? []));
  }, []);

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} />
            <div>{item.name}</div>
            <div className="text-right">
              {currency.format(item.quantity * item.price)}
            </div>
          </React.Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right">
          {currency.format(items.reduce((a, v) => a + v.quantity * v.price, 0))}
        </div>
      </div>
      {items.length > 0 && (
        <div className="flex mb-10">
          <div className="flex-grow">
            <button
              id="clearcart"
              className="bg-white border border-green-800 text-green-800 text-sm py-2 px-5 rounded"
              onClick={deleteCart}
            >
              Clear Cart
            </button>
          </div>
          <div className="flex-end">
            <button
              id="clearcart"
              className="bg-green-800 border border-green-800 text-white text-sm py-2 px-5 rounded"
              onClick={deleteCart}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
