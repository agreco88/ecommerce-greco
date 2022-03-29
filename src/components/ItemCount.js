import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/outline";

const ItemCount = ({
  itemPrice,
  quantity,
  setQuantity,
  inStock,
  setInStock,
}) => {
  const incrementItems = () => {
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
    </>
  );
};

export default ItemCount;
