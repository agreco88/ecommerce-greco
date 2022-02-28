import { ShoppingCartIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import Context from "../CartContext";

const CartWidget = () => {
  const { itemCount } = useContext(Context);
  return (
    <div
      className="
        flex justify-between items-center
        rounded-lg bg-gray-400 px-3
        w-24
        bg-opacity-10
        transition-all duration-200
        "
    >
      <span className="text-2xl font-light shadow-2xl">{itemCount}</span>
      <ShoppingCartIcon className="h-6" />
    </div>
  );
};

export default CartWidget;
