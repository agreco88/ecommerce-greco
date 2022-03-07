import React, { useContext, useEffect } from "react";
import { CheckIcon, ClockIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Context from "../CartContext";

const CartItem = ({ product }) => {
  const { removeItem } = useContext(Context);
  console.log("Product:", product);
  return (
    <>
      <div className="flex-shrink-0">
        <Link to={`/detail/${product.id}`}>
          <img
            src={product.img}
            alt={product.imgAlt}
            className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
          />
        </Link>
      </div>
      <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex">
              <h3 className="text-lg font-bold">
                <a
                  href={product.href}
                  className="font-medium text-gray-700 hover:text-gray-800"
                >
                  {product.quantity} x {product.name}
                </a>
              </h3>
            </div>
            <div className="mt-1 flex text-xs">
              <p className="text-gray-500">{product.description}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">
              ${product.price * product.quantity}
            </p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <div className="absolute top-0 right-0">
              <button
                type="button"
                className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Remove</span>
                <XIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                  onClick={() => removeItem(product)}
                />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 flex text-sm text-gray-700 space-x-2">
          {product.inStock ? (
            <CheckIcon
              className="flex-shrink-0 h-5 w-5 text-green-500"
              aria-hidden="true"
            />
          ) : (
            <ClockIcon
              className="flex-shrink-0 h-5 w-5 text-gray-300"
              aria-hidden="true"
            />
          )}

          <span>{product.stock ? "In stock" : `No more items in stock`}</span>
        </p>
      </div>
    </>
  );
};

export default CartItem;
