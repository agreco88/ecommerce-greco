import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { EmojiSadIcon } from "@heroicons/react/solid";
import PropagateSpinner from "./PropagateSpinner";

import { getDoc, doc } from "@firebase/firestore";
import { firestoreDatabase } from "./firebase/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(firestoreDatabase, "products", productId);

    getDoc(docRef).then((response) => {
      const product = { id: response.id, ...response.data() };
      setProduct(product);
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
