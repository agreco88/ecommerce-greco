import { ShoppingCartIcon, ChevronDownIcon } from "@heroicons/react/outline";

const CartWidget = ({ numberOfItems }) => {
  return (
    <div
      className="
        flex justify-between items-center gap-1 
        rounded-lg bg-gray-400 px-3
        bg-opacity-10
        transition-all duration-200
        "
    >
      <span className="text-2xl font-light shadow-2xl">{numberOfItems}</span>
      <ShoppingCartIcon className="h-6" />
      {/* <ChevronDownIcon className="h-4" /> */}
    </div>
  );
};

export default CartWidget;
