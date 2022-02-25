import { CheckIcon, BanIcon, StarIcon } from "@heroicons/react/solid";
import React, { useContext, useState } from "react";
import Context from "../CartContext";
import ItemCount from "./ItemCount";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemDetail(props) {
  const { setCartItems } = useContext(Context);
  let initialCount;
  props.product.stock === 0 ? (initialCount = 0) : (initialCount = 1);
  const [quantity, setQuantity] = useState(initialCount);
  const [inStock, setInStock] = useState(props.product.stock - quantity);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product image */}
        <div className="order-1 md:order-2 mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={props.product.img}
              alt={props.product.imgAlt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {props.product.name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                ${props.product.price}
              </p>

              <div className="ml-4 pl-4 border-l border-gray-300">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            props.product.reviews.average > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">
                      {props.product.reviews.average} out of 5 stars
                    </p>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {props.product.reviews.totalCount} reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">
                {props.product.description}
              </p>
            </div>

            {inStock > 0 ? (
              <div className="mt-6 flex items-center">
                <CheckIcon
                  className="transition duration-500 ease-in-out flex-shrink-0 w-5 h-5 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-2 text-sm text-gray-500">
                  {inStock} in stock and ready to ship
                </p>
              </div>
            ) : (
              <div className="mt-6 flex items-center">
                <BanIcon
                  className="transition duration-500 ease-in-out flex-shrink-0 w-5 h-5 text-red-500"
                  aria-hidden="true"
                />
                <p className="ml-2 text-sm text-gray-500">No items in stock.</p>
              </div>
            )}
            <ItemCount
              quantity={quantity}
              setQuantity={setQuantity}
              inStock={inStock}
              setInStock={setInStock}
              itemPrice={props.product.price}
            />
          </section>
        </div>

        {/* Product form */}
        {/* <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
          <section aria-labelledby="options-heading">
            <form>
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full gap-2 
                    transition duration-500 ease-in-out bg-yellow-500 hover:bg-yellow-400
                    border border-transparent rounded-full py-3 px-8 
                    flex items-center justify-center 
                    text-base font-medium text-black 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Add to cart <ShoppingCartIcon className className="w-4" />
                </button>
              </div>
            </form>
          </section>
        </div> */}
      </div>
    </div>
  );
}
