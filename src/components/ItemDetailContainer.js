import { useState, useEffect } from "react";
import { getProduct } from "../components/Asyncmock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";
import { EmojiSadIcon } from "@heroicons/react/solid";
import PropagateSpinner from "./PropagateSpinner";

const override = css`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const [counter, setCounter] = useState("button");

  const { productId } = useParams();

  useEffect(() => {
    getProduct(productId)
      .then((item) => {
        setProduct(item);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProduct();
    };
  }, [productId]);

  const handleCount = () => {
    if (counter === "button") {
      setCounter("input");
    } else {
      setCounter("button");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? (
        <PropagateSpinner
          text={"FETCHING YOUR PRODUCT FROM THE SHELF"}
          color={"#e5e7eb"}
        />
      ) : product ? (
        <ItemDetail product={product} inputType={counter} />
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-2xl font-thin uppercase">
            Product does not exist.
          </p>
          <EmojiSadIcon className="h-12 text-gray-500" />
        </div>
      )}
    </div>
  );
};
export default ItemDetailContainer;
