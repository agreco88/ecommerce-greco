const ItemListCointainer = ({ userName, greeting, cartItemCount }) => {
  return (
    <div className="flex container mx-auto h-50vh transition-all duration-200">
      <h1 className="flex flex-col gap-4 w-4/5  h-min justify-center self-center">
        <span className="text-6xl font-extralight">{`${greeting} ${userName}, `}</span>
        <span className="text-2xl font-thin">{`You have ${cartItemCount} items in your cart. Do you want to keep shopping or do you want to checkout?`}</span>
        <span className="flex gap-4">
          <button className="hover:border-b hover:border-black py-1 transition-all duration-200">
            Keep browsing
          </button>
          <button className="hover:border-b hover:border-black py-1 transition-all duration-200">
            Checkout
          </button>
        </span>
      </h1>
    </div>
  );
};

export default ItemListCointainer;
