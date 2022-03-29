import React from "react";
import CartItem from "./CartItem";

const CartItemList = ({ products }) => {
  console.log("CarItemList (Container) props:", products);
  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-7">
      <h2 id="cart-heading" className="sr-only">
        Items in your shopping cart
      </h2>
      <ul
        role="list"
        className="border-t border-b border-gray-200 divide-y divide-gray-200"
      >
        {products.map((product) => (
          <li key={product.id} className="flex py-6 sm:py-10">
            <CartItem product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CartItemList;
