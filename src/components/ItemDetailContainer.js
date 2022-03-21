import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import PropagateSpinner from "./PropagateSpinner";

import { getDoc, doc, query, where } from "@firebase/firestore";
import { firestoreDatabase, getProductById } from "./firebase/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();
  useEffect(() => {
    setLoading(true);

    getProductById(productId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(`Error buscando producto: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProduct();
    };
  }, [productId]);

  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? (
        <PropagateSpinner
          text={"FETCHING YOUR PRODUCT FROM THE SHELF"}
          color={"#e5e7eb"}
        />
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};
export default ItemDetailContainer;
