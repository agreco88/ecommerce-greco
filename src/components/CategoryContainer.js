import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropagateSpinner from "./PropagateSpinner";

import { getDoc, collection, doc } from "@firebase/firestore";
import { getProducts } from "./firebase/firebase";

const CategoryContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(
          "Error in useEffect>getProducts (CategoryContainer.js):",
          error
        );
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProducts();
    };
  }, [categoryId]);

  return (
    <div>
      {loading && (
        <div className="h-50vh flex flex-col items-center justify-center">
          <PropagateSpinner
            text={`LOADING ${categoryId.toUpperCase()} ITEMS`}
            color={"#e5e7eb"}
          />
        </div>
      )}
      {products && !loading && (
        <div className="py-16 ">
          <ItemList products={products} category={categoryId} />
        </div>
      )}
    </div>
  );
};

export default CategoryContainer;
