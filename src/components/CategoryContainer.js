import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProducts, getProductsByCategory } from "./Asyncmock";
import PropagateSpinner from "./PropagateSpinner";
import Item from "./Item";

const CategoryContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductsByCategory(categoryId)
      .then((itemsByCategory) => {
        console.log(`Filtered products by ${categoryId}:`, itemsByCategory);
        setProducts(itemsByCategory);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
