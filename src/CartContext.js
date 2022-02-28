import { createContext, useState } from "react";

// CART ITEM EXAMPLE (TO ADD, DELETE)
// {
//   id: 2,
//   name: "Samsung S21+",
//   price: 800,
//   category: "celular",
//   img: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
//   imgAlt: "Silver Samsung S21+ with box",
//   stock: 16,
//   reviews: { average: 4, totalCount: 1291 },
//   description:
//     "Super high-resolution camera and 8K video. Galaxy's fastest processor yet. All-day intelligent battery. A striking new design. Everyday just got epic.",
// },

const Context = createContext([[], () => {}]);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      //if item exists: Search for it and update its quantity attribute.
      let updatedCart = cart;
      for (var cartItem in updatedCart) {
        if (updatedCart[cartItem].id === item.id) {
          updatedCart[cartItem].quantity =
            updatedCart[cartItem].quantity + quantity;
          break; //Stop loop. Item found and updated
        }
      }
      let updatedCount = itemCount + quantity;
      setItemCount(updatedCount);
      setCart(updatedCart);
    } else {
      //If item deos not exist: Add it with a quantity attribute.
      let updatedItem = {
        ...item,
        quantity,
      };
      let updatedCart = cart;
      let updatedCount = itemCount + quantity;

      updatedCart.push(updatedItem);
      setItemCount(updatedCount);
      setCart(updatedCart);
    }
  };

  const removeItem = (id) => {
    //TODO QUANTITY UPDATE
    if (isInCart(id)) {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
    } else {
      console.log("Item is not in the cart, no need to remove.");
    }
  };

  const clearCart = () => {
    setCart([]);
    setItemCount(0);
  };

  const isInCart = (id) => {
    return cart.some((itemInCart) => itemInCart.id === id);
  };

  return (
    <Context.Provider
      value={{ cart, itemCount, addItem, removeItem, clearCart }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
