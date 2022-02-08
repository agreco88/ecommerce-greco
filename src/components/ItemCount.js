import { useState, useEffect } from "react";
import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/outline";

const ItemCount = ({ itemName, stock, initialNumber, onAdd }) => {
  const [count, setCount] = useState(stock - initialNumber);
  const [inStock, setInStock] = useState(stock);

  useEffect(() => {
    console.log("Running useEffect");
    // Specify how to clean up after this effect:
    return function cleanup() {
      console.log("Running useEffect cleanup");
    };
  }, [count]);

  const incrementItems = () => {
    setCount(count + 1);
    setInStock(inStock - 1);
  };
  const decrementItems = () => {
    setCount(count - 1);
    setInStock(inStock + 1);
  };

  return (
    <div className="m-4 flex flex-col justify-around items-center gap-1 rounded-2xl bg-gray-400 px-3 bg-opacity-10 transition-all duration-200 sm:w-1/3 md:w-1/5 h-36 content-around relative">
      <div className="flex  w-full justify-between">
        <span className="font-light">{itemName}</span>
        <span className="font-thin">
          <span>In stock:</span>
          <span className="font-normal">{inStock}</span>
        </span>
      </div>

      <div className="flex bg-white rounded-sm shadow-inner border border-gray-400 border-opacity-25 w-full justify-around">
        <button
          onClick={() => incrementItems()}
          disabled={inStock === 0 && "disabled"}
          className={inStock === 0 ? "opacity-10" : "opacity-100"}
        >
          <PlusSmIcon className="h-6" />
        </button>
        <span className="text-2xl font-light shadow-2xl">{count}</span>
        <button
          onClick={() => decrementItems()}
          disabled={count === 0 && "disabled"}
          className={count === 0 ? "opacity-10" : "opacity-100"}
        >
          <MinusSmIcon className="h-6" />
        </button>
      </div>
      <button
        className="w-full bg-gray-300 font-thin text-sm h-8 rounded-sm"
        onClick={() => console.log("Todo ADD function")}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemCount;
