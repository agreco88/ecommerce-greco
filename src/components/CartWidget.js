import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../CartContext";

const CartWidget = () => {
  const { itemCount } = useContext(Context);
  return (
    <div
      className=" flex justify-between items-center rounded-lg bg-gray-400
        px-3 w-20 bg-opacity-10 transition-all duration-200 "
    >
      {itemCount > 0 ? (
        <Link to={"/cart"} className="flex justify-between items-center w-full">
          <span className="text-2xl font-light shadow-2xl">{itemCount}</span>
          <ShoppingCartIcon className="h-6" />
        </Link>
      ) : (
        <div className="opacity-10 cursor-not-allowed flex justify-between items-center w-full">
          <span className="text-2xl font-light shadow-2xl">{itemCount}</span>
          <ShoppingCartIcon className="h-6" />
        </div>
      )}
    </div>
  );
};

export default CartWidget;
