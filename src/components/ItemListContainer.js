import { useContext } from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getDocs, collection } from "@firebase/firestore";
import { firestoreDatabase } from "./firebase/firebase";

import PropagateSpinner from "./PropagateSpinner";
import { Link } from "react-router-dom";

import Context from "../CartContext";

const ItemListCointainer = ({ userName, greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemCount } = useContext(Context);

  useEffect(() => {
    getDocs(collection(firestoreDatabase, "products")).then((querySnapshot) => {
      console.log(querySnapshot);
      const products = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log(products);
      setProducts(products);
      setLoading(false);
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
          {itemCount > 0 ? (
            <>
              <p className="text-2xl font-thin md:w-3/4 tracking-wide">
                You have {itemCount} {itemCount === 1 ? "item" : "items"} in
                your cart. Do you want to checkout?
              </p>
              <div className="flex gap-8 text-sm">
                <Link
                  to={"/cart"}
                  className="uppercase border-b border-transparent hover:border-b hover:border-black transition-all duration-200"
                >
                  Checkout
                </Link>
              </div>
            </>
          ) : (
            <p className="text-2xl font-thin md:w-3/4 tracking-wide">
              You have NO items in your cart. Click on an item you like and add
              it to your cart.
            </p>
          )}
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
