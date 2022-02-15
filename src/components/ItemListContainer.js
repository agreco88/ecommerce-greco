import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const ItemListCointainer = ({ userName, greeting, cartItemCount }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=iphone")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setProducts(res.results);
      });
  }, []);

  return (
    <div className="flex flex-col container mx-auto transition-all duration-200">
      <h1 className="flex flex-col gap-4 w-4/5 pt-16 px-8">
        <span className="text-6xl font-extralight">{`${greeting} ${userName}, `}</span>
        <span className="text-2xl font-thin">{`You have ${cartItemCount} items in your cart. Do you want to keep shopping or do you want to checkout?`}</span>
        <span className="flex gap-8">
          <button className="border-b border-transparent hover:border-b hover:border-black transition-all duration-200">
            Keep browsing
          </button>
          <button className="border-b border-transparent hover:border-b hover:border-black transition-all duration-200">
            Checkout
          </button>
        </span>
      </h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListCointainer;
