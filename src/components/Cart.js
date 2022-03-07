import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../CartContext";
import CartItemList from "./CartItemList";
import CartOrderSummary from "./CartOrderSummary";

export default function Cart() {
  const { cart } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Cart length:", cart.length);
    setLoading(false);
  }, []);

  return (
    <div className="bg-white">
      {cart.length > 0 ? (
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Your cart
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            {loading ? (
              <p>loading</p>
            ) : (
              cart && <CartItemList products={cart} />
            )}
            {loading ? (
              <p>calculating costs</p>
            ) : (
              cart && <CartOrderSummary products={cart} />
            )}
          </form>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8 h-full">
          <div className="text-2xl flex flex-col gap-8 py-16 font-extrabold text-gray-900">
            <p className="text-5xl font-thin md:w-3/4 tracking-wide">
              Whoops! No items in cart, you need to start doing some shopping :)
            </p>
            <div className="flex uppercase font-light text-2xl mt-10">
              <Link
                to={"/"}
                className="border-b font-normal border-transparent hover:border-b hover:border-black transition-all duration-200"
              >
                Browse products
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
