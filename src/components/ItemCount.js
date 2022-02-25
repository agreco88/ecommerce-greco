import { useState, useEffect, useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/outline";
import { CartContextProvider } from "../CartContext";

const ItemCount = ({
  itemPrice,
  onAdd,
  quantity,
  setQuantity,
  inStock,
  setInStock,
}) => {
  // useEffect(() => {
  //   // console.log("Running useEffect");
  //   // // Specify how to clean up after this effect:
  //   // return function cleanup() {
  //   //   console.log("Running useEffect cleanup");
  //   // };
  // }, [quantity]);

  const incrementItems = () => {
    console.log(quantity);
    console.log(inStock);
    setQuantity(quantity + 1);
    setInStock(inStock - 1);
  };
  const decrementItems = () => {
    setQuantity(quantity - 1);
    setInStock(inStock + 1);
  };

  return (
    <>
      <div className="flex items-center gap-2 bg-opacity-10 transition-all duration-200 relative my-9">
        <div className="flex self-start rounded-sm shadow-inner border border-gray-400 border-opacity-25 justify-around w-1/2 bg-white">
          <button
            onClick={() => incrementItems()}
            disabled={inStock === 0 && "disabled"}
            className={inStock === 0 ? "opacity-10" : "opacity-100"}
          >
            <PlusSmIcon className="h-6" />
          </button>
          <span
            className={`${
              quantity === 0 && "opacity-10"
            } text-2xl font-light shadow-2xl`}
          >
            {quantity}
          </span>
          <button
            onClick={() => decrementItems()}
            disabled={(quantity === 0 || quantity === 1) && "disabled"}
            className={
              quantity === 0 || quantity === 1 ? "opacity-10" : "opacity-100"
            }
          >
            <MinusSmIcon className="h-6" />
          </button>
        </div>
        {quantity > 0 && (
          <div className="text-center w-1/2">
            <span className="font-thin pl-1">
              Cost for {quantity} {quantity > 1 ? "items: " : "item: "}
            </span>
            <span className="font-light text-3xl">${quantity * itemPrice}</span>
          </div>
        )}
      </div>
      <form
        className={`
          w-full items-center 
          transition duration-500 ease-in-out 
          ${
            quantity === 0
              ? "opacity-50 bg-gray-300"
              : "bg-yellow-500 hover:bg-yellow-400"
          }
          border border-transparent rounded-full 
          py-3 px-8 
          text-base font-medium text-black 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500`}
      >
        <button
          onClick={() => onAdd(quantity)}
          type="submit"
          className="flex gap-2 w-full justify-center items-center"
          disabled={quantity === 0 && "disabled"}
        >
          {quantity === 0 ? (
            <span className="flex gap-1">NO ITEMS IN STOCK</span>
          ) : (
            <span className="flex gap-1">
              Add to cart <ShoppingCartIcon className className="w-4" />
            </span>
          )}
        </button>
      </form>
    </>
  );
};

export default ItemCount;
