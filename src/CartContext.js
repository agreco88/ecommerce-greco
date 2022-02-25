import { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log("Cart context:", cartItems);
  return (
    <Context.Provider value={[cartItems, setCartItems]}>
      {children}
    </Context.Provider>
  );
};

export default Context;
