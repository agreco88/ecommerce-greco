import React, { useState, useContext, useEffect } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import Context from "../CartContext";

const CartOrderSummary = ({ confirmOrder }) => {
  const { cartTotal, shippingFees, tax } = useContext(Context);
  const [totalTaxes, setTotalTaxes] = useState((tax / 100) * cartTotal);

  //Recalculate taxes if cartTotal changes
  useEffect(() => {
    setTotalTaxes((tax / 100) * cartTotal);
  }, [cartTotal]);

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16  rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
    >
      <div className="md:fixed md:w-1/4 border rounded-lg bg-gray-50 shadow-md p-8">
        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
          Order summary
        </h2>

        <dl className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <dt className="text-sm text-gray-600">Subtotal</dt>
            <dd className="text-sm font-medium text-gray-900">${cartTotal}</dd>
          </div>
          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt className="flex items-center text-sm text-gray-600">
              <span>Shipping estimate</span>
              <a
                href="#"
                className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">
                  Learn more about how shipping is calculated
                </span>
                <QuestionMarkCircleIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </a>
            </dt>
            <dd className="text-sm font-medium text-gray-900">
              ${shippingFees}
            </dd>
          </div>
          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt className="flex text-sm text-gray-600">
              <span>Tax estimate ({tax}%)</span>
              <a
                href="#"
                className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">
                  Learn more about how tax is calculated
                </span>
                <QuestionMarkCircleIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </a>
            </dt>
            <dd className="text-sm font-medium text-gray-900">${totalTaxes}</dd>
          </div>
          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt className="text-base font-extrabold text-gray-900">
              Order total
            </dt>
            <dd className="text-base font-extrabold text-gray-900">
              ${cartTotal + shippingFees + totalTaxes}
            </dd>
          </div>
        </dl>

        <div className="mt-6">
          <button
            onClick={confirmOrder}
            className="
            transition duration-500 ease-in-out 
            w-full bg-yellow-500 
            border border-transparent shadow-sm 
            py-3 px-4 rounded-full 
            font-medium text-base text-black 
            hover:bg-yellow-400  
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-yellow-500"
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartOrderSummary;
// className =
//   "rounded-full py-3 px-8 flex gap-2 w-full justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-yellow-500";
