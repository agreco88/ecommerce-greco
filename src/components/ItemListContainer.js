import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getProducts } from "./Asyncmock";
import PropagateSpinner from "./PropagateSpinner";

const ItemListCointainer = ({ userName, greeting, cartItemCount }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((item) => {
        setProducts(item);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      setProducts();
    };
  }, []);

  return (
    <>
      <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8 h-full">
        <div className="text-2xl flex flex-col gap-8 py-16 font-extrabold text-gray-900">
          <h2 className="text-6xl font-extralight">{`${greeting} ${userName}!`}</h2>
          <p className="text-2xl font-thin md:w-3/4 tracking-wide">
            You have {cartItemCount} items in your cart. Do you want to keep
            shopping or do you want to checkout?
          </p>
          <div className="flex gap-8 text-sm">
            <button className="uppercase border-b border-transparent hover:border-b hover:border-black transition-all duration-200">
              Keep browsing
            </button>
            <button className="uppercase border-b rounded-lg border-transparent hover:border-b hover:border-black transition-all duration-200 ">
              Checkout
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="h-50vh flex flex-col items-center justify-center">
          <PropagateSpinner
            text={"LOADING OUR AMAZING PRODUCT LIST"}
            color={"#e5e7eb"}
          />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListCointainer;
